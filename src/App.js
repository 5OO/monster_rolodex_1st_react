import {Component} from "react";
import CardList from "./card-list/card-list.component";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
        console.log('constructor in app ln 13')
    }

    componentDidMount() {
        console.log('component did mount ln 17')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return {monsters: users};
                    },
                    () => {
                        console.log(this.state);
                        console.log('  this state in component mount ln 27')
                    }
                )
            );
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(() => {
            return {searchField};
        })
    }

    render() {
        console.log('render in app ln 42');

        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <input
                    className='search-box'
                    type='search'
                    placeholder='search monsters'
                    onChange={onSearchChange}
                />

                <CardList monsters ={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
