import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import { Categories } from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'item-bg.jpg',
          desc: 'lorem ipsu dolar sit amet',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол серый',
          img: 'item-bg.jpg',
          desc: 'lorem ipsu dolar sit amet',
          category: 'tables',
          price: '100'
        },
        {
          id: 3,
          title: 'Полка серый',
          img: 'item-bg.jpg',
          desc: 'lorem ipsu dolar sit amet',
          category: 'sofa',
          price: '150'
        },
        {
          id: 4,
          title: 'Окно серый',
          img: 'item-bg.jpg',
          desc: 'lorem ipsu dolar sit amet',
          category: 'chairs',
          price: '200'
        },
      ],
      ShowFullItem: false,
      fullItem: {}

    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories  chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.ShowFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category) {

    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  } 
}

export default App;
