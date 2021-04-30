import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HeaderComponent from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninPage from './pages/sigin-in-page/sign-in.component';
import SignupPage from './pages/sign-up-page/sign-up.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component'


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';


class App extends Component{

  // closing the open subscription to avoid memory leaks
   unsubscribeFromAuth = null;

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession()
    
    // this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);
   
    //      userRef.onSnapshot(snapShot => {
    //         setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     }
    //     )}
    //     setCurrentUser(userAuth);
    //     // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items }))
    //     // );
    //   })
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
   currentUser: selectCurrentUser,
  //  collectionsArray: selectCollectionPreview
 });

 const mapDispatchToProps = (dispatch) => ({
   checkUserSession: () => dispatch(checkUserSession())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);