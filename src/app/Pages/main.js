import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Main extends Component{

    render(){
        return(
            <div className="main">
                <h1>Let's make a great web!!!</h1>
                <Link to="/dashboard">
                    <button className="btn btn-primary">Dashboard</button>
                </Link>
            </div>
        )
    }
}

export default Main

