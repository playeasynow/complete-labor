import React, { Component } from "react";
import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = (1 === Math.floor(Math.random() * 5) + 1);

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container mt-3 text-white">.</div>
        <div className="container">
        <h1 className="text-center mt-5">We Pride Ourselves in Beautiful Work</h1>
        <h3 className="text-center">
          See photos below
        </h3>
        </div>
        <div className="container">
          <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/1027508/pexels-photo-1027508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/1608165/pexels-photo-1608165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Liked You Too!!!
        </Alert>    */}
      </div>
    );
  }
}

export default Discover;
