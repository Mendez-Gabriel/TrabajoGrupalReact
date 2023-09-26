import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const ItemStart = ({nombre}) => {
  return (
    <i className={`bi bi-${nombre}`}></i>
  )
}

export default ItemStart