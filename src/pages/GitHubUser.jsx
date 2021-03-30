import React, {  useContext } from "react";
import Loader from "../components/shared/Loader";
import Search from "../components/shared/Search";
import User from "../components/user/User";
import { UserContext } from "../context/GithubUserContext";

const GitHubUser = ({children}) => {
 const {data, loading, setSearchUser} = useContext(UserContext)
  return (
    <div className="container pt-1">
      {loading && <Loader/>}
      {data && <Search placeholder={'buscar usuario'} setSearchUser={setSearchUser} />}
      {data && <User/> }
      {children}
    </div>
  );
};

export default GitHubUser;
