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

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return {monsters: users};
                    },
                    () => {
                        console.log(this.state);
                    }
                )
            );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hi {this.state.name.firstName} {this.state.name.lastName}, Ma töötan ettevõttes {this.state.company}!
                    </p>
                    <button onClick={()=> {
                        this.setState({name: {firstName: 'Sigri', lastName:'Migri'}});
                        console.log(this.state);
                    }}
                    >Change name</button>
                </header>
            </div>
        );
    }
}

export default App;
