import React, { createContext, useContext, useState, useEffect } from "react";
import useGet from "../hooks/useGet";
import { UserContext } from "./GithubUserContext";

export const ReposContext = createContext();

const GithubReposContextProvider = ({ children }) => {
  const {searchUser, firstRepoName} = useContext(UserContext)
  const [searchRepos, setSearchRepos] = useState(firstRepoName);
  const { data, loading, error } = useGet(
    `https://api.github.com/repos/${searchUser}/${searchRepos}`
  );

  const contributors = useGet(data?.contributors_url)
  
  useEffect(() => {
      setSearchRepos(firstRepoName)
  }, [firstRepoName])
  
  return (
    <ReposContext.Provider value={{data, loading, error, setSearchRepos, contributors, searchRepos}}>
      {children}
    </ReposContext.Provider>
  );
};

export default GithubReposContextProvider;
