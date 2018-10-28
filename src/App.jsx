import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import Header from './components/Header/Header';
import Logo from "./components/Header/Logo";
import TicketList from "./components/Tickets/TicketList";
import Filters from "./components/Filters/Filters";
import Preloader from "./components/Preloader/Preloader";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCurency: "RUB",
            tickets: [],
            carriers: [],
            rates: {},
            stopsFilter: ['all']
        };

        this.getData = this.getData.bind(this);
    }

    getData = (target, field) =>  {
        axios
            .get(target)
            .then(response => {
                const result = field ? response.data[field] : response.data;
                this.setState({ [field]: result });
            })
            .catch(error => {
                console.error("ERROR! : ");
                console.error(error.response);
            });
    }

    setCurrentCurrency = value => {
        this.setState({ currentCurency: value });
    };

    setStopsFilter = value => {
        this.setState({ stopsFilter: value });
    };

    componentDidMount() {
        this.getData("./data/tickets.json", 'tickets');
        this.getData('./data/carriers.json', 'carriers');
        this.getData('https://openexchangerates.org/api/latest.json?app_id=a22f4a72fe2846f3b490dfddfc250147&base=RUB', 'rates');
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
                            <Filters
                                currentCurency={this.state.currentCurency}
                                changeCurrencyFilter={this.setCurrentCurrency}
                                stopsFilter={this.state.stopsFilter}
                                setStopsFilter={this.setStopsFilter}
                            />
                            {/* <Filters /> */}
                        </div>

                        <div className="tickets">
                            {
                                console.log("???????: ")}{
                                console.log(this.state)
                            }
                            {this.state.tickets.length &&
                            this.state.carriers.length &&
                            Object.keys(this.state.rates).length ? (
                                <TicketList
                                    currentCurency={this.state.currentCurency}
                                    tickets={this.state.tickets}
                                    carriers={this.state.carriers}
                                    rates={this.state.rates}
                                    stopsFilter={this.state.stopsFilter}
                                />
                            ) : (
                                
                                <Preloader />
                            )}
                        </div>
                    </div>
                </main>

                <footer>I ball was rawt ©</footer>
            </div>
        );
    }
}

export default App;
