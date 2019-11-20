import React from "react";
import "./App.css";
import CoundownContainer from './CoundownContainer'
import LoginRegisterForm from './LoginRegisterForm'

// D4S1
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // loggedIn: false,
      // loggedInUserEmail: null
    }
  }

  }
  render(){
    return(
        <div className="App">
          {
            // this.state.loggedIn
            // ?
            <CoundownContainer />
            // :
            // <LoginRegisterForm login={this.login} register={this.register}/>
          }
        </div>
      );
  }
}

export default App;
