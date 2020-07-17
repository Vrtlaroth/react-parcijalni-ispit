import React from "react";

export default function Repos(props) {
  const { repos } = props;

  return repos && repos.map((repo) => <div id={repo.id}>{repo.full_name}</div>);
}
