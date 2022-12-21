import {Component} from 'react';

class CardList extends Component {

    render() {
        console.log(this.props);

        return (
            <div>Hello I'm the CardList Component</div>
        );
    }
}

export default CardList;