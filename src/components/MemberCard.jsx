import { Link } from "react-router-dom";

function MemberCard({ image, name, role, link }) {
  return (
    <Link to={link} className="card-link">
      <div className="member-card">
        <img src={image} alt={name} className="member-image" />
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </Link>
  );
}

export default MemberCard;