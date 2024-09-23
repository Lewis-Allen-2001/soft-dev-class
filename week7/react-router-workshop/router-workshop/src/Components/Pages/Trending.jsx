export default function trending(){
    return(
        <>
       <h1>Top 5 Trending Games Currently</h1>
<div className="trending-container">
  <div className="game">
    <img src="https://static-cdn.jtvnw.net/ttv-boxart/18122-188x250.jpg" alt="World of warcraft"/>
    <h3>World Of Warcraft</h3>
    <h3>Blizzard Entertainment</h3>
  </div>

  <div className="game">
    <img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" alt="League of Legends"/>
    <h3>League of Legends</h3>
    <h3>Riot Games</h3>
  </div>

  <div className="game">
    <img src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" alt="Valorant"/>
    <h3>Valorant</h3>
    <h3>Riot Games</h3>
  </div>

  <div className="game">
    <img src="https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg" alt="Apex Legends"/>
    <h3>Apex Legends</h3>
    <h3>Respawn</h3>
  </div>

  <div className="game">
    <img src="https://static-cdn.jtvnw.net/ttv-boxart/2011938005_IGDB-188x250.jpg" alt="EA FC 25"/>
    <h3>EA FC 25</h3>
    <h3>EA Sports/EA</h3>
  </div>
</div>

<p>All games shown are trending according to Twitch.tv</p>
        </>
  
)
}
  