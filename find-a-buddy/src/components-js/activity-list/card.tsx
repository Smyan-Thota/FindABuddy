import React, {useEffect, useState} from 'react';
import './../../styling/cardstyling.css'; // Import your CSS file for styling
import dummyData from './../../dummyValues/depMockData.json'


const Card = (props : CardProps) => {
  const [cards, setCards] = useState<any>(dummyData);
  const [topCard, setTopCard] = useState<any>({});

  useEffect(() => {
    setCards(dummyData)
    setTopCard(dummyData[0])
  }, [props])

  const onNextClick = async () => {
    setCards(prevCards => prevCards.slice(1)); // Remove the top card from the array
    if (cards.length !== 0) { setTopCard(cards[0]) }
    else {setTopCard({"year": "No More Cards", "age": "No More Cards", "major": "No More Cards", "gender": "No More Cards"})}
    
  };

  const onFriendClick = async () => {
    alert("You have friended " + topCard.name);
  };

  return (
    <div className="stack-of-cards">
      {topCard && (
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
      }
    </div>
  );

};

interface CardProps {
  onChange(): any
}

export default Card;