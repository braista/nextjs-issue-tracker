import React from 'react'
import AddCart from '../AddCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={ styles.card }>
      <AddCart />
    </div>
  )
}

export default ProductCard