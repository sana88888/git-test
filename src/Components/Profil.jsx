import React, { Component } from "react";
import "./style.css";
class Profil extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
    };
  }
  componentDidMount(){
    
    setInterval(()=>{this.setState({ timer: this.state.timer + 1 });},1000);
  }
  render() {
    const { FullName, bio, imgSrc, profession } = this.props.person;
    return (
      <div className="profil-container">
        <h1>{FullName}</h1>
        <p>{bio}</p>
        <img src={imgSrc} alt={FullName} width={400} />
        <p>{profession}</p>
        <span>Ce profil a été monté depuis:{this.state.timer}s</span>
      </div>
    );
  }
}
export default Profil;
