import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import member1 from "../assets/karl.jpg";

function Member1() {
  return (
    <div className="page">
      <Navbar />

      <div className="portfolio-wrapper">
        <div className="portfolio-header">
          <img
            src={member1}
            alt="Karl Siegfreid Alinsub"
            className="profile-image"
          />

          <h1>Karl Siegfreid Alinsub</h1>
          <h3 className="subtitle">Aspiring Software Developer</h3>

          <p className="intro-text">
            Student at TIP Manila with a strong passion for technology,
            innovation, and building meaningful digital solutions.
          </p>
        </div>

        <div className="portfolio-grid">
          <section className="portfolio-card">
            <h2>About Me</h2>
            <p>
              My name is Karl Siegfreid Alinsub, a student at TIP Manila with a
              strong passion for technology and innovation. I enjoy exploring
              how systems work and constantly think ahead about how I can
              contribute to future advancements in the tech industry. I am
              driven to continuously learn, improve my skills, and apply my
              knowledge to real-world problems.
            </p>
          </section>

          <section className="portfolio-card">
            <h2>Skills</h2>
            <ul>
              <li>Algorithm and flowchart design</li>
              <li>Problem-solving and logical thinking</li>
              <li>Basic computer networking and troubleshooting</li>
              <li>Presentation and communication skills</li>
              <li>Adaptability and willingness to learn new technologies</li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Location</h2>
            <p>
              <strong>Mandaluyong City, Philippines</strong>
            </p>
            <p>
              Located in the heart of Metro Manila, Mandaluyong is known as the
              “Tiger City of the Philippines.” It is a highly urbanized area
              surrounded by major business districts such as Makati and Ortigas,
              making it a strategic location for education, technology, and
              career opportunities.
            </p>
          </section>

          <section className="portfolio-card">
            <h2>Major Experiences</h2>
            <ul>
              <li>
                Joined a journalistic section and aimed to make a difference in
                the world of information
              </li>
              <li>
                Participated in discussions and activities such as writing and
                broadcasting
              </li>
              <li>
                Shared knowledge about writing and broadcasting in journalism
                with peers
              </li>
              <li>
                Joined tournaments such as e-sports and physical sports like
                volleyball
              </li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Achievements</h2>
            <ul>
              <li>1st Place in district division in infomercial writing</li>
              <li>Performed group discussions in journalism for peers</li>
              <li>Gained foundational knowledge in troubleshooting</li>
              <li>
                Demonstrated ability to present and explain technical topics
                clearly
              </li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Interests</h2>
            <ul>
              <li>Exploring computers, programming, and emerging technologies</li>
              <li>Learning about cybersecurity and digital systems</li>
              <li>Discovering new tools, software, and innovations</li>
              <li>Strategic and competitive gaming</li>
            </ul>
          </section>

          <section className="portfolio-card full-width">
            <h2>Aspiration</h2>
            <p>
              I aspire to become a skilled professional in the field of
              technology, particularly in areas such as software development and
              cybersecurity. I aim to continuously grow my knowledge, master
              advanced programming concepts, and contribute to innovative
              solutions that can make a meaningful impact in the digital world.
            </p>
          </section>

          <section className="portfolio-card full-width">
            <h2>Contact</h2>
            <SocialLinks
              facebook="https://www.facebook.com/Karl.Alinsub.13"
              linkedin="https://www.linkedin.com/in/karl-siegfreid-alinsub-4082733ba/"
              email="alinsubkarlsiegfreid@gmail.com"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Member1;