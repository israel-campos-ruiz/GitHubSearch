import React from "react";

import "../../styles/components/user/UserFollowers.css";
import Loader from "../shared/Loader";
const UserFollowers = ({ firstFollowersLoad }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 my-3">
      <div className="card-user  height">
        <div className="card-follower-body">
          <h6>followers</h6>
          {firstFollowersLoad === null && <Loader />}
          {firstFollowersLoad?.map(({ id, avatar_url, login, html_url }) => (
            <div key={id}>
              <img className="avatar my-2" src={avatar_url} alt={avatar_url} />

              <span className="bio ml-3">{login}</span>
              <span className="bio ml-3">
                <a href={html_url} target="_blank" rel="noreferrer">
                  {html_url}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFollowers;
