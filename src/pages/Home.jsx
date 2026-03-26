import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="page">
      <Navbar />

      <section className="intro-hero">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <p className="intro-badge">GROUP PORTFOLIO</p>
          <h1>Welcome to Our Team Portfolio</h1>
          <p className="intro-text">
            Step into our digital showcase and discover the people behind the
            ideas, designs, and solutions. Start by entering the player
            selection screen.
          </p>

          <Link to="/select-player" className="intro-btn">
            Pick Your Player
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;