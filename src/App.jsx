import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import Header from './components/Header/Header';
import Logo from './components/Header/Logo';
import TicketList from './components/Tickets/TicketList';
import Filters from './components/Filters/Filters';
import Preloader from './components/Preloader/Preloader';

class App extends Component {
	state = {
		currentCurency: 'EUR',
		tickets: [],
		carriers: [],
		rates: {}
	};

	getData(target, field) {
		axios
			.get(target)
			.then((response) => {
				const result = field ? response.data[field] : response.data;
				this.setState({ result });
			})
			.catch((error) => {
				console.error('ERROR! : ');
				console.error(error.response);
			});
	}

	componentDidMount() {
		this.getData = this.getData.bind(this);

		axios.get('./data/tickets.json').then((res) => {
			const tickets = res.data.tickets;
			this.setState({ tickets });
		});

		// this.getData('./data/carriers.json', 'carriers');
		axios
			.get('./data/carriers.json')
			.then((res) => {
				const carriers = res.data.carriers;
				this.setState({ carriers });
			})
			.then((response) => console.log(response))
			.catch((error) => {
				console.error('ERROR! : ');
				console.error(error.response);
			});

		axios
			.get('https://openexchangerates.org/api/latest.json?app_id=a22f4a72fe2846f3b490dfddfc250147&base=RUB')
			.then((res) => {
				const rates = res.data.rates;
				this.setState({ rates });
				console.log(this.state);
			})
			.then((response) => console.log(response))
			.catch((error) => {
				console.error('ERROR! : ');
				console.error(error.response);
			});

		// https://openexchangerates.org/api/latest.json?app_id=a22f4a72fe2846f3b490dfddfc250147&base=RUB
	}

	render() {
		return (
			<div className="App">
				<header>
					<Logo />
				</header>

				<main>
					<div className="content-wrapper">
						<div className="filters box">
							тут будут фильтры.
                            <Filters 
                                currentCurency={this.state.currentCurency}
                            />
							{/* <Filters /> */}
						</div>

						<div className="tickets">
							{
                                this.state.tickets.length && this.state.carriers.length && Object.keys(this.state.rates).length ?                                
								<TicketList
									currentCurency={this.state.currentCurency}
									tickets={this.state.tickets}
									carriers={this.state.carriers}
									rates={this.state.rates}
								/>
                                :
                                <Preloader />
                            }
						</div>
					</div>
				</main>

				<footer>I ball was rawt ©</footer>
			</div>
		);
	}
}

export default App;
