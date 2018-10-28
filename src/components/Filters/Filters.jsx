import React, { Component } from 'react';
import './Filters.css';
import { filter } from 'rsvp';

class TicketList extends Component {
    constructor(props) {
        super(props)

        console.log('filters props: ');
        console.log(this.props);
    }

    changeCurrencyFilter(event) {
        this.props.setCurrentCurrency(event.target.value);
    }
    
    changeStopsFilter(event) {
        let filters = [];
        let inputList = document.querySelectorAll('input[name=stops]');

        [].forEach.call(inputList, (input) => {
            // console.log(input);

            // если не отмечен ни 1 чекбокс, то поставить чек на все билеты
            let anyChecked = [].find.call(inputList, (input) => input.checked )
            if (!anyChecked) { 
                [].find.call(inputList, (input) => input.value === 'all' ).checked = true;
            }
            
            if (input.checked) {
                filters.push(input.value);
            }
        } );
        this.props.setStopsFilter(filters);
    }
    
    componentDidMount() {        
        [].find.call(document.querySelectorAll('input[name=currency]'), (input) => input.value === this.props.currentCurency ).checked = true;
        [].find.call(document.querySelectorAll('input[name=stops]'), (input) => this.props.stopsFilter.includes(input.value) ).checked = true;
    }
    

	render() {    
        
		return (           
            <ul className="filters__list">
                <li className="filters__item filter">
                    <fieldset>
                        <legend className="filter__name">
                            Валюта
                        </legend>
                        <div className="filter__content">
                            <div className="currency-filter" onChange={this.changeCurrencyFilter.bind(this)}>
                                <input type="radio" id="r1" name="currency" value="RUB" />
                                <label htmlFor="r1">RUB</label>
        
                                <input type="radio" id="r2" name="currency" value="USD" />
                                <label htmlFor="r2">USD</label>
        
                                <input type="radio" id="r3" name="currency" value="EUR" />
                                <label htmlFor="r3">EUR</label>
                            </div>
                        </div>
                    </fieldset>
                </li>
                <li className="filters__item filter">
                    <fieldset>
                        <legend className="filter__name">
                            Количество пересадок
                        </legend>
                        <div className="filter__content">
                            <div className="stops-filter" onChange={this.changeStopsFilter.bind(this)}>
                                <div class="custom-input">
                                    <input type="checkbox" id="ch_all" name="stops" value="all" />
                                    <label htmlFor="ch_all">Все</label>
                                </div>

                                <div class="custom-input">
                                    <input type="checkbox" id="ch0" name="stops" value="0" />
                                    <label htmlFor="ch0">Без пересадок</label>
                                </div>
        
                                <div class="custom-input">
                                    <input type="checkbox" id="ch1" name="stops" value="1" />
                                    <label htmlFor="ch1">1 пересадка</label>
                                </div>
                                
                                <div class="custom-input">
                                    <input type="checkbox" id="ch2" name="stops" value="2" />
                                    <label htmlFor="ch2">2 пересадки</label>
                                </div>
                                
                                <div class="custom-input">
                                    <input type="checkbox" id="ch3" name="stops" value="3" />
                                    <label htmlFor="ch3">3 пересадки</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </li>
            </ul>
		);
	}
}

export default TicketList;