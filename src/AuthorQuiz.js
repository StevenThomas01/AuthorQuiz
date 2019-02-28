import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";

const Hero = () => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
};

const Turn = props => {
  console.log(props);
  console.log(props.dataSource);
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img
          //src={props.dataSource.author.imageUrl}
          className="authorimage"
          alt="Author"
        />
      </div>
      <div className="col-6">
        {props.dataSource.books.map(title => (
          <div className="answer">
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const Continue = () => {
  return <div />;
};

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">All images are from Wikipedia</p>
      </div>
    </div>
  );
};

export default class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn dataSource={this.props.dataSource} />
        <Continue />
        <Footer />
      </div>
    );
  }
}
