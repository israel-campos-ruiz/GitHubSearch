import React, { useContext } from "react";
import { UserContext } from "../../context/GithubUserContext";
import { BsGeoAlt, BsBuilding } from "react-icons/bs";
import "../../styles/components/user/UserInfo.css";
const UserInfo = () => {
  const { data } = useContext(UserContext);
  const { avatar_url, name, bio, location, html_url, company } = data;
  return (
      <div className="card-user">
        <div className="card-user-header">
          <img className="avatar" src={avatar_url} alt="sfjsdla" />
          <span className="card-user-name">User: {name}</span>
        </div>
        <div className="card-body-user">
          <p className="bio">
            <BsBuilding /> {company}{" "}
            {company?.length === 0 && <p>sin resultados</p>}
          </p>
          <p className="bio">{bio}</p>
          <p className="bio">
            <BsGeoAlt /> {location}{" "}
          </p>
          <a target="_blank" rel="noreferrer" href={html_url}>
            {html_url}
          </a>
        </div>
      </div>
  );
};

export default UserInfo;
