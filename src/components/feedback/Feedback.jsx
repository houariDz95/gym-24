import "./feedback.css";
import {reasons} from '../../constants'

const Feedback = () => {
  return (
    <section className="feedback">
      <h2 className="heading_text">Reasons to join</h2>
      <div className="feedback_reasons">
        {reasons.map((item, i) => (
          <div className="feadback_reasons-item">
            <img src={item.icon} alt={item.title} />
            <div className="text-wrapper">
              <h4>{item.title}</h4>
              <p>{item.descreption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feedback