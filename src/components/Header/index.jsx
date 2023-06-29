import React from 'react'

import "./Header.css";

export default function index() {
    const nav = [
        {
            id:1,
            title:"Algorithms"
        },
        {
            id:2,
            title:"Mazes and Patterns"
        },
        {
            id:3,
            title:"Add Bomb"
        },
        {
            id:4,
            title:"Visualise {Algorithm}"
        },
        {
            id:5,
            title:"Clear Board"
        },
        {
            id:6,
            title:"Clear Walls and Heights"
        },
        {
            id:7,
            title:"Clear Path"
        },
        {
            id:8,
            title:"Speed"
        }
    ]
  return (
    <div className='top'>
        <div className='header'>Pathfinding Visualiser</div>
        <div className='navbar'>
           {nav.map((item)=>{
            return(
                <div key={item.id} className='navitems'>{item.title}</div>
            )
           })} 
        </div>
        
    </div>
    
  )
}
