'use client'

import React from 'react'

const AddCart = () => {
  return (
    <button
      onClick={ () => console.log('Click') }
      className='btn btn-primary'
    >
      Add to Cart
    </button>
  )
}

export default AddCart