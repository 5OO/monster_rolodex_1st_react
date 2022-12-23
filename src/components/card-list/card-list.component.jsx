import {Component} from 'react';

import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component {

    render() {
        console.log(this.props.monsters);
        console.log(' card-list.component so  asukohaga  render - > ln 6  logiti maha props-ga kohale toodud monster + props järgm rida')
        console.log(this.props);
        const {monsters} = this.props;
        return (

            <div className="card-list">
                {monsters.map((monster) => {

                    return (
                        <Card monster={monster} />
                    );
                })}
            </div>
        );
    }
}

export default CardList;