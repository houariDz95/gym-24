import check from "../../assets/icons/check.svg";
import './membershipCrad.css'

const MembershipCard = ({title, price, benefits}) => {
  return (
    <div className='card'>
        <div className='top'>
            <h4 className="card-title">pass {title}</h4>
            <span className="price">{price}</span>
        </div>
        <div className='bottom'>
            {benefits.map((item, i) => (
                <div className='benefit'>
                    <img src={check} alt='check' />
                    <span>{item}</span>
                </div>
            ))}
        </div>
        <button className="buy">Buy</button>
    </div>
  )
}

export default MembershipCard