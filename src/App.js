import "./App.css";
import PlayerNames from "./components/players/players";
import Pitch from "./components/pitch/pitch";

const header = {
  color: "white",
};
function App() {
  return (
    <div className="App">
      <h1 style={header}>WELCOME TO 11 FOOTBALL</h1>
      <h2 style={header}>choose your starting 11 randomly!</h2>
      <Pitch />
      <PlayerNames />
    </div>
  );
}

export default App;
