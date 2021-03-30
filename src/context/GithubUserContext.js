import React, { createContext, useEffect, useState } from 'react';
import useGet from '../hooks/useGet';
export const UserContext = createContext();
const GithubUserContextProvider = ({ children }) => {
  const [searchUser, setSearchUser] = useState('israel-campos-ruiz');
  // const [followersData, setfirstFollower] = useState([]);
  const [firstRepoName, setFirstRepoName] = useState(null);
  const { data, loading, error } = useGet(
    `https://api.github.com/users/${searchUser}`
  );
  // const state = useGet(`${data?.followers_url}`);
  const repoName = useGet(
    `https://api.github.com/users/${searchUser}/repos?per_page=1`
  );

  useEffect(() => {
    if (repoName?.data) {
      setFirstRepoName(repoName.data[0].name);
    }
  }, [repoName]);

  // useEffect(()=>{
  //     if(data?.followers_url){
  //       setfirstFollower(state.data)
  //     }
  // },[data?.followers_url, state.data])

  return (
    <UserContext.Provider
      value={{
        data,
        loading,
        error,
        setSearchUser,
        //  followersData,
        searchUser,
        firstRepoName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default GithubUserContextProvider;
