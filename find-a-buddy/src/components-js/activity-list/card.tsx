import React, {useState} from 'react';
import './../../styling/cardstyling.css'; // Import your CSS file for styling


const Card = ({ users, }) => {
  const matches = users;
  const [cards, setCards] = useState(matches);

  const onNextClick = () => {
    setCards(prevCards => prevCards.slice(1)); // Remove the top card from the array
  };

  const onFriendClick = () => {
    alert(cards[0].id);
  };
  
  
  const renderTopCard = () => {
    if (cards.length === 0) {
      return <div>No more Buddies</div>; // Message when there are no more cards
    }

    const topCard = cards[0];
    return (
      <div className="card" >
        <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}></img>
        <h2 >{topCard.name}</h2>
        <p className='ptext'>Year {topCard.year}</p>
        <p className='ptext'>Age: {topCard.age}</p>
        <p className='ptext'>Major: {topCard.major}</p>
        <p className='ptext'>Gender: {topCard.gender}</p>
      
      <div>
        <button type="button"  onClick={onNextClick}>
          Next Buddy
           </button>
        <button type="button" onClick={onFriendClick}>
          Friend Buddy
        </button>
      </div>
        
      </div>
    );
  };

  return (
    <div className="stack-of-cards">
      {renderTopCard()}
    </div>
  );

};

export default Card;