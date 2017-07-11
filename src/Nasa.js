import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NasaPicture from './NasaPicture'
import './Nasa.css'

class Nasa extends Component {
    state = {
        picture: '',
    }
    handleChange =(ev) => {
        this.setState({picture: ev.target.value})
    }
    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.history.push(`/Nasa/${this.state.picture}`)
        this.setState({picture: ''})
    }  

    render() {
        return (
            <div className='Nasa'>
            <img className='Nasa-Logo' src='http://vector.me/files/images/1/3/13605/nasa.png' alt='Nasa logo'/>
            <form onSubmit={this.handleSubmit}>
                <div>
                <input type='date' value={this.state.picture} onChange={this.handleChange}/>
                </div>
                <div>
                    <button>Enter</button>
                    </div>
                </form>
                <Route exact path ='/Nasa' render={() => <h3>Please enter a date to view</h3>} />
                <Route path='/Nasa/:picture' component={NasaPicture}/>
            </div>
        )
    }
}

export default Nasa