import React, {Component} from 'react';

 
class Product extends  Component  {
 constructor(props){
     super(props);
     this.state ={
        name: '',
        price: 0,
        image: ''
     }
    
}
render(){
   const { name, price, image, deleteButton} = this.props
    return(
        <div>
            <section className="product-view">
            <img src={image} alt={'default'}/>
            <h1>{name}</h1>
            <h3>{price}</h3>
           
            <button onClick={deleteButton}>Delete</button>
            <button>Edit</button>
            </section>
        </div>
        )
    }
}

export default Product;