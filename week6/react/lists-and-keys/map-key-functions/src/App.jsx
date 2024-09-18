import "./App.css";

function App() {
  const items = [
    "Dog (Owned) (◕ᴥ◕ʋ) ",
    "Rat(Owned) …ᘛ⁐̤ᕐᐷ",
    "Cat(Own) ≽^•⩊•^≼   ",
  ];

  return (
    <ul>
      <h1>Pets I Owned/own</h1>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
