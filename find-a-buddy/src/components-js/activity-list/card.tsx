import React, {useEffect, useState} from 'react';
import './../../styling/cardstyling.css'; // Import your CSS file for styling


const Card = (props : CardProps) => {
  const [cards, setCards] = useState<any>(null);
  const [topCard, setTopCard] = useState<any>(null);

  useEffect(() => {
    console.log("2");
    setCards(props.users);

    const topCardInit = cards[0];

    setTopCard(topCardInit)
  }, []);

  const onNextClick = async () => {
    setCards(prevCards => prevCards.slice(1)); // Remove the top card from the array
    setTopCard(cards[0])
  };

  const onFriendClick = async () => {
    alert(cards[0].id);
  };
  
  
  const renderTopCard = async () => {
    if (cards.length === 0) {
      return <div>No more Buddies</div>; // Message when there are no more cards
    }

    return cards[0];
    ;
  };

  return (
    <div className="stack-of-cards">
      {topCard && (
        (
          <div className="card" >
            <img src={require('./../../res/blank-profile.png')} />
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
        )
      )}
    </div>
  );

};

interface CardProps {
  users : []
}

export default Card;