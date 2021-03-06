import React, { Component } from 'react';
import './Tickets.css';
import Ticket from './Ticket';

class TicketList extends Component {
    constructor(props) {
        super(props);
    }
    
	render() {       
        const { tickets, currentCurency, carriers, rates, stopsFilter } = this.props;
        
		return (           
            <ul className="tickets__list">
                { tickets
                    .filter( (ticket) => {
                        if ( stopsFilter['all']) { return true }
                        else { return stopsFilter[ticket.stops] }
                    } )
                    .map( (ticket, index) => {
                    return (
                        <Ticket
                            key={index}
                            currentCurency={currentCurency}
                            ticket={ticket}
                            carriers={carriers}
                            rates={rates}
                        />
                    );
                } ) }                
            </ul>
		);
	}
}

export default TicketList;