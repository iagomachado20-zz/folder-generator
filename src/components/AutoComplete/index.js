import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

import theme, { ItemsComplete } from './style.js';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, products) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : products.filter(lang =>
    lang.nome.toLowerCase().slice(0, inputLength) === inputValue || lang.marca.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.nome;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => ( 
  <ItemsComplete>
    <img src={suggestion.imagem}/>
    <h4>{`${suggestion.nome} ${suggestion.marca}`}
    <small>({suggestion.gramatura}) {suggestion.unidade}</small>
    </h4>
  </ItemsComplete>
);

class AutoComplete extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      suggestions: [props.products]
    };

  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSelected = (event, {suggestion}) => {

    this.props.onSelectedItem(suggestion);
    this.setState({
      value: ''
    });

  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.products)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Selecione o produto',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        theme={theme}
        className="autocomplete"
        suggestions={suggestions}
        onSuggestionSelected={this.getSelected}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state.reducerFolder
});

export default connect(mapStateToProps)(AutoComplete);