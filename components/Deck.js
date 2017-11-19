import React from 'react';
import Card from './Card';

function buildDeck() {
  const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
  let d = [];
  for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < ranks.length; r++) {
      d.push({ r: ranks[r], s: suits[s] });
    }
  }
  return d;
}

class Deck extends React.Component {
  constructor(props) {
    super(props);

    const d = buildDeck();
    this.state = {
      deck: d,
    };
  }

  shuffle() {
    const { deck } = this.state;
    for (let c = deck.length - 1; c > 0; c--) {
      const swapCard = Math.floor(Math.random() * c);
      const tempCard = deck[c];
      deck[c] = deck[swapCard];
      deck[swapCard] = tempCard;
    }
    this.setState({ deck });
  }

  render() {
    const { deck } = this.state;
    return [
      <div key="controls" className="controls">
        <button onClick={() => this.shuffle()}>Shuffle</button>
        <style jsx>{`
          .controls {
            background: black;
            margin-bottom: 20px;
            padding: 4px;
          }
        `}</style>
      </div>,
      <div key="deck" className="deck">
        {deck.map(c => <Card key={`${c.s}${c.r}`} suit={c.s} rank={c.r} />)}
        <style jsx>{`
          .deck {
            display: flex;
            width: 880x;
            margin: 0 auto;
            flex-flow: row wrap;
            justify-content: space-around;
          }
        `}</style>
      </div>,
    ];
  }
}

export default Deck;
