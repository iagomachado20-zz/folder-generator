import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../../../styles/components';

import { useLocation } from "react-router-dom";


const paginationOptions = { 
    rowsPerPageText: 'Linhas por página:', 
    rangeSeparatorText: 'of', 
    noRowsPerPage: false, 
    selectAllRowsItem: false, 
    selectAllRowsItemText: 'Todos' 
};

function DetailProductPage({ properties_folder, dispatch }) {

    const location = useLocation();
    const { state } = location; 
    
    useEffect(() => {
        
        

    }, []);

    return (
        <React.Fragment>
            <Container>
            <header className="heading">
                <div className="row">
                    <h1>{ state.isEdit ? 'Editar Produto' : 'Criar Produto' }</h1>
                </div>
            </header>
            
            </Container>
        </React.Fragment>
    )

}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  connect(mapStateToProps)(DetailProductPage);