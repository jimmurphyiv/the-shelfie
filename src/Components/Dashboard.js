import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {
    
       
    
  productInput = (value) => {
    this.setState({productInput: value});

}

editToggle = () => {
    this.setState({editProduct: !this.props.editProduct})
}

handleUpdate = (id) => {
    this.props.editProductFn(id, this.props.productInput);
    this.editToggle();
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}
        
deleteProduct =() =>{
    const {url} = this.state
     axios.delete(`${url}${this.props.id}`)
     .then(() =>{
         this.props.getInventory()
     })
     .catch(err =>console.log(err))
}

render() {
    const mappedInventory = this.props.inventory.map((product, index)=>{
        return(
         <Product
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            deleteProduct={this.deleteProduct} />
            )
        })
    
    return(
        <div>
               {mappedInventory}
            
                <img src={this.props.inventory.image} alt={this.props.inventory.name} />

                {this.props.editProduct ?(
            <div>
                <input value={this.props.productInput}
                onChange={e => this.handleChange(e.target.value)} />

                <button onClick={() => this.handleUpdate(this.props.inventory.id)}>Submit</button>
            </div> ) : (

            <div>
                <p>{this.props.inventory.editProduct}</p>
                <button onClick={this.editToggle}>Edit</button>
            </div>  
                )}
                <button onClick={ () => this.props.deleteProduct(this.props.inventory.id)}>Delete</button>    
        </div>
       
        
        );
    }
}
export default Dashboard;