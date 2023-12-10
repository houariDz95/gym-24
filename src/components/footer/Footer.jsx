import './footer.css'
import instagram from '../../assets/icons/inst.svg'
import twitter from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'
import facebook from '../../assets/icons/facebook.svg'
import call from '../../assets/icons/call.svg'
import email from '../../assets/icons/email.svg'


const Footer = () => {
  return (
    <footer>
      <div className="left flex-1">
        <h3>
          <a href="/" className='logo'>
            GYM<span>24</span>
          </a>
        </h3>
        <p className='desc'>
          Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community
        </p>
      </div>
      <div className='middle flex-1'>
        <h3 className='title'>
          Address
        </h3>
        <p className='desc'>
          Republic of Belarus
          Minsk city
          Dzerzhinsky Avenue 15
        </p>
      </div>
      <div className='contact flex-1'>
        <h3 className='title'>
          Contact
        </h3>
        <p className='contact_p'>
          <span>
              <a href="#">
                <img src={call} alt="call" />
              </a>
              +375(44)-777-24-12
          </span>
          <span>
              <a href="#">
                <img src={email} alt="email" />
              </a>
              gym24@gmail.com
          </span>
        </p>
        <div className="social">
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={facebook} alt="youtube" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer