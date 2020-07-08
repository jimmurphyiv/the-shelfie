import React, { Component } from "react";



class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: '',
            img: '' 
        }        
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addProduct(this.state)
        this.setState({name: '',
        price: '', img: '' })
    }


   render(){
       return(
        <div>
           <form className="flex-product"
                onSubmit={this.handleSubmit}>
               <input type='img' name='image'
               value={this.state.image} placeholder='DEFAULT URL' onChange={this.handleChange}/>

               <input type='text' name='name' value={this.state.name} placeholder='ENTER NAME'
                onChange={this.handleChange}   /> 

                <input type='text' name='price' value={this.state.price} placeholder='ENTER PRICE'
                onChange={this.handleChange}   />  

                <input type='text' name='img' value={this.state.image} placeholder='ENTER IMAGE'
                onChange={this.handleChange}   />   

                <button>Add to Inventory</button>         
            </form>
        </div>

       )
    }

}
export default Form;