import React, { Component } from 'react';
import './Tickets.css';
import Ticket from './Ticket';

class TicketList extends Component {
    constructor(props) {
        super(props)

        console.log('tls: ');
        console.log(this.props);
    }
    
	render() {
        
        
		return (           
            <ul className="tickets__list">
                { this.props.tickets.map( (ticket) => {
                    return (
                            <Ticket
                                currentCurency={this.props.currentCurency}
                                ticket={ticket}
                                carriers={this.props.carriers}
                                rates={this.props.rates}
                            />
                    );
                } ) }                
            </ul>
		);
	}
}

export default TicketList;