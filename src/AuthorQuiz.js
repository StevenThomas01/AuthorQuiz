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

const Book = props => {
  return (
    <div className="answer" onClick={() => props.onAnswerSelected(props.title)}>
      <h4 style={{ backgroundColor: highlightToBgColor(props.answerBgColor) }}>
        {props.title}
      </h4>
    </div>
  );
};

function highlightToBgColor(highlight) {
  const mapping = {
    none: "",
    correct: "green",
    wrong: "red"
  };
  return mapping[highlight];
}

const Turn = props => {
  console.log(props.dataSource);
  return (
    <div className="row turn">
      <div className="col-4 offset-1">
        <img
          //src={props.dataSource.author.imageUrl}
          className="authorimage"
          alt="Author"
        />
      </div>
      <div className="col-6">
        {props.dataSource.books.map(title => (
          <Book
            title={title}
            onAnswerSelected={props.onAnswerSelected}
            answerBgColor={props.answerBgColor}
          />
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
  state = { answerBgColor: "" };

  onAnswerSelected = answer => {
    const isCorrect = this.props.dataSource.author.books.some(
      book => book === answer
    );
    this.setState({ answerBgColor: isCorrect ? "correct" : "wrong" });
  };

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn
          // Rule: differences this.props vs this.onFunctionPointer vs this.state.SpecificStateName
          dataSource={this.props.dataSource}
          onAnswerSelected={this.onAnswerSelected}
          answerBgColor={this.state.answerBgColor}
        />
        <Continue />
        <Footer />
      </div>
    );
  }
}
