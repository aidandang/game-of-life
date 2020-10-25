import React from 'react';

import Board from './components/board/board.component';

import './App.styles.scss'
import logo from './logo.svg';

const App = () => {  
  return <>
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Game of Life</span>
        </h1>
        {/* eslint-disable-next-line */}
        {/* <a href="#" className="btn btn--white btn--animated">Discover our tours</a> */}
      </div>
      <Board />
      <div className="rules text-left">
        <p>
          The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
        </p>
        
        <p>
          - Any live cell with fewer than two live neighbours dies, as if by underpopulation.<br />
          - Any live cell with two or three live neighbours lives on to the next generation.<br />
          - Any live cell with more than three live neighbours dies, as if by overpopulation.<br />
          - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        </p>
        
        <p>
          These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
        </p>
        
        <p>
          - Any live cell with two or three live neighbours survives.
          - Any dead cell with three live neighbours becomes a live cell.
          - All other live cells die in the next generation. Similarly, all other dead cells stay dead.
        </p>

        <p>
          The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.
        </p> 
      </div>
    </header>
  </>
}

export default App;
