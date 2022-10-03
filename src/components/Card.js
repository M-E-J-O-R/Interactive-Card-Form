import cardLogo from '../images/card-logo.svg' 
const Card = ({ cardName, cardNumber, cardMM, cardYY, cardCVC }) => {

    return (
      <div className="card-display">
        <div className="front-card card">
          
          <img className="card-logo" src={cardLogo} alt="card-logo" />
          <p id="card-number-display"> {cardNumber === '' ? `1343 1323 1234 2343` : cardNumber}</p>
          <div className="details">
            <p id="card-name-display"> {cardName === '' ? "Amujo Babatunde" : cardName}</p>
            <p id="expiry-display">{(cardMM === '' && cardYY === '') ? '07/7' : `${cardMM}/${cardYY}`}</p>
          </div>
        </div>
        <div className="back-card card">
          <p id="cvc-display">{cardCVC === '' ? '767' : cardCVC}</p>
        </div>
      </div>
    );
  };
  
  export default Card;