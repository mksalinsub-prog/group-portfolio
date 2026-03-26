import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import member3 from "../assets/ramiel.jpg"; // change if your filename is different

function Member3() {
  return (
    <div className="page">
      <Navbar />

      <div className="portfolio-wrapper">
        <div className="portfolio-header">
          <img
            src={member3}
            alt="Ramiel Jacob B. Sepe"
            className="profile-image"
          />

          <h1>Ramiel Jacob B. Sepe</h1>
          <h3 className="subtitle">Aspiring Technology Professional</h3>

          <p className="intro-text">
            Passionate about technology, computers, and continuously improving technical skills.
          </p>
        </div>

        <div className="portfolio-grid">
          <section className="portfolio-card">
            <h2>About Me</h2>
            <p>
              My name is Ramiel Jacob B. Sepe, and I am a student who is
              passionate about learning new things. I enjoy exploring different
              subjects, especially those related to technology and computers.
              Understanding how systems work, solving technical problems, and
              developing my skills motivate me to continue learning and improving.
            </p>
            <p>
              I consider myself a curious, hardworking, and determined person.
              When I face challenges, I try to understand the problem and find
              the best solution. I believe that mistakes are part of the learning
              process and help me grow as a student and as a person.
            </p>
          </section>

          <section className="portfolio-card">
            <h2>Skills</h2>
            <ul>
              <li>Basic computer knowledge</li>
              <li>Problem-solving skills</li>
              <li>Ability to learn new technologies</li>
              <li>Basic troubleshooting skills</li>
              <li>Patience and persistence when solving problems</li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Location</h2>
            <p><strong>Parañaque City, Metro Manila</strong></p>
            <p>
              I live in Parañaque City, Metro Manila, a busy and developing area
              where many people live and work. The city has many schools,
              businesses, and establishments that make daily life convenient.
              Living here provides access to opportunities for education,
              technology, and personal growth.
            </p>
          </section>

          <section className="portfolio-card">
            <h2>Major Experiences</h2>
            <p>
              My journey as a student has been one of the most important
              experiences that shaped who I am today. Through my studies, I have
              faced many challenges that helped me develop patience,
              determination, and curiosity.
            </p>
            <p>
              Working on school projects, solving computer-related problems, and
              learning new tools and technologies helped me gain confidence and
              improve my ability to think critically.
            </p>
          </section>

          <section className="portfolio-card">
            <h2>Achievements</h2>
            <ul>
              <li>Completed different school projects related to technology and computers</li>
              <li>Learned how to set up computer systems</li>
              <li>Performed basic troubleshooting</li>
              <li>Understood basic networking concepts</li>
            </ul>
          </section>

          <section className="portfolio-card">
            <h2>Interests</h2>
            <ul>
              <li>Exploring computers and technology</li>
              <li>Learning about cybersecurity and computer systems</li>
              <li>Watching educational content online</li>
              <li>Discovering new tools and technologies</li>
            </ul>
          </section>

          <section className="portfolio-card full-width">
            <h2>Aspiration</h2>
            <p>
              My aspiration is to become a successful professional in the
              technology field. I want to build a career where I can help improve
              computer systems and protect digital information. In the future, I
              hope to continue learning, gain more technical experience, and
              become someone who can contribute to the development of secure and
              reliable technology systems.
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

export default Member3;