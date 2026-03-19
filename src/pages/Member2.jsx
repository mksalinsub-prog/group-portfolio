import Navbar from "../components/Navbar";
import member2 from "../assets/member2.jpg";

function Member2() {
  return (
    <div>
      <Navbar />
      <div className="portfolio-page">
        <img src={member2} alt="Member 2" className="profile-image" />
        <h1>Member 2 Name</h1>
        <h3>Aspiring UI/UX Designer</h3>

        <section>
          <h2>About Me</h2>
          <p>
            Hello, I am [Member 2 Name]. I am passionate about designing clean,
            attractive, and user-friendly interfaces for websites and systems.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>UI/UX Design</li>
            <li>Figma</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <p>Mobile App Design, Portfolio Website, Group System Interface</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Email: member2@email.com</p>
        </section>
      </div>
    </div>
  );
}

export default Member2;