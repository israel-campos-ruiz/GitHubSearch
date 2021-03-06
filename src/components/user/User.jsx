import React, { useContext } from "react";
import { UserContext } from "../../context/GithubUserContext";
import SocialCard from "./SocialCard";
import { BsPeople } from "react-icons/bs";
import UserInfo from "./UserInfo";
import UserFollowers from "./UserFollowers";
import useGet from "../../hooks/useGet";
const User = () => {
  const { data, error } = useContext(UserContext);
  const { login, followers, following, public_gists, public_repos } = data;
  const {data:firstFollowersLoad} = useGet(`${data?.followers_url}`);
  const items = [
    {
      id: 1,
      login,
      value: followers,
      icon: <BsPeople />,
      label: "Seguidores",
    },
    {
      id: 2,
      login,
      value: following,
      icon: <BsPeople />,
      label: "siguiendo",
    },
    {
      id: 3,
      login,
      value: public_gists,
      icon: <BsPeople />,
      label: "Gist públicos",
    },
    {
      id: 4,
      login,
      value: public_repos,
      icon: <BsPeople />,
      label: "repositorios públicos",
    },
  ];
  
  return (
    <div className="row mt-5">
      {items.map(({ id, login, value, icon, label }) => (
        <SocialCard
          key={id}
          login={login}
          value={value}
          icon={icon}
          label={label}
        />
      ))}
      <div className="row mt-5"></div>
      <div className="col-lg-6 col-md-12 col-sm-12 my-3">
        <UserInfo />
      </div>
      {firstFollowersLoad && (<UserFollowers firstFollowersLoad={firstFollowersLoad}/>)}
      {error && <h5 className="text-center bio">Error en la busqueda</h5>}
    </div>
  );
};

export default User;
