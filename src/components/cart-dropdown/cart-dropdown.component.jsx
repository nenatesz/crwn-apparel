import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import MessageBox from '../message-box/message-box.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? (
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                ) :
                (<MessageBox variant='danger'>Your cart is empty</MessageBox>)
            }
        </div>
        <CustomButton 
        onClick={() => { 
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
    </div>
);


// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));