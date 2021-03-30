import React, { useContext } from "react";
import { BsBook } from "react-icons/bs";
import { ReposContext } from "../../context/GithubReposContext";

const RepoInfo = () => {
  const { data } = useContext(ReposContext);
  return (
    <div className="card-user">
      <div className="card-user-header">
        <img className="avatar" src={data?.owner.avatar_url} alt="sfjsdla" />
        <span className="card-user-name">Repositorio: {data?.name}</span>
      </div>
      <div className="card-body-user">
        <p className="bio">
          <BsBook /> {data?.language}
        </p>
        <a target="_blank" rel="noreferrer" href={data?.url}>
          {data?.url}
        </a>
      </div>
    </div>
  );
};

export default RepoInfo;
