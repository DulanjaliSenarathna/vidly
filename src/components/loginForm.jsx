import React, { Component } from 'react'

class LoginForm extends Component {

    handleSubmit = e => {
        e.preventDefault(); //prevent default full page reloads

        //call the server
        console.log('submited');
    }
    
    render() { 
        return (<div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='usename'>Username</label>
                    <input id='usename' type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type="text" className='form-control' />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>);
    }
}
 
export default LoginForm;