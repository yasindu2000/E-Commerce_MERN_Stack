import React from 'react'

function ProductCard(props) {
  console.log(props)
  return (
    <div> 
      <h1>{props.name}</h1>
      <img src={props.image} />
      <p>{props.price}</p>
      <button>View More</button>
    </div>
  )
}

export default ProductCard