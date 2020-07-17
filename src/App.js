import React from "react";
import axios from "axios";
import GitHubRepos from "./components/GitHubRepos";
import SearchForm from "./components/SearchForm";
import Spinner from "./components/Spinner";
import UserDetails from "./components/UserDetails";

class App extends React.Component {
  state = {
    searchResults: null,
    searchResultsRepos: null,
    searchTerm: "",
    isError: false,
    isLoading: false,
  };

  fetchGitHubUser = async () => {
    try {
      this.setState({ isLoading: true });
      const url = " https://api.github.com/users/" + this.state.searchTerm;
      const results = await axios.get(url);
      this.setState({
        isError: false,
        isLoading: false,
        searchResults: results.data,
      });
    } catch (err) {
      console.error("An error occured!", err);
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  fetchGithubReposbyUser = async () => {
    try {
      this.setState({ isLoading: true });
      const url =
        " https://api.github.com/users/" + this.state.searchTerm + "/repos";
      const results = await axios.get(url);
      this.setState({
        isError: false,
        isLoading: false,
        searchResultsRepos: results.data,
      });
    } catch (err) {
      console.error("An error occured!", err);
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };
  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };
  render() {
    return (
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          setSearchTerm={this.setSearchTerm}
          searchGitHubUsers={this.fetchGitHubUser}
          searchGitHubRepos={this.fetchGithubReposbyUser}
        />
        {this.state.isLoading && <Spinner />}
        {this.state.isError && <h1>AN ERROR OCCURRED! :/</h1>}
        <UserDetails user={this.state.searchResults} />
        <GitHubRepos repos={this.state.searchResultsRepos} />
      </div>
    );
  }
}

export default App;
