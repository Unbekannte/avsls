import React, { Component } from 'react';
import axios from 'axios';
import './Ticket.css';
// import Header from './components/Header/Header';
import Logo from './components/Header/Logo';

class Tickets extends Component {
    constructor(props) {
        super(props)

        console.log('tickets props:');
        
        console.log(this.props)
    }
    state = {
        currentCurency: '',
        
        tickets: []
    }

	render() {
		return (
			<div className="App">
                <Logo />
                
                <button onClick={() => console.log(this.state)}>!!!</button>

                <ul>
                    {/* { this.state.tickets.map(ticket => <li>{ticket.price}</li>)} */}
                    { this.state.tickets.map(ticket => 
                        <ul> {
                        Object.keys(ticket).map(key => {
                            
                            return <li> {`${key} : ${ticket[key]}`}</li>
                         })
                        }
                        </ul>
                    )}
                </ul>

			</div>
		);
	}
}

export default App;