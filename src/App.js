import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="watermelon" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://meagandeveloper.co.uk" target="_blank">
            Meagan Louise
          </a>
        </footer>
      </div>
    </div>
  );
}
