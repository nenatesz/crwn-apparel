import { Switch, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninPage from './pages/sigin-in-page/sign-in.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'
import { Component } from 'react';
import SignupPage from './pages/sign-up-page/sign-up.component';



class App extends Component{

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  };

  // closing the open subscription to avoid memory leaks
   unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state);});
        });
        
      }
       this.setState({currentUser: userAuth})
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <HeaderComponent currentUser={this.state.currentUser} />
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

export default App;