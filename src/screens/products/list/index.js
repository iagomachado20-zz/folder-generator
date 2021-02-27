import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import api from '../../../config/api';

import { ACTIONS } from '../../../redux/reducers/folder';
import { Container } from '../../../styles/components';

import DataTable, { createTheme } from 'react-data-table-component';

const columns = [
    {
        name: 'Id',
        selector: 'id',
        sortable: true,
    },
    {
      name: 'Nome',
      selector: 'nome',
      sortable: true,
    },
    {
      name: 'Marca',
      selector: 'marca',
      sortable: true
    },
    {
        name: 'Unidade',
        selector: 'unidade',
        sortable: true
    },
    {
        name: 'Gramatura',
        selector: 'gramatura',
        sortable: true
    }
];

function ListProductsPage({ properties_folder, dispatch }) {


    useEffect(() => {
        
        api.get('/product/get-products').then(response => {

            const { data } = response.data.body; 

            dispatch({
                type: ACTIONS.SET_PRODUCTS,
                payload: data
            });

        }, error => {

            console.log('Error ao carregar lista de produtos');

        });

    }, []);

    return (
        <React.Fragment>
            <Container>
            <header className="heading">
                <h1>Produtos</h1>
            </header>
            <DataTable
                header={false}
                pagination
                columns={columns}
                data={properties_folder.products}
            />
            </Container>
        </React.Fragment>
    )

}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  connect(mapStateToProps)(ListProductsPage);