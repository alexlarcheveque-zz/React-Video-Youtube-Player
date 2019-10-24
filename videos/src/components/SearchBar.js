import React from "react";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    //TODO: Once user submits, get an API call to deploy search request
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Video Search: </label>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
