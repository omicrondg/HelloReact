import React from "react";
import "./App.css";
import { Card } from "./components/containers/Card/Card";
import { AddCardForm } from "./components/custom/AddCardForm/AddCardForm";

const cardsData = [
  {
    id: 1,
    heading: "React Functional Components",
    description: "In this article you will know:",
    listData: [
      "React props",
      "React state",
      "React components",
      "ve od pam React"
    ]
  },
  {
    id: 2,
    heading: "Vue Functional Components",
    description: "In this article you will know:",
    listData: ["Vue props", "Vue state", "Vue components", "ve od pam Vue"]
  },
  {
    id: 3,
    heading: "Angular Functional Components",
    description: "In this article you will know:",
    listData: [
      "Angular props",
      "Angular state",
      "Angular components",
      "ve od pam Angular"
    ]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: cardsData
    };
    // console.log(this.state);
  }

  removeItem = (cardId, list) => {
    let _data = this.state.data.map(card => {
      if (card.id === cardId) card.listData = list;
      return card;
    });

    this.setState({
      data: _data
    });
  };

  removeCard = cardId => {
    let _cards = this.state.data.filter(element => element.id !== cardId);
    this.setState({
      data: _cards
    });
  };

  addCard = card => {
    console.log("eeeee", card);
    
    // let _cards = this.state.data.filter(element => element.id !== card.cardId);
    // this.setState({
      // data: _cards
    // });
  };

  renderCards = () => {
    return this.state.data.map(element => (
      <Card
        key={element.id}
        cardData={element}
        removeItem={this.removeItem}
        removeCard={this.removeCard}
      />
    ));
  };

  // shouldComponentUpdate(prevState, state) {
  //   console.log(prevState == state);
  //   return true;
  // }

  render() {
    return (
      <>
        <AddCardForm action={this.addCard} />
        {this.renderCards()}
      </>
    )
  }
}

export default App;
