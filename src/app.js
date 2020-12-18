import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      image: null    //The image to be displayed
    }
  }


  //Additional class methods with logic


  render() {

    //Regular statement logic 

    return (
      <Img image={this.state.image}/>
    )
  }
}

let image = document.getElementById('coffee-image');

if (image !== null) {
  image.src = "";
}