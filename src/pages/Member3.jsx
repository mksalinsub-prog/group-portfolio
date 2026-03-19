import Navbar from "../components/Navbar";
import member3 from "../assets/member3.jpg";

function Member3() {
  return (
    <div>
      <Navbar />
      <div className="portfolio-page">
        <img src={member3} alt="Member 3" className="profile-image" />
        <h1>Member 3 Name</h1>
        <h3>Aspiring Database Developer</h3>

        <section>
          <h2>About Me</h2>
          <p>
            Hello, I am [Member 3 Name]. I am interested in databases, backend
            systems, and building organized and efficient applications.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>MySQL</li>
            <li>Database Design</li>
            <li>PHP / JavaScript</li>
            <li>Problem Solving</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <p>Sales System Database, Inventory System, Group Portfolio</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Email: member3@email.com</p>
        </section>
      </div>
    </div>
  );
}

export default Member3;