import { useState } from "react";
import "./App.css";

function App() {
  const [showOtter, setShowOtter] = useState(false);
  const [showKitten, setShowKitten] = useState(false);
  const [showDog, setShowDog] = useState(false);

  function toggleOtter() {
    setShowOtter(!showOtter);
  }

  function toggleKitten() {
    setShowKitten(!showKitten);
  }

  function toggleDog() {
    setShowDog(!showDog);
  }

  return (
    <div>
      <button onClick={toggleOtter}>Show Otter</button>
      <button onClick={toggleKitten}>Show kitten</button>
      <button onClick={toggleDog}>Show Dog</button>

      {showOtter && (
        <img src="https://i.iheart.com/v3/re/assets.getty/62bb64134f76fc61d30eb8b9?ops=maxcontain(768,432),quality(80)" />
      )}

      {showKitten && (
        <img src="https://i.ytimg.com/vi/deZVoHOmK7E/maxresdefault.jpg" />
      )}

      {showDog && (
        <img src="https://media.tenor.com/z2tg-2P2AswAAAAM/funny-smile.gif" />
      )}
    </div>
  );
}

export default App;
