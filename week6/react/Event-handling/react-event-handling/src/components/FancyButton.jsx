export default function FancyButton() {
  function handleClick() {
    console.log("Haha you clicked me!!");
  }
  return <button onClick={handleClick}>No click me!</button>;
}
