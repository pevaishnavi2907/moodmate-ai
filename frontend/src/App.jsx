import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">M</div>
          <span>MoodMate AI</span>
        </div>

        <div className="nav-actions">
          <button className="nav-login">Log in</button>
          <button className="nav-signup">Get Started</button>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <div className="eyebrow">
            ✨ Your AI-powered mood companion
          </div>

          <h1>
            Understand your
            <span> mood.</span>
            <br />
            Improve your
            <span> day.</span>
          </h1>

          <p className="hero-description">
            MoodMate AI helps you understand how you're feeling and discover
            personalized activities, music, movies, books, and more.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Start Your Journey →
            </button>

            <button className="secondary-button">
              Explore Features
            </button>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <span>💜</span>
              Personalized
            </div>

            <div className="trust-item">
              <span>✨</span>
              AI Powered
            </div>

            <div className="trust-item">
              <span>🔒</span>
              Private
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="mood-card glass-card">
            <div className="mood-card-top">
              <span>Today's mood</span>
              <span className="status-dot"></span>
            </div>

            <div className="mood-emoji">😊</div>

            <h3>Feeling Happy</h3>

            <div className="mood-score">
              <div className="score-bar">
                <div className="score-fill"></div>
              </div>
              <span>82%</span>
            </div>

            <p>
              You're having a positive day. Here are a few things you might
              enjoy.
            </p>

            <div className="mini-recommendations">
              <div>🎵 Music</div>
              <div>🎬 Movies</div>
              <div>📚 Books</div>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span>🎧</span>
            <div>
              <strong>Music for you</strong>
              <small>Feel-good playlist</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>🌱</span>
            <div>
              <strong>Daily wellness</strong>
              <small>10 min mindfulness</small>
            </div>
          </div>
        </div>
      </main>

      <section className="feature-section">
        <div className="section-heading">
          <span>WHY MOODMATE?</span>
          <h2>
            Everything you need to
            <span> feel better.</span>
          </h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon purple">🧠</div>
            <h3>Understand Yourself</h3>
            <p>
              Track your moods and discover patterns in how you feel over
              time.
            </p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon pink">✨</div>
            <h3>Personalized Ideas</h3>
            <p>
              Get recommendations designed around your mood, interests, and
              goals.
            </p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon blue">📊</div>
            <h3>See Your Progress</h3>
            <p>
              Explore mood insights and build a better understanding of your
              emotional journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;