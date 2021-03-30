import React from "react";
import "../../styles/components/user/SocialCard.css";
const SocialCard = ({ login, value, icon, label }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4">
      <article className="social-card">
        <p className="social-icon">
          {icon}
           <span className="social-name">{login}</span>
        </p>
        <p className="social-container-numbers">
          <span className="social-value">{value}</span>
          <span className="social-label">{label}</span>
        </p>
      </article>
    </div>
  );
};

export default SocialCard;
