import React from 'react';
import './Profile.css';

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            score:{}   
        }
    }

    componentDidMount(){
        const userName = this.props.profile.name.charAt(0).toUpperCase() + this.props.profile.name.slice(1);
        this.setState({name: userName});

        let {name,...rest} = this.props.profile;
        const profileObj = rest

        this.setState({score:profileObj});
    }
    

render(){
return(
<div className='profile'>
    <h1>Hello, {this.state.name}</h1>
    <div>
        <p><span className='span'>Science</span> <span>{this.state.score.science}</span></p>
        <p><span className='span'>Mathematics</span> <span>{this.state.score.mathematics}</span></p>
        <p><span className='span'>Sports</span> <span>{this.state.score.sports}</span></p>
        <p><span className='span'>History</span> <span>{this.state.score.history}</span></p>
        <p><span className='span'>Computer</span> <span>{this.state.score.computer}</span></p>
        <p><span className='span'>Animals</span> <span>{this.state.score.animals}</span></p>
        <p><span className='span'>Film</span> <span>{this.state.score.film}</span></p>
        <p><span className='span'>General</span> <span>{this.state.score.general}</span></p>
        <p><span className='span'>Geography</span> <span>{this.state.score.geography}</span></p>
    </div>
    <button className='restart' onClick={()=>this.props.onRouteChange('optionPage')}>Restart</button>
</div>
);
}
}

export default Profile;