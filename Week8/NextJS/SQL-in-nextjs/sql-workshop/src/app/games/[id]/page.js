import pg from "pg"

export default async function GameDetails({ params }){
    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    });

const GameDetails = (await db.query('SELECT * FROM games WHERE id = $1;', [params.id])).rows;

    return(
        <div>
{GameDetails.map((GameDetails) => (
    <div key = {GameDetails.id}>
        <h2>{GameDetails.title}</h2>
                <img src = {GameDetails.img_url}/>
                <h2>{GameDetails.studio}</h2>
                <h3>{GameDetails.platfrom}</h3>
                </div>

))}


        </div>
    )
    
}