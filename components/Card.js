import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFront: true,
    };
  }

  toString() {
    const { suit, rank } = this.props;
    // uppercases the first letter
    return (
      <span>{`${rank} of ${suit
        .toLowerCase()
        .replace(/\b[a-z]/g, l => l.toUpperCase())}`}</span>
    );
  }

  toSymbol() {
    const { suit, rank } = this.props;
    let s;

    switch (suit.toLowerCase()) {
      case 'hearts':
        s = ['9829', 'red'];
        break;
      case 'diamonds':
        s = ['9830', 'red'];
        break;
      case 'spades':
        s = ['9824', 'black'];
        break;
      case 'clubs':
        s = ['9827', 'black'];
        break;
      default:
        throw new Error('Suit not found.');
        break;
    }

    return (
      <span>
        {String.fromCharCode(s[0])} {rank}
        <style jsx>{`color: ${s[1]};`}</style>
      </span>
    );
  }

  flipCard() {
    this.setState({ showFront: !this.state.showFront });
  }

  renderFront() {
    return this.toSymbol();
  }

  renderBack() {
    return 'back';
  }

  render() {
    const { style } = this.props;

    if (style === 'string') return this.toString();

    return (
      <div className="card-wrapper">
        <div className="card">
          <div className=" front">{this.renderFront()}</div>
          <div className=" back">{this.renderBack()}</div>
        </div>
        <style jsx>{`
          .card-wrapper {
            position: relative;
            display: inline-block;
            width: 100px;
            margin-right: 10px;
            cursor pointer;
          }
          .card {
            box-sizing: border-box;
            width: 64px;
            height: 100px;
            padding: 4px;
            transition: all 0.6s ease;
            transform-style: preserve-3d;
          }
          .front,
          .back {
            position: absolute;
            background: white;
            width: 64px;
            height: 100px;
            top: 0;
            left: 0;
            border-radius: 5px;
            box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
              0 17px 17px 0 rgba(0, 0, 0, 0.15);
            backface-visibility: hidden;
          }
          .front {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
          }
          .back {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
          }
          .card-wrapper:hover .card {
            transform: rotateY(180deg);
          }
          .back {
            transform: rotateY(180deg);
          }
        `}</style>
        <style jsx global>{`
          body {
            background: #eee;
          }
        `}</style>
      </div>
    );
  }
}

export default Card;
