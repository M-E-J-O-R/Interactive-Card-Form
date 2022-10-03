import Result from './Result'
import { useState } from 'react'
function Form({ cardName, cardNumber, cardMM, cardYY, cardCVC, setCardName, setCardNumber, setCardMM, setCardYY, setCardCVC }) {
  function handleSubmit(event) {
    event.preventDefault()
    setDisplay(prev => !prev)
  }


  const [display, setDisplay] = useState(false)
  const lengthChecker = (e) => {
    return e.target.value.length > e.target.maxLength ? e.target.value.slice(0, e.target.maxLength) : e.target.value

  }


  return (
    <div className="form-container">
      <Result display={display} />

      <form
        style={{
          display: display ? `none` : `block`
        }}
        onSubmit={handleSubmit}>

        <label htmlFor="card-holder-name
            ">
          <p>CARDHOLDER NAME</p>
          <input
            required id="card-holder-name" type="text" placeholder="e.g Jane Applessed"
            value={cardName}
            onChange={e => setCardName(e.target.value)}
          />
          

        </label>


        <label htmlFor="card-number">
          <p>CARD NUMBER</p>
          <input required minLength={16} maxLength={16} id="card-number" type="number" placeholder="1234 5678 9123 0000"
            value={cardNumber}
            onChange={e => setCardNumber(lengthChecker(e))}

          />
        </label>

        <div className="expiry-date">
          <div className="expiry">
            <p>EXP DATE[MM/YY]</p>
            <input required max={12} maxLength={2} id="mm" type="number" placeholder="MM"
              value={cardMM}
              onChange={e => setCardMM(lengthChecker(e))}
            />
            <input required maxLength={2} id="yy" type="number" placeholder="YY"
              value={cardYY}
              onChange={e => setCardYY(lengthChecker(e))}
            />
          </div>

          <div className="expiry-cvc">

            <p>CVC</p>
            <input maxLength='3' required id="cvc" type="number" placeholder="e.g 123"
              value={cardCVC}
              onChange={e => setCardCVC(lengthChecker(e))}


            />


          </div>
        </div>

        <button >Confirm </button>


      </form>
    </div>
  )
}
export default Form