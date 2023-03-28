import React from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {


    const cart = useSelector(state => state.cart.cartValue.length)
    const price = useSelector(state => state.cart.totalprice)
    return (
        <div>
          <nav className='navbar navbar-dark bg-dark'>
                <div className='navbar-nav d-inline mx-auto'>
            <p className='btn btn-primary'>Cart items:{cart}</p>
            <p className='btn btn-danger'>Total Price:{price}</p>

                </div>

            </nav>
            
        </div>
    );
};

export default Nav;