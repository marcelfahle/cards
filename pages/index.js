import React from 'react';
import Deck from '../components/Deck';

export default () => (
  <div>
    <Deck />
    <style jsx global>{`
      body {
        background: #eee;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);
