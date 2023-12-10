import { membership } from "../../constants"
import MembershipCard from "../membership-card/MembershipCard"
import './membership.css'
const Membership = () => {
  return (
    <section className="membership">
      <h2 className="heading_text" style={{textAlign: 'center'}}>Gym membership</h2>
      <div className="membership_cards">
        {membership.map((item, index) => (
          <MembershipCard {...item} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Membership