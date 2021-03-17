import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import api from '../../../config/api';

import { ACTIONS } from '../../../redux/reducers/folder';
import { ButtonSmall, Container } from '../../../styles/components';

import { Button } from 'react-bootstrap';

import DataTable from 'react-data-table-component';

import { useHistory } from 'react-router-dom';
import { Menu } from '../../../components';


const paginationOptions = { 
    rowsPerPageText: 'Linhas por página:', 
    rangeSeparatorText: 'of', 
    noRowsPerPage: false, 
    selectAllRowsItem: false, 
    selectAllRowsItemText: 'Todos' 
};

function ListProductsPage({ properties_folder, dispatch }) {

    const columns = [
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
            name: 'Ação',
            selector: null,
            cell: linerow => (
                <React.Fragment>
                    <div className="events-bt" data-tag="allowRowEvents">
                        <Button 
                            variant="link"
                            onClick={(row) => history.push(`edit/${linerow.id}`, {...linerow, isEdit: true})}>
                            Editar
                        </Button>
                        <Button
                            size="sm"
                            variant="danger"
                            onClick={(row) => handleDelete(linerow)}>
                            Excluir
                        </Button>
                    </div>
                </React.Fragment>
            )
            
        }
    ];

    function handleDelete(item) {
        api.delete(`/product/delete/${item.id}`).then(_ => {

            const data = properties_folder.products.filter(product => product.id !== item.id); 

            alert('Produto removido');

            dispatch({
                type: ACTIONS.SET_PRODUCTS,
                payload: data
            });

        }, error => {

            console.log('Error ao carregar lista de produtos');

        });
    }

    const history = useHistory();
    
    useEffect(() => {
        
        api.get('/product/get-products').then(response => {

            const data = response.data.body; 

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
            <Menu/>
            <Container>
            <header className="heading">
                <div className="row">
                    <h1>Produtos</h1>
                    <Button variant="success" onClick={() => history.push('new')}>Adicionar Produto</Button>
                </div>
            </header>
            <DataTable
                header={false}
                pagination
                paginationComponentOptions={paginationOptions}
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