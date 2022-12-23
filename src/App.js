import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>

            {/*<SearchBox onChangeHandler={onSearchChange}*/}
            {/*           placeholder='search monsters'*/}
            {/*           className='monsters-search-box' />*/}
            {/*<CardList monsters={filteredMonsters}/>*/}
        </div>
    );
};
//
// class App extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             monsters: [],
//             searchField: ''
//         };
//         console.log('1 * constructor in app ln 13')
//     }
//
//     componentDidMount() {
//         console.log('component did mount ln 17')
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((json) =>
//                 this.setState(
//                     () => {
//                         return {monsters: json};
//                     },
//                     () => {
//                         console.log(this.state);
//                         console.log('  this state in component mount ln 27')
//                     }
//                 )
//             );
//     }
//
//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//
//         this.setState(() => {
//             return {searchField};
//         })
//     }
//
//     render() {
//         console.log('2 * render in app ln 42');
//
//         const {monsters, searchField} = this.state;
//         const {onSearchChange} = this;
//
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });
//
//         return (
//         );
//     }
// }

export default App;
