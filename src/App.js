import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ASTRO aplikace</h1>
        <div className="form">
          <label>"Jméno:</label>
          <input type="text" name="Jmeno"/>
          <label>"Příjmení:</label>
          <input type="text" name="Prijmeni"/>
          <button>"Vstup</button>
        </div>
    </div>
  );
}

export default App;
