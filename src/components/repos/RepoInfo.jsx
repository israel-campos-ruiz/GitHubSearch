import React  from "react";
import { BsBook } from "react-icons/bs";
const RepoInfo = ({dataRepo}) => {
  return (
    <div className="card-user">
      <div className="card-user-header">
        <img className="avatar" src={dataRepo.owner.avatar_url} alt="sfjsdla" />
        <span className="card-user-name">Repositorio: {dataRepo.name}</span>
      </div>
      <div className="card-body-user">
        <p className="bio">
          <BsBook /> {dataRepo.language}
        </p>
        <a target="_blank" rel="noreferrer" href={dataRepo?.url}>
          {dataRepo.url}
        </a>
      </div>
    </div>
  );
};

export default RepoInfo;
