import React from 'react';
import Header from './header';
import EmployeeHome from './employeeHome';
import MessageCenter from './messageCenter/messageCenter';
import SignInPage from './signIn/signInPage';
import ManagerHome from './managerHome';
import ShiftManager from './shiftManagement/shiftManager';
import { Helmet } from 'react-helmet';
import VideoCenter from './videoCenter';

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: "signIn",
      userName: null,
      userType: null
    }

    //Get the username and user type stored if present, and if running on the client
    if (typeof window !== 'undefined') { 
      this.state.userName = localStorage.getItem("userName")
      this.state.userType = localStorage.getItem("userType")
      this.state.page = this.getCurrentPage();
    }

    this.handleNavRequest = this.handleNavRequest.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);

  }

  //Function to set the current page based on the page identifier stored in sessionStorage
  getCurrentPage() {
    let signedIn = localStorage.getItem("signedIn");
 
    //If the user is signed in to the system, get the page they left off on
    if (signedIn !== null) {

      let currentPage = sessionStorage.getItem("page");

      //Redirect the user to the page from their session if it's stored
      if (currentPage !== null) {
        return currentPage;
      }

      //Else, redirect them to the homepage (based on user-type)
      else {
        return localStorage.getItem("userType") === "manager" ? "home-mod" : "home";
      }
    }

    //Else, have the user sign in to the system
    else {
      return "signIn";
    }
  }
  
  //Function to handle navigation between 'pages' of the application
  handleNavRequest(destination) {

    //Check the user's type if the destination page is their 'home' page
    if (destination === "home") {

      //If the user is a manager, send them to the manager home page instead of the regular home page
      if (this.state.userType === "manager") {
        destination = "home-mod";
      }
    }

    this.setState({page: destination}, () => {

      if (typeof window !== 'undefined') { 
        sessionStorage.setItem("page", destination);
      }

      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  }


  //Function to handle a user signing in to the website, storing their signed in session and credentials
  signIn(userName, userType) {
    
    //If the user signing in is a manager, 
    if (userType === "manager") {
      this.setState({page: "home-mod", userName: userName, userType: userType}, () => {

        if (typeof window !== 'undefined') { 
          localStorage.setItem("signedIn", true);
          localStorage.setItem("userName", userName);
          localStorage.setItem("userType", userType);
          sessionStorage.setItem("page", "home-mod");
        }
      });
    }

    //Else, display the employee homepage
    else {
      this.setState({page: "home", userName: userName, userType: userType}, () => {
        
        if (typeof window !== 'undefined') { 
          localStorage.setItem("signedIn", true);
          localStorage.setItem("userName", userName);
          localStorage.setItem("userType", userType);
          sessionStorage.setItem("page", "home");
        }
      });
    }
  }

  signOut() {
    this.setState({page: "signIn", userName: null, userType: null}, () => {

      if (typeof window !== 'undefined') { 
        localStorage.clear();
        sessionStorage.clear();
      }
    });
  }

  setPageComponent() {

    if (this.state.page === "home") {
      return <EmployeeHome navRequest={this.handleNavRequest}/>;
    }

    else if (this.state.page === "home-mod") {
      return <ManagerHome navRequest={this.handleNavRequest}/>;
    }

    else if (this.state.page === "mail") {
      return <MessageCenter userType={this.state.userType}/>;
    }

    else if (this.state.page === "shift-manager") {
      return <ShiftManager userType={this.state.userType}/>;
    }

    else if (this.state.page === "signIn") {
      return <SignInPage signIn={this.signIn}/>;
    }

    else if (this.state.page === "video") {
      return <VideoCenter/>;
    }
  }

  render() {
    
    let currentPage = this.setPageComponent();

    return (
      <div>
        <Helmet>
          <script src="https://kit.fontawesome.com/673faf2976.js" crossorigin="anonymous"></script>
          <title>CIS*4300 Project</title>
        </Helmet>
        <Header pageName={this.state.page} username={this.state.userName} navRequest={this.handleNavRequest} signOut={this.signOut}/>
        {currentPage}
      </div>
    )
  }
}

export default Page;