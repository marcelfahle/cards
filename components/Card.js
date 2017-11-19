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
        s = ['9829', '#b45d5c'];
        break;
      case 'diamonds':
        s = ['9830', '#b45d5c'];
        break;
      case 'spades':
        s = ['9824', '#504a4f'];
        break;
      case 'clubs':
        s = ['9827', '#504a4f'];
        break;
      default:
        throw new Error('Suit not found.');
        break;
    }

    return (
      <div className="card-content">
        <span className="suit">{String.fromCharCode(s[0])}</span>
        <span className="rank">{rank}</span>
        <style jsx>{`
          .card-content {
            color: ${s[1]};
            position: relative;
            width: 100%;
            height: 100%;
          }
          .rank {
            position: absolute;
            left: 4px;
            font-family: sans-serif;
            font-size: 20px;
            text-transform: uppercase;
          }
          .suit {
            font-size: 40px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
        `}</style>
      </div>
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
            width: 50px;
            margin-right: 10px;
            margin-left: 10px;
            margin-bottom: 20px;
            cursor pointer;
          }
          .card {
            box-sizing: border-box;
            height: 78px;
            padding: 4px;
            transition: all 0.6s ease;
            transform-style: preserve-3d;
          }
          .front,
          .back {
            position: absolute;
            background: white;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 3px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3),
              0 2px 2px 0 rgba(0, 0, 0, 0.15);
            backface-visibility: hidden;
          }
          .front {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
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
      </div>
    );
  }
}

export default Card;
