import React, { Component } from 'react';
import './Filters.css';
import { filter } from 'rsvp';

class TicketList extends Component {
	constructor(props) {
		super(props);
	}

	changeCurrencyFilter(event) {
		this.props.changeCurrencyFilter(event.target.value);
	}

	changeStopsFilter(event) {

        const target = event.target;
        let newValue = target.value ? {[target.value]: target.checked} : {};
        let newFilters = { stopsFilter: Object.assign({}, this.props.stopsFilter, newValue, {'all': false}) };

        // если не отмечен ни 1 чекбокс, то поставить чек на все билеты
        let anyChecked =  Object.values(newFilters.stopsFilter).find(val => val);
        newFilters.stopsFilter = anyChecked ? newFilters.stopsFilter : Object.assign(newFilters.stopsFilter, {'all': true});

        this.props.setStopsFilter( newFilters.stopsFilter );
    }

    changeStopsFilterOnly(filter) {
        this.props.setStopsFilter( { [filter]: true } );
    }
    
    

	componentDidMount() {
		[].find.call(
			document.querySelectorAll('input[name=currency]'),
			(input) => input.value === this.props.currentCurency
		).checked = true;
        this.props.setStopsFilter( {'all': true} );        
	}

	render() {
        console.log(this.props.stopsFilter);
        
		return (
			<ul className="filters__list">
				<li className="filters__item filter">
					<fieldset>
						<legend className="filter__name">Валюта</legend>
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
						<legend className="filter__name">Количество пересадок</legend>
						<div className="filter__content">
							<div className="stops-filter">
								<div className="custom-input">
                                    <input 
                                        type="checkbox" id="ch_all" name="stops" value="all" 
                                        checked={this.props.stopsFilter['all']} 
                                        onChange={() => this.changeStopsFilterOnly('all')} />
									<label htmlFor="ch_all">Все</label>
								</div>

								<div className="custom-input">
                                    <input 
                                        type="checkbox" id="ch0" name="stops" value="0" 
                                        checked={this.props.stopsFilter['0']} 
                                        onChange={this.changeStopsFilter.bind(this)} />
									<label htmlFor="ch0">
										Без пересадок
                                        <button 
                                            className="stops-filter__button-only"
                                            onClick={() => this.changeStopsFilterOnly('0')} >
                                            Только
                                        </button>
									</label>
								</div>
                                
								<div className="custom-input">
                                    <input 
                                        type="checkbox" id="ch1" name="stops" value="1" 
                                        checked={this.props.stopsFilter['1']} 
                                        onChange={this.changeStopsFilter.bind(this)} />
									<label htmlFor="ch1">
										1 пересадка
                                        <button 
                                            className="stops-filter__button-only" 
                                            onClick={() => this.changeStopsFilterOnly('1')} >
                                            Только
                                        </button>
									</label>
								</div>

								<div className="custom-input">
                                    <input 
                                        type="checkbox" id="ch2" name="stops" value="2" 
                                        checked={this.props.stopsFilter['2']} 
                                        onChange={this.changeStopsFilter.bind(this)} />
									<label htmlFor="ch2">
										2 пересадки
                                        <button 
                                            className="stops-filter__button-only" 
                                            onClick={() => this.changeStopsFilterOnly('2')}>
                                            Только
                                        </button>
									</label>
								</div>
                                
								<div className="custom-input">
                                    <input 
                                        type="checkbox" id="ch3" name="stops" value="3" 
                                        checked={this.props.stopsFilter['3']} 
                                        onChange={this.changeStopsFilter.bind(this)} />
									<label htmlFor="ch3">
                                        3 пересадки
                                        <button 
                                            className="stops-filter__button-only" 
                                            onClick={() => this.changeStopsFilterOnly('3')} >
                                            Только
                                        </button>
                                    </label>
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
