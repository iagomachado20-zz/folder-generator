import React, { useState, useEffect } from 'react';
import { Aside } from './style';

const SidebarProducts = ({ products = [], onDelete }) => {

    return (
        <Aside className={products.length ? 'active' : ''}>
            <header>
                <h5>Produtos Selecionados</h5>
            </header>
            <ul className="list">
                { products.map((product, index) => {
                    return (
                        <li key={index}>
                            <p>
                                {`${product.nome} ${product.marca}`} <br/> 
                                <strong>
                                    {product.quantidade} {product.unidade}
                                </strong>
                            </p>
                            <button onClick={() => {

                                const newList = [...products];

                                newList.splice(index, 1);

                                onDelete(newList);

                            }}>
                                <span className="material-icons">delete</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
            {
                !products.length && (
                    <p>Nenhum produto selecionado.</p>
                )
            }
        </Aside>
    )
};  

export default SidebarProducts;

