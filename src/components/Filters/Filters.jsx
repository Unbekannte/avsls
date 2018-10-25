import React, { Component } from 'react';
import './Filters.css';

class TicketList extends Component {
    constructor(props) {
        super(props)

        console.log('tls: ');
        console.log(this.props);
    }
    
	render() {
        const { currentCurency } = this.props;        
        
		return (           
            <ul className="filters__list">

                <li className="filters__item filter">
                    <div className="filter__name">
                        Валюта
                    </div>
                    <div className="filter__content">
                        <input type="radio" id="r1" name="currency" value="RUB" />
                        <label for="r1">RUB</label>

                        <input type="radio" id="r2" name="currency" value="RUB" />
                        <label for="r2">USD</label>

                        <input type="radio" id="r3" name="currency" value="RUB" />
                        <label for="r3">EUR</label>
                    </div>
                </li>

                {/* { this.props.tickets.map( (ticket) => {
                    return (
                            <Ticket
                                currentCurency={this.props.currentCurency}
                                ticket={ticket}
                                carriers={this.props.carriers}
                                rates={this.props.rates}
                            />
                    );
                } ) }                 */}
            </ul>
		);
	}
}

export default TicketList;