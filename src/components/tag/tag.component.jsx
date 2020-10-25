import React from 'react';

import './tag.styles.css';

export const Card = ({ children, title }) => {
  return (
    <div>
      <div className="custom-card">
        {title}
      </div>
      {children}
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