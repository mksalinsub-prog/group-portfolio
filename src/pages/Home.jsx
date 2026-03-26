import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";

import member1 from "../assets/karl.jpg";
import member2 from "../assets/dwyane.jpg";
import member3 from "../assets/ramiel.jpg";

function Home() {
  return (
    <div className="page">
      <Navbar />

      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-tag">Group Portfolio</p>
          <h1>Meet Our Team</h1>
          <p className="home-subtext">
            Click on a profile card to explore each member’s personal portfolio,
            background, skills, and aspirations in technology.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-grid">
          <MemberCard
            image={member1}
            name="Karl Siegfreid C. Alinsub"
            role="Frontend Developer"
            quote="Passionate about building clean and interactive digital experiences."
            link="/member1"
          />

          <MemberCard
            image={member2}
            name="Dwyane Jorge R. Ganados"
            role="UI/UX Designer"
            quote="Focused on thoughtful design, creativity, and user-friendly interfaces."
            link="/member2"
          />

          <MemberCard
            image={member3}
            name="Ramiel Jacob B. Sepe"
            role="Technology Enthusiast"
            quote="Driven to learn, improve systems, and solve technical problems."
            link="/member3"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;