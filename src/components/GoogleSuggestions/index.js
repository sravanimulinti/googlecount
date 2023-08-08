import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  inputSuggestion = value => {
    this.setState({searchInput: value})
  }

  googleSuggestions = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowercase().include(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="img"
          alt="google logo"
        />
        <div className="box1">
          <div className="box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search.png"
              className="img1"
              alt="search icon"
            />
            <input
              type="search"
              className="input1"
              placeholder="Search Google"
              value={searchInput}
            />
          </div>
          <ul className="un-order">
            {searchResult.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionDetails={eachItem}
                inputSuggestion={this.inputSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
