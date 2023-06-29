import React, {useState, useEffect} from 'react'
import Node from './Node/index.jsx';
import Header from './Header/index.jsx';

import './Visualiser.css';

export default function Visualiser() {

  const [nodes, setNodes] = useState([]);

  useEffect(()=>{
    const nodes = [];
    for(let row = 0; row < 20; row++){
      const currentRow = [];
      for(let col = 0; col < 50; col++){
        currentRow.push([]);
      }
      nodes.push(currentRow);
    }
    setNodes(nodes);
  },[nodes]);

  console.log(nodes);

  return (
    <div>
      <Header/>
      <div className="grid">
      {nodes.map((row, rowIdx)=>{
        return <div key={rowIdx}>
          {row.map((node,nodeIdx)=><Node key={nodeIdx}/>)}
        </div>
      })}
    </div>
    </div>
    
  )
}
