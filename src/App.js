import {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: {firstName: 'Snata', lastName: 'klaus'},
            company: 'misiganes on su nimi'
        };
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;
