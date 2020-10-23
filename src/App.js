import React, { useState, useCallback, useRef } from 'react';

// dependencies
import produce from 'immer';

// components
import { Card, Ul, Li } from './components/tag/tag.component';

import './App.css';

const numRows = 30;
const numCols = 30;

const operations = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
]

const initialState = () => {
  const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

  return rows;
}

const App = () => {

  const [running, setRunning] = useState(false)

  const runningRef = useRef();
  runningRef.current = running;
  
  const [grid, setGrid] = useState(() => (initialState()));

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(prevState => (
      produce(prevState, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >=0 && newI < numRows && newK >=0 && newK < numCols) {
                neighbors += prevState[newI][newK]
              }
            })

            if (neighbors < 2 || neighbors >3) {
              gridCopy[i][k] = 0;
            } else if (prevState[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;

            }
          }
        }
      })
    ))

    setTimeout(runSimulation, 100);
  }, [])

  return <>
    <div className="container-fluild">
      <div className="row">
        <div className="col">
          <header className="text-center pt-3">
            <h3>Game of Life</h3>
          </header>
          <main>
            <div className="row m-2">
              <div className="col">
                <button onClick={() => { 
                  setRunning(!running);
                  if (!running) {
                    runningRef.current = true;
                    runSimulation();
                  }
                }}>
                  { running ? 'stop' : 'start' }
                </button>
                <button onClick={() => {
                  setGrid(initialState())
                }}>
                  clear
                </button>
                <button onClick={() => {
                  const rows = [];
                  for (let i = 0; i < numRows; i++) {
                    rows.push(Array.from(Array(numCols), () => Math.random() > .7 ? 1 : 0));
                  }
              
                  setGrid(rows)
                }}>
                  random
                </button>
            

             
                <Card title={`${numCols}x${numRows}`}>
                  <Ul>
                    <Li>
                      <div 
                        style={{
                          display: 'grid',
                          gridTemplateColumns: `repeat(${numCols}, 15px)`,
                        }}
                      >
                        { 
                          grid.map((rows, r) => 
                            rows.map((col, c) => 
                              <div 
                                key={`${r}-${c}`}
                                style={{
                                  width: 15,
                                  height: 15,
                                  backgroundColor: grid[r][c] ? '#8C5866' : '#778C49',
                                  border: 'solid 1px #736B45'
                                }}
                                onClick={() => {
                                  const newGrid = produce(grid, gridCopy => {
                                    gridCopy[r][c] = grid[r][c] ? 0 : 1;
                                  })
                                  setGrid(newGrid)
                                }} 
                              />
                            )
                          )
                        }
                      </div>
                    </Li>
                  </Ul>
                </Card>

              </div>
            </div>
            
          </main>
        </div>
      </div>
    </div>
  </>
}

export default App;
