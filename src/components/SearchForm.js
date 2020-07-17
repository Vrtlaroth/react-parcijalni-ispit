import React from "react";

export default function GithubSearch(props) {
  const {
    searchTerm,
    setSearchTerm,
    searchGitHubUsers,
    searchGitHubRepos,
  } = props;

  const clickSearch = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      await searchGitHubUsers();
      await searchGitHubRepos();
    }
  };

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Github Search</h1>

      <label htmlFor="search-github-username">Github Username:</label>

      <input
        id="search-github-username"
        name="search-github-username"
        type="text"
        placeholder="e.g.facebook"
        value={searchTerm}
        onChange={changeHandler}
      ></input>
      <button onClick={clickSearch} type="submit">
        GO!
      </button>
    </div>
  );
}
