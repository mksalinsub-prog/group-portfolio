import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";

import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="home-section">
        <h1>Welcome to Our Group Portfolio</h1>
        <p>Click a member's picture to view their personal portfolio.</p>

        <div className="card-container">
          <MemberCard
            image={member1}
            name="Member 1 Name"
            role="Web Developer"
            link="/member1"
          />
          <MemberCard
            image={member2}
            name="Member 2 Name"
            role="UI/UX Designer"
            link="/member2"
          />
          <MemberCard
            image={member3}
            name="Member 3 Name"
            role="Database Manager"
            link="/member3"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;