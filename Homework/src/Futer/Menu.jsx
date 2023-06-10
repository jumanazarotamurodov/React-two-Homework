import React from 'react'
import "./menu.css"

const Menu = ({item}) => {
    console.log(item);
  return (
    <div className='Menu'>
        <h1>{item}</h1>
    </div>
  )
}

export default Menu