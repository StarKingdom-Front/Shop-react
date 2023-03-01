import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Orders extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <d>{this.props.item.price}$</d>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Orders