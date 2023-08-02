import './index.css'

const SuggestionItem = props => {
  const {suggestiondetails} = props
  return (
    <div>
      <p>{suggestiondetails}</p>
    </div>
  )
}
export default SuggestionItem
