import React, { useContext } from "react";
import { ReposContext } from "../../context/GithubReposContext";
import '../../styles/components/repos/RepoInfo.css'
const RepoContributors= () => {
  const { contributors } = useContext(ReposContext);
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="card-user height">
        <h6 className="text-center my-3">CONTRIBUIDORES</h6>
        {contributors?.data?.map(({ id, avatar_url, login, html_url }) => (
          <div key={id}>
            <div className="card-user-header">
              <img className="avatar" src={avatar_url} alt="sfjsdla" />
              <span className="bio ml-2"> {login}</span>
              <p className="bio ">
                <a
                  className="margin-link"
                  href={html_url}
                  alt={html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {html_url}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoContributors;
