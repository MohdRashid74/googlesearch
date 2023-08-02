import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state: {searchInput: ''}

  onClickUpdate = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchReasult = suggestionsList.filter(each =>
      each.suggestion.toLowercase().includes(searchInput.toLowercase()),
    )
    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search-google"
                onChange={this.onClickUpdate}
                value={searchInput}
              />
            </div>
            <ul>
              {searchReasult.map(eachitem => (
                <SuggestionItem
                  key={eachitem.id}
                  suggestiondetails={eachitem.suggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
