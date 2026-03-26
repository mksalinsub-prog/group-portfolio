import { Link } from "react-router-dom";

function MemberCard({ image, name, role, quote, link, tag }) {
  return (
    <Link to={link} className="card-link">
      <article className="character-card">
        <div className="character-tag">{tag}</div>

        <div className="character-image-wrap">
          <img src={image} alt={name} className="character-image" />
        </div>

        <div className="character-card-content">
          <h3>{name}</h3>
          <p className="character-role">{role}</p>
          <p className="character-quote">{quote}</p>
          <div className="select-btn">Choose Player</div>
        </div>
      </article>
    </Link>
  );
}

export default MemberCard;