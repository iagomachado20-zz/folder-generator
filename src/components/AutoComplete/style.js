import styled from 'styled-components';


export default {
    container:                'react-autosuggest__container',
    containerOpen:            'react-autosuggest__container--open',
    input:                    'react-autosuggest__input',
    inputOpen:                'react-autosuggest__input--open',
    inputFocused:             'react-autosuggest__input--focused',
    suggestionsContainer:     'react-autosuggest__suggestions-container',
    suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
    suggestionsList:          'react-autosuggest__suggestions-list',
    suggestion:               'react-autosuggest__suggestion',
    suggestionFirst:          'react-autosuggest__suggestion--first',
    suggestionHighlighted:    'react-autosuggest__suggestion--highlighted',
    sectionContainer:         'react-autosuggest__section-container',
    sectionContainerFirst:    'react-autosuggest__section-container--first',
    sectionTitle:             'react-autosuggest__section-title'
}

export const ItemsComplete = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;                          
    img {
        width: 80px;
        margin-right: 10px;
    }
    small {
        display: block;
        margin: 5px 0;
        font-weight: 300;
    }
`