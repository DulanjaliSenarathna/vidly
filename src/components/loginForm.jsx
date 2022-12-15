import React, { Component } from 'react'

class LoginForm extends Component {

    state = {
        account : { username: '', password: ''}
    };

    username = React.createRef();

    componentDidMount(){
        this.username.current.focus(); //instead of this method, we can use autoFocus in inout field as attribute
    }

    handleSubmit = e => {
        e.preventDefault(); //prevent default full page reloads

        //call the server
        const username = this.username.current.value;
        console.log('submited');
    };

    handleChange = ({currentTarget:input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    };
    
    render() { 

        const {account} = this.state;

        return (<div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='usename'>Username</label>
                    <input value={account.username}
                    name='username'
                    onChange={this.handleChange}
                     ref={this.username} id='usename' type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input value={account.password} 
                    onChange={this.handleChange}
                    id='password' type="text" className='form-control' name='password' />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>);
    }
}
 
export default LoginForm;