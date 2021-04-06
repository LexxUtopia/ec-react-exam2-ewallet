import Card from '../components/Card';
import CardStack from '../components/CardStack';
import './Cards.scss';

export default function Cards() {
    return (
        <>
            <h1>E-Wallet</h1>
            <p>Active Card</p>
            <Card />
            <CardStack />
            <button className="add-card-button">Add a new Card</button>
        </>
    );
}