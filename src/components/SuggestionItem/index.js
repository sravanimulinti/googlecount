import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, inputSuggestion} = props
  const {suggestion} = suggestionDetails

  const googleSuggestions = () => {
    inputSuggestion(suggestion)
  }
  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <button className="" type="button" onClick={googleSuggestions}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="img1"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
