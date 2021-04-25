import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

// import "./header.styles.scss"
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

const HeaderComponent = ({ currentUser, hidden }) => (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
            
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                 currentUser ? (
                 <OptionLink as='div' onClick={() => auth.signOut()}>
                     SIGN OUT
                 </OptionLink> 
                 ) : (
                 <OptionLink  to='/signin'>
                     SIGN IN
                 </OptionLink>
                 )
                }
                <CartIcon />           
            </OptionsContainer>
        {
            hidden ? null :
        (<CartDropdown />)
        }
        </HeaderContainer>
);

// state here gives access to the root reducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})
export default connect(mapStateToProps)(HeaderComponent)