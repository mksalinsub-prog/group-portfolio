import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import member2 from "../assets/dwyane.jpg";

function Member2() {
  return (
    <div className="page">
      <Navbar />

      <div className="portfolio-wrapper">
        <div className="portfolio-header">
          <img
            src={member2}
            alt="Dwyane Jorge R. Ganados"
            className="profile-image"
          />

          <h1>Dwyane Jorge R. Ganados</h1>
          <h3 className="subtitle">Aspiring Tech Professional</h3>

          <p className="intro-text">
            Passionate about technology, problem-solving, and understanding how systems work.
          </p>
        </div>

        <div className="portfolio-grid">
          <section className="portfolio-card">
            <h2>About Me</h2>
            <p>
              My name is Dwyane Jorge R. Ganados, and I’m a student who’s passionate about
              technology, problem-solving, and figuring out how things work. Whether it’s
              programming, computers, or strategy games, I love exploring new ideas and
              taking on challenges. Learning new skills keeps me motivated, even when it gets tricky.
            </p>
            <p>
              I’d describe myself as curious, determined, and friendly. I give respect where
              it’s earned, and I try to approach problems thoughtfully—but I won’t lie, I can
              be a bit procrastinatic at times. I see mistakes as learning opportunities,
              and each one helps me grow both academically and personally.
            </p>
          </section>

          <section className="portfolio-card">
            <h2>Skills</h2>
            <ul>
              <li>Programming fundamentals in Python and C++</li>
              <li>Logical thinking and problem-solving</li>
              <li>Basic computer troubleshooting and hardware knowledge</li>
              <li>Quick adaptation to new technologies and software</li>
              <li>Patience and persistence in challenging tasks</li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Location</h2>
            <p><strong>Palawan, Philippines (Currently in Manila)</strong></p>
            <p>
              Originally from Palawan, a vibrant province full of natural beauty. Currently
              living in Manila to study and take advantage of the city’s educational and
              technological resources.
            </p>
          </section>

          <section className="portfolio-card">
            <h2>Major Experiences</h2>
            <ul>
              <li>Developed an AI automatic grading system for essays (Senior High research)</li>
              <li>Participated in Tekken and Dota 2 tournaments (strategy & teamwork)</li>
              <li>Competed in quiz bees (quick thinking and recall)</li>
              <li>Held a symposium on internet etiquette (“think before you click”)</li>
              <li>Member of a research club with high honors</li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Achievements</h2>
            <ul>
              <li>Completed multiple programming and technology projects</li>
              <li>Developed algorithms and flowcharts using Python and C++</li>
              <li>Learned networking and troubleshooting fundamentals</li>
              <li>Presented internet safety knowledge to peers</li>
              <li>Started learning French and new programming languages</li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Interests</h2>
            <ul>
              <li>Programming and emerging technologies</li>
              <li>Cybersecurity and digital systems</li>
              <li>Educational content and self-learning</li>
              <li>Exploring new tools and software</li>
              <li>Strategic and competitive gaming</li>
            </ul>
          </section>

          <section className="portfolio-card full-width">
            <h2>Aspiration</h2>
            <p>
              I aspire to become a professional in the technology field, contributing to
              improving computer systems and protecting digital information. I aim to keep
              learning, gain hands-on experience, and build a career where I can make a
              meaningful impact while solving real-world problems.
            </p>
          </section>

          <section className="portfolio-card full-width">
            <h2>Contact</h2>
            <SocialLinks
              facebook="https://facebook.com/"
              linkedin="https://linkedin.com/"
              email="your@email.com"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Member2;