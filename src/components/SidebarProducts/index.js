import React from 'react';
import { Aside } from './style';

const SidebarProducts = ({ products = [] }) => {

    return (
        <Aside className={products.length ? 'active' : ''}>
            <header>
                <h5>Produtos Selecionados</h5>
            </header>
            <ul className="list">
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <button>
                        <span class="material-icons">delete</span>
                    </button>
                </li>
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <button>
                        <span class="material-icons">delete</span>
                    </button>
                </li>
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <button>
                        <span class="material-icons">delete</span>
                    </button>
                </li>
            </ul>
        </Aside>
    )
};  

export default SidebarProducts;

