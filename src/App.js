import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninPage from './pages/sigin-in-page/sign-in.component';
import SignupPage from './pages/sign-up-page/sign-up.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component'

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'
import { Component } from 'react';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';



class App extends Component{

  // closing the open subscription to avoid memory leaks
   unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
   
         userRef.onSnapshot(snapShot => {
            setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        }
        )}

        setCurrentUser(userAuth)
      })
    };

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  };

  render(){
    const { currentUser } = this.props
    return (
      <div >
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SigninPage />)}/>
          <Route path='/signup' render={() => currentUser ? (<Redirect to='/' />) : (<SignupPage />)} />
          
        </Switch>
      </div>
    );
  }
}

 const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
 });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);