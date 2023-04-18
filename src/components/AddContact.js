import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


class AddContact extends React.Component{
    state = {
        name:'',
        email:''
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert("All the field should be enterd")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:'', email:''})
        // console.log(this.state);
    }
    render() {
        return (
        <div className="ui main">
            <h2>ADD CONTACT</h2>
            <form className="forms" onSubmit={this.add}>
                <div className="field">
                    <label>Name: </label>
                    <input type="text" placeholder="Enter Name" value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})}></input>
                </div>
                <div className="field">
                    <label>Email: </label>
                    <input type="text" placeholder="Enter Email id" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}></input>
                </div>
                <button className="ui button blue">ADD</button>
            </form>
        </div>
        );
    }
}

export default AddContact