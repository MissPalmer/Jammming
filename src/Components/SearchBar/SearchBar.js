import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = { term:''}

    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

handleSearch(event){
    this.props.searchSpotify(this.state.term);
    event.preventDefault();
  }

search(term){
    this.setState({term:this.props.onSearch})
}

handleTermChange(event){
    this.setState({term: event.target.value});
}

  render(){
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
      <a onClick={this.handleSearch}>SEARCH</a>
    </div>
         )

  }



}


export default SearchBar;
