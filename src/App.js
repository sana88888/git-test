import "./App.css";

import React, { Component } from "react";
import Profil from "./Components/Profil";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        FullName: "Tom Ford",
        bio: "Né Thomas Carlyle Ford le 27 août 1961 à Austin (Texas), est un styliste et réalisateur américain.",
        imgSrc:
          "https://s.wsj.net/public/resources/images/OB-ZC644_fordne_OZ_20131001114824.jpg",
        profession: "Styliste américain",
      },
      shows: false,
    };
  }
  render() {
    return (
      <div>
        <button
          className="bouton"
          onClick={() => this.setState({ shows: !this.state.shows })}
        >
          PROFIL
        </button>
        {this.state.shows && <Profil person={this.state.person} />}
      </div>
    );
  }
}

export default App;
