import React from 'react';
import './Signin.css';

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    emailInputChange = (event) =>{
        this.setState({email:event.target.value});
    }
    passwordInputChange = (event) =>{
        this.setState({password:event.target.value});
    }

    onSigninClick = () =>{
        fetch(' https://shummi-quiz-app-api.herokuapp.com/signin', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.id){
                this.props.onRouteChange('optionPage');
                this.props.setUserEmail(data.email);
            }
            else{
                console.log('wrng');
            }
        })
    }
    hi=()=>{
        console.log('Sign-in');
    }

render(){
return(
<div>
    <main className="black-80 centerVer">
    <form className="measure center centerVer">
    
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f3 w-100 fw6 ph0 mh0 centerHor">SIGN IN</legend>
        
        <div className="mt3">
            <label className="db fw6 lh-copy f6" >Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.emailInputChange}/>
        </div>

        <div className="mv3">
            <label className="db fw6 lh-copy f6">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.passwordInputChange}/>
        </div>
        </fieldset>

        <div className="">
        <input className="sbutton white grow pointer"
        onClick={this.onSigninClick} onChange={this.hi} value='Sign in'/>
        </div>

        <div className="lh-copy mt3"> 
        <p className="f6 dim black db pointer"
        onClick={()=>this.props.onRouteChange('registerPage')}>Register</p>
        </div>

    </form>
    </main>
</div>
);
}
}

export default Signin;