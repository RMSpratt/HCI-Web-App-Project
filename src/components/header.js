import React from "react"

const PAGE_TITLES = {
  "home": "DWH —– Home",
  "home-mod": "DWH —— Home",
  "mail": "Message Center",
  "shift-manager": "Shift Manager",
  "video": "Video Center"
};

export default function Header(props) {
  
  let headerTitle = null;
  let headerNavLinks = [];
  let headerAccountInfo = [];

  if (props.pageName === "signIn") {
    headerTitle = <h1 className="title-long">DWH - Web Portal Sign-In</h1>
  }

  //Else determine what page the user is on within the application
  else {

    //Display the user's account username and profile icon in the header
    headerAccountInfo = <div id="header-account-details">
      <button className="button" id="account-details-icon"><i className="fas fa-user" role="img" aria-label="View account page"></i></button>
      <p>{props.username}</p>
      <button className="button secondary-btn" id="account-details-sign-out" onClick={props.signOut}>Sign Out</button>
    </div>

    if (props.pageName === "home" || props.pageName === "home-mod") {
      headerNavLinks.push(<button className="nav-icon" key="nav1" onClick={() => props.navRequest("mail")}><i className="fas fa-envelope" role="img" aria-label="Mail Center"></i></button>);
      headerNavLinks.push(<button className="nav-icon" key="nav2" onClick={() => props.navRequest("video")}><i className="fas fa-video" role="img" aria-label="Video Center"></i></button>);
      headerNavLinks.push(<button className="nav-icon disabled" disabled={true} key="nav3"><i className="fas fa-question-circle" role="img" aria-label="Help Center"></i></button>);
    }

    else if (props.pageName === "mail" || props.pageName === "shift-manager") {
      headerNavLinks.push(<button className="nav-icon" key="nav1" onClick={() => props.navRequest("home")}><i className="fa fa-home" role="img" aria-label="Home Page"></i></button>);
      headerNavLinks.push(<button className="nav-icon" key="nav2" onClick={() => props.navRequest("video")}><i className="fas fa-video" role="img" aria-label="Video Center"></i></button>);
      headerNavLinks.push(<button className="nav-icon disabled" disabled={true} key="nav3"><i className="fas fa-question-circle" role="img" aria-label="Help Center"></i></button>);
    }

    else if (props.pageName === "video") {
      headerNavLinks.push(<button className="nav-icon" key="nav1" onClick={() => props.navRequest("home")}><i className="fa fa-home" role="img" aria-label="Home Page"></i></button>);
      headerNavLinks.push(<button className="nav-icon" key="nav2" onClick={() => props.navRequest("mail")}><i className="fas fa-envelope" role="img" aria-label="Mail Center"></i></button>);
      headerNavLinks.push(<button className="nav-icon disabled" disabled={true} key="nav3"><i className="fas fa-question-circle" role="img" aria-label="Help Center"></i></button>);
    }

    //Set the page title based on the specific page the user is on
    headerTitle = <h1 className="title-short">{PAGE_TITLES[props.pageName]}</h1>
  }

  return (
    <header>
      {headerAccountInfo}
      {headerTitle}
      <div id="header-nav-links">
        {headerNavLinks}
      </div>
    </header>
  )
}

