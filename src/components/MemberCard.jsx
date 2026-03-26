import { Link } from "react-router-dom";

function MemberCard({ image, name, role, quote, link }) {
  return (
    <Link to={link} className="card-link">
      <div className="member-card">
        <div className="member-image-wrapper">
          <img src={image} alt={name} className="member-image" />
        </div>

        <div className="member-card-content">
          <h3>{name}</h3>
          <p className="member-role">{role}</p>
          <p className="member-quote">{quote}</p>
          <span className="view-btn">View Portfolio</span>
        </div>
      </div>
    </Link>
  );
}

export default MemberCard;