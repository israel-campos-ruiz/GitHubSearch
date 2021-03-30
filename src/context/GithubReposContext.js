import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./GithubUserContext";
export const ReposContext = createContext();

const GithubReposContextProvider = ({ children }) => {
  const {searchUser, firstRepoName} = useContext(UserContext)
  const [searchRepos, setSearchRepos] = useState(firstRepoName);  
  useEffect(() => {
      setSearchRepos(firstRepoName)
  }, [firstRepoName])
  return (
    <ReposContext.Provider value={{ setSearchRepos,  searchRepos, searchUser}}>
      {children}
    </ReposContext.Provider>
  );
};

export default GithubReposContextProvider;
