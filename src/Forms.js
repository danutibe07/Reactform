import { render } from '@testing-library/react'
import React, {Component} from 'react'


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname : null
        }
        this.state = {
            lastname : null
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        const data = this.state
        console.log(data)
        document.writeln(JSON.stringify(data))
    }
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
        [event.target.name] : event.target.value
    })  
    }
    render(){
        return(
            <div className='forms'>
                <form onSubmit={this.handleSubmit}>
                <h1>Kode-Camp Form</h1>
                <input type="text" placeholder='Firstname' name='firstname' onChange = {this.handleInputChange} ></input>
                <input type="text" placeholder='Lastname'  name='lastname' onChange = {this.handleInputChange}></input>
                <input type="email" placeholder='Email'    name='email' onChange = {this.handleInputChange}></input>
                <select name='gender' onChange = {this.handleInputChange}> 
	            <option value="gender">Gender</option>
	            <option value="male">Male</option>
            	<option value="female">Female</option>
                </select> 
                <input className='address' type="text" placeholder='Address'   name='address' onChange = {this.handleInputChange}></input>
                <textarea rows={4} cols={50} className='bio' type="text" placeholder='Bio'       name='bio' onChange = {this.handleInputChange}></textarea>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;
