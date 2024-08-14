import React, { useState } from 'react'

export default function Sample() {
    const[color,setColor]=useState(null)

  return (
    <div>
        <div className="" style={{background:`${color}`}}>
            

        </div>
    </div>
  )
}
