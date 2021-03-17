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
    justify-content: space-between;
    font-weight: bold;   
    .field {
        max-width: 120px;
        input {
            width: 100%;
            font-size: 12px;
            height: 40px;
            border: 0;
            padding: 0 15px;
        }
    }                       
    img {
        width: 80px;
        margin-right: 10px;
    }
    small {
        display: block;
        margin: 5px 0;
        font-weight: 300;
    }
    h5 {
        font-size: 14px;
    }
`