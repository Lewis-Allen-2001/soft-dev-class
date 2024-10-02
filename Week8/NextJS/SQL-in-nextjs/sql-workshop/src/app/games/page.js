import pg from "pg"

export default async function GamesPage(){
    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    });

    const games = (await db.query('SELECT * FROM games')).rows;
    console.log(games)

return(
    <div>
        <h1>Games!</h1>
        <ul>
            {games.map((games) => (
                <div key= {games.id}>
                <h2>{games.title}</h2>
                <img src = {games.img_url}/>
                </div>

            ))}
        </ul>
    </div>
)
}