import React, { useContext } from "react";
import RepoCharts from "../components/repos/RepoCharts";
import RepoContributors from "../components/repos/RepoContributors";
import RepoInfo from "../components/repos/RepoInfo";
import SearchRepos from "../components/shared/SearchRepos";
import { ReposContext } from "../context/GithubReposContext";
import { UserContext } from "../context/GithubUserContext";
import Loader from '../components/shared/Loader'
import useGet from "../hooks/useGet";
const Repos = () => {
  const { data, } = useContext(UserContext);
  const resContext = useContext(ReposContext);
  const { data:dataRepo, loading:loadingRepo, error:errorRepo } = useGet(
    `https://api.github.com/repos/${resContext?.searchUser}/${resContext?.searchRepos}`
  );
  const contributors = useGet(dataRepo?.contributors_url)
  return (
    <div className="container">
      {data && (
        <SearchRepos
          setSearchRepos={resContext?.setSearchRepos}
          placeholder={`Buscar repositorios de ${data?.login}`}
        />
      )}
      {dataRepo && (
        <div className="mt-5">
          {loadingRepo && <Loader/>}
          {dataRepo && <RepoInfo dataRepo={dataRepo} /> }
          <div className="row my-3">
            <RepoCharts  />
            {contributors && <RepoContributors contributors={contributors} />}
          </div>
          <br />
        </div>
      )}
    

      {errorRepo && <h4 className="text-center mt-3 bio">No encuentro ese repositorio</h4>}
    </div>
  );
};

export default Repos;
