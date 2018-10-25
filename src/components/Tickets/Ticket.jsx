import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ru';
import './Tickets.css';

class Ticket extends Component {
    constructor(props) {
        super(props)

        // console.log('ticket props:');
        // console.log(this.props)

    }

    carrierInfo(name) {
        return this.props.carriers.find( (carrier) => carrier.shortName === name )
    }

    renderCost(price) {
        const {rates, currentCurency} = this.props;

        let computedPrice = price * rates[currentCurency];
        computedPrice = computedPrice.toFixed(2);
        return computedPrice + ' ' + currentCurency;
        // вместо 3 букв лучше показывать хуй (значок валюты)
    }

    renderStops(num) {
        let phrase;
        switch (num) {
            case 1:
                phrase =  num + ' пересадка';
                break;
            case 2: case 3: case 4:
                phrase =  num + ' пересадки';
                break;        
            default:
                phrase = num + ' пересадок';
                break;
        }
        return phrase;
    }

    renderDate(stringDate) {
        moment.locale('ru');
        let date = moment(stringDate, "DD.MM.YYYY");
        return date.format('DD MMM YYYY, ddd');
        
    }


	render() {
        const {ticket} = this.props;

		return (
			<li className="tickets__item ticket box">
                <div className="ticket__left-col">
                    <img    className="ticket__carrier-logo" 
                            src={ this.carrierInfo(ticket.carrier).logoSrc } 
                            alt={ this.carrierInfo(ticket.carrier).fullName || ticket.carrier } />

                    <button className="ticket__buy-button">
                        Купить <br/> за {this.renderCost(ticket.price)}
                        {/* { ticket.price }  */}
                    </button>
                </div>
                <div className="ticket__right-col">
                    <div className="ticket__time">
                        <div className="ticket__time-departure">
                            {ticket.departure_time}
                        </div>
                        <div className="ticket__stops">
                            {this.renderStops(ticket.stops)}
                        </div>
                        <div className="ticket__time-arrival">
                            {ticket.arrival_time}
                        </div>
                    </div>
                    <div className="ticket__cities">
                        <div className="ticket__cities-departure">
                            {ticket.origin + ', ' + ticket.origin_name}
                        </div>                        
                        <div className="ticket__cities-arrival">
                            {ticket.destination + ', ' + ticket.destination_name}
                        </div>
                    </div>
                    <div className="ticket__date">
                        <div className="ticket__date-departure">
                            {this.renderDate(ticket.departure_date)}
                        </div>

                        <div className="ticket__date-departure">
                            {this.renderDate(ticket.arrival_date)}
                        </div>
                    </div>
                </div>

			</li>
		);
	}
}

export default Ticket;