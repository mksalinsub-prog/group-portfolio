import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import karl from "../assets/karl.jpg";
import dwyane from "../assets/dwyane.jpg";
import ramiel from "../assets/ramiel.jpg";

function SelectPlayer() {
  const navigate = useNavigate();

  const players = [
    {
      name: "Karl Siegfreid C. Alinsub",
      role: "Frontend Developer",
      quote: "Builds clean, interactive, and modern web experiences.",
      image: karl,
      link: "/member1",
      tag: "Player 1",
      stats: ["Creative", "Interactive", "Modern"],
    },
    {
      name: "Dwyane Jorge R. Ganados",
      role: "UI/UX Designer",
      quote: "Designs thoughtful, creative, and user-friendly interfaces.",
      image: dwyane,
      link: "/member2",
      tag: "Player 2",
      stats: ["Design", "Creativity", "Strategy"],
    },
    {
      name: "Ramiel Jacob B. Sepe",
      role: "Technology Enthusiast",
      quote: "Learns fast, solves problems, and improves systems.",
      image: ramiel,
      link: "/member3",
      tag: "Player 3",
      stats: ["Learning", "Systems", "Problem-Solving"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedPlayer, setDisplayedPlayer] = useState(players[0]);
  const [flipDirection, setFlipDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const previousIndex =
    currentIndex === 0 ? players.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === players.length - 1 ? 0 : currentIndex + 1;

  const rotateTo = (newIndex, direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setFlipDirection(direction === "left" ? "flip-left" : "flip-right");

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setDisplayedPlayer(players[newIndex]);
    }, 300);

    setTimeout(() => {
      setFlipDirection("");
      setIsAnimating(false);
    }, 650);
  };

  const goLeft = () => {
    const newIndex = currentIndex === 0 ? players.length - 1 : currentIndex - 1;
    rotateTo(newIndex, "left");
  };

  const goRight = () => {
    const newIndex = currentIndex === players.length - 1 ? 0 : currentIndex + 1;
    rotateTo(newIndex, "right");
  };

  const choosePlayer = () => {
    navigate(displayedPlayer.link);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goLeft();
      } else if (event.key === "ArrowRight") {
        goRight();
      } else if (event.key === "Enter") {
        choosePlayer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isAnimating, displayedPlayer]);

  const previousPlayer = players[previousIndex];
  const nextPlayer = players[nextIndex];

  return (
    <div className="page select-page">
      <div className="select-topbar">
        <Link to="/" className="topbar-btn">
          ← Return
        </Link>

        <div className="topbar-title">Player Selection</div>

        <div className="topbar-info">
          <span className="topbar-pill">← → Rotate</span>
          <span className="topbar-pill">Enter Select</span>
        </div>
      </div>

      <section className="character-select-hero compact-hero">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>

        <div className="character-select-content">
          <p className="select-label">PLAYER SELECTION</p>
          <h1>Select Your Player</h1>
          <p className="select-description">
            Rotate between players using the arrows, preview cards, or keyboard.
            Click the main card or the choose button to open that portfolio.
          </p>
        </div>
      </section>

      <section className="carousel-section">
        <div className="carousel-wrapper advanced-carousel">
          <button
            className="arrow-btn glow-arrow"
            onClick={goLeft}
            aria-label="Previous player"
            type="button"
          >
            &#10094;
          </button>

          <div className="carousel-stage">
            <div
              className="preview-card preview-left"
              onClick={goLeft}
              role="button"
              tabIndex={0}
            >
              <img
                src={previousPlayer.image}
                alt={previousPlayer.name}
                className="preview-image"
              />
              <div className="preview-overlay">
                <p>{previousPlayer.tag}</p>
                <h4>{previousPlayer.name}</h4>
              </div>
            </div>

            <div className="flip-scene">
              <article
                className={`character-card main-player-card reveal-card ${flipDirection}`}
                onClick={choosePlayer}
                role="button"
                tabIndex={0}
              >
                <div className="character-tag glow-tag">{displayedPlayer.tag}</div>

                <div className="character-image-wrap main-clickable-image">
                  <img
                    src={displayedPlayer.image}
                    alt={displayedPlayer.name}
                    className="character-image"
                  />
                </div>

                <div className="character-card-content">
                  <h3>{displayedPlayer.name}</h3>
                  <p className="character-role">{displayedPlayer.role}</p>
                  <p className="character-quote">{displayedPlayer.quote}</p>

                  <div className="character-stats">
                    {displayedPlayer.stats.map((stat, index) => (
                      <span key={index}>{stat}</span>
                    ))}
                  </div>

                  <button
                    className="select-btn glow-select-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      choosePlayer();
                    }}
                    type="button"
                  >
                    Choose Player
                  </button>
                </div>
              </article>
            </div>

            <div
              className="preview-card preview-right"
              onClick={goRight}
              role="button"
              tabIndex={0}
            >
              <img
                src={nextPlayer.image}
                alt={nextPlayer.name}
                className="preview-image"
              />
              <div className="preview-overlay">
                <p>{nextPlayer.tag}</p>
                <h4>{nextPlayer.name}</h4>
              </div>
            </div>
          </div>

          <button
            className="arrow-btn glow-arrow"
            onClick={goRight}
            aria-label="Next player"
            type="button"
          >
            &#10095;
          </button>
        </div>

        <div className="player-indicator">
          {players.map((player, index) => (
            <span
              key={player.name}
              className={`indicator-dot ${
                index === currentIndex ? "active-dot" : ""
              }`}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SelectPlayer;