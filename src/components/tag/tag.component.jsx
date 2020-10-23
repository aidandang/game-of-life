import React from 'react';

export const Card = ({ children, title }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="card my-3">
          <div className="card-header bg-card-cs">
            <div className="row">
              <div className="col text-uppercase font-weight-bold">{title}</div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export const Li = ({ children }) => {
  return (
    <li className="list-group-item bg-item-list-cs list-group-item-action py-4">
      {children}
    </li>
  )
}

export const Ul = ({ children }) => {
  return (
    <ul className="list-group list-group-flush">
      {children}
    </ul>
  )
}