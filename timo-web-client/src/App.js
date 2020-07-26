import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Post from "./components/Post/post";

class App extends Component {
  render() {
    return (
      <div>
        <Header />;
        <section className="App-main">
          <Post
            nickname="Chris"
            avatar="https://www.laravelnigeria.com/img/chris.jpg"
            caption="Moving the community!"
            image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
          />
          <Post
            nickname="OG"
            avatar="https://www.laravelnigeria.com/img/chris.jpg"
            caption="Holding a mic"
            image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
          />
        </section>
      </div>
    );
  }
}

export default App;

// import React from "react";

// const App = ({ title }) => <div>{title}</div>;

// export default App;
