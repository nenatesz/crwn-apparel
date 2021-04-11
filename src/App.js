import { Switch, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninPage from './pages/sigin-in-page/sign-in.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'
import { Component } from 'react';
import SignupPage from './pages/sign-up-page/sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';



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
    return (
      <div >
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninPage} />
          <Route path='/signup' component={SignupPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);