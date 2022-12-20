import {Component} from "react";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [
                {
                    id: '23huh32o',
                    name: 'Linda'
                },
                {
                    id: '4j8wefw0sa',
                    name: 'Frank'
                },
                {
                    id: 'x8cnrycn80c',
                    name: 'Jackie'
                },
                {
                    id: 'x849ytnxq',
                    name: 'Ljoša'
                }
            ]
        };
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster) => {
                        return <div key={monster.id}>
                            <h1>    {monster.name}</h1>
                        </div>;
                    })
                }
            </div>
        );
    }
}

export default App;
