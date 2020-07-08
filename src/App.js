import React, { Component } from 'react';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    inventory: []
  }
  this.addProduct = this.addProduct.bind(this);
}
      
componentDidMount(){
this.getInventory();

}
    
    
getInventory = () => {
  axios.get('/api/inventory/')
  .then(res => {
      this.setState({inventory: res.data})
      })
    .catch(err => console.log(err))
    }
    
  
addProduct(inventory){ 
  axios.post('/api/inventory', {inventory})
    .then(res => {
      this.setState({inventory: res.data })
      })
    .catch(err => console.log(err))
    }
    
    
editProduct = (id, newProduct) => {
  let body = {product: newProduct}
    
  axios.put(`/api/inventory/${id}`, body)
    .then(res =>{
      this.setState({newProduct: res.data})
        this.getProduct(id);
        })
    .catch(error => console.log(error));
    }
    
render(){
 console.log(this.state.inventory)
 return (
    <div className="App">
         
        <Header />
        <Dashboard 
          inventory={this.state.inventory} />
      
        <Form 
          addProduct={this.addProduct}
          editProductFn={this.editProduct}/>
           
    </div>
    );
  }
}
export default App;
    
