import express, { response } from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.listen(5432, () => {
    console.log("App running on port 5432");
  });

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  app.get("/", (request, response) =>{
    response.json("WOOO HOME ROUTE YIPPE!!");
  });

  app.get("/books", async  (request, response) => {
    const books = await db.query("SELECT * FROM books");
    response.json(books.rows);
  });

  app.post("/books", async (request, response)=> {
    const {title, author, description, quote, released, img_url} = request.body
    try {

        const result = await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])


        response.status(200).json({success: result})

    } catch (error) {
        response.status(500).json(`${e.name}: ${e.message}`)
    }
})
 