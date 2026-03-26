function SocialLinks({ facebook, linkedin, email }) {
  return (
    <div className="social-links">
      <a href={facebook} target="_blank" rel="noreferrer">
        Facebook
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href={`mailto:${email}`}>
        Email
      </a>
    </div>
  );
}

export default SocialLinks;