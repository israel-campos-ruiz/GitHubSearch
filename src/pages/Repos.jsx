import React, { useContext } from "react";
import RepoCharts from "../components/repos/RepoCharts";
import RepoContributors from "../components/repos/RepoContributors";
import RepoInfo from "../components/repos/RepoInfo";
import SearchRepos from "../components/shared/SearchRepos";
import { ReposContext } from "../context/GithubReposContext";
import { UserContext } from "../context/GithubUserContext";
import Loader from '../components/shared/Loader'
const Repos = () => {
  
  const { data, } = useContext(UserContext);
  const resContext = useContext(ReposContext);
  return (
    <div className="container">
      {data && (
        <SearchRepos
          setSearchRepos={resContext?.setSearchRepos}
          placeholder={`Buscar repositorios de ${data?.login}`}
        />
      )}
      {resContext.loadingLanguaje && <Loader/>}
      {resContext?.data && (
        <div className="mt-5">
          <RepoInfo />
          <div className="row my-3">
            <RepoCharts  />
            <RepoContributors />
          </div>
          <br />
        </div>
      )}

      {resContext?.data === null && (
        <h2 className="mt-5 text-center">
          Animate a buscar los repositorios de {data?.login}{" "}
        </h2>
      )}
    </div>
  );
};

export default Repos;
