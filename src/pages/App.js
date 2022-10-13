import Card from '../components/Card'
import Form from '../components/Form'
import '../styles/style.css'

import { useState } from 'react';

const Home = () => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardMM, setCardMM] = useState('')
  const [cardYY, setCardYY] = useState('')
  const [cardCVC, setCardCVC] = useState('')



  return (
    <div className='container'>
      <Card cardName={cardName} cardNumber={cardNumber} cardMM={cardMM} cardYY={cardYY} cardCVC={cardCVC} />

      <Form cardName={cardName} cardNumber={cardNumber} cardMM={cardMM} cardYY={cardYY} cardCVC={cardCVC} setCardName={setCardName}
        setCardNumber={setCardNumber}
        setCardMM={setCardMM}
        setCardYY={setCardYY}
        setCardCVC={setCardCVC} />
    </div>
  );
}

export default Home;