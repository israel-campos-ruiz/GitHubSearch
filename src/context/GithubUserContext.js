import React, { createContext, useEffect, useState } from 'react';
import useGet from '../hooks/useGet';
export const UserContext = createContext();
const GithubUserContextProvider = ({ children }) => {
  const [searchUser, setSearchUser] = useState('israel-campos-ruiz');
  const { data, loading, error } = useGet(
    `https://api.github.com/users/${searchUser}`
  );
  const state = useGet(`${data?.followers_url}`);
  const followersData = state?.data;
  const repoName = useGet(
    `https://api.github.com/users/${searchUser}/repos?per_page=1`
  );
  const [firstRepoName, setFirstRepoName] = useState(null);

  useEffect(() => {
    if (repoName?.data) {
      setFirstRepoName(repoName.data[0].name);
    }
  }, [repoName]);

  return (
    <UserContext.Provider
      value={{
        data,
        loading,
        error,
        setSearchUser,
        followersData,
        searchUser,
        firstRepoName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default GithubUserContextProvider;
