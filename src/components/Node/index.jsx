import React from 'react'

import './index.css';

export default function Node({row,col}) {
  return (
    <div
        id={`node-${row}-${col}`}
        className='node'>
    </div>
  )
}
