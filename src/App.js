import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main-nav">
          <p className="logo">
            <img src="img/logo.svg" width="138" height="64" alt="Логотип компании Седона"></img>
          </p>
          <ul className="site-navigation">
            <li className="site-navigation-item">
              <a href="#">Главная</a>
            </li>
            <li className="site-navigation-item">
              <a href="#">О Седоне</a>
            </li>
            <li className="site-navigation-item">
              <a href="#">Гостиницы</a>
            </li>
          </ul>
          <div className="nav-icon-wrapper">
            <div className="search-wrapper">
              <label for="site-search">Search the site:</label>
              <input type="search" id="site-search" name="q" />

              <button>Search</button>
            </div>
            <div className="like-wrapper">
              <button className="like-button" type="button">
                
              </button>
            </div>
            <div className="form-wrapper">
              <a href="#">Хочу сюда!</a>
            </div>
          </div>
        </nav>
      </header>
      {/* Основной раздел */}
      <main className="main-content">
        <section className="hero">
          <div className="hero-wrapper">
            <p className="hero-img-1">
              <img src="img/hero-image-1.svg" width="187" height="44" alt="welcome"></img>
            </p>
            <p className="hero-img-2">
              <img src="img/hero-image-2.svg" width="256" height="28" alt="to the garden"></img>
            </p>
            <p className="hero-img-3">
              <img src="img/hero-image-3.svg" width="456" height="212" alt="Sedona"></img>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
