import iconComplete from '../images/icon-complete.svg'

export default function Result({ display }) {

  return (
    <>
      <div style={{
        display: display ? `flex` : `none`
      }}

        className="result">

        <img id="complete" src={iconComplete} alt="" />
        <h2>THANK YOU!</h2>
        <p>We've added your detais</p>
        <button onClick={() => window.location.reload()}>Continue</button>
      </div>
    </>

  )
}