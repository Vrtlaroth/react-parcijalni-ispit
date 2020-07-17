import React from "react";

export default function UserDetails(props) {
  const { user, repos } = props;
  console.log("user", user);
  console.log("repos", repos);
  return (
    user && (
      <div>
        <h2>{user.id}</h2>
        <img src={user.avatar_url}></img>
        <h2>{user.name}</h2>
        <h2>{user.location}</h2>
        <h2>{user.bio}</h2>
      </div>
    )
  );
}
