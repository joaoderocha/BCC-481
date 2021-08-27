import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form id="getUser">
          Inform your username: <input type="text" id="user-input" />
          <button type="submit" onClick={submitHandler}>
            {" "}
            Submit!{" "}
          </button>
        </form>
      </header>
    </div>
  );
}

async function submitHandler(event) {
  event.preventDefault();

  const userInput = document.getElementById("user-input");

  await fetch("http://localhost:3001/api/butao", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      username: userInput.value.trim(),
      date: new Date(),
    }),
  });
}

export default App;
