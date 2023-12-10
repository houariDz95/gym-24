import { trainers } from "../../constants"
import './trainers.css';
import instagram from '../../assets/icons/inst.svg'
import twitter from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'

const Trainers = () => {
  return (
    <section className="trainers margin-y" id="trainers">
      <h2 className="heading_text" style={{textAlign: 'center'}}>Trainers staff</h2>
      <div className="trainers_wrapper">
        {trainers.map((trainer, inex) => (
          <div className="trainer_card">
            <img src={trainer.img} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <div className="social">
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trainers