import './App.css';
import PizzaList from "./pizzerias/pizzeriaslist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://bit.ly/book-pizza" className="App-logo" alt="logo" />
        <p>
          Web app for pizza lovers
        </p>
        <h1>
          Pizza Project
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
