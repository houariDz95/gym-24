import './header.css'
import Navbar from '../navbar/Navbar'
import hero from '../../assets/hero.png'


const Header = () => {
  return (
    <header>
      <Navbar />
      <div className='header_wrapper'>
        <div className='left'>
          <h1>Free trial session with a trainer</h1>
          <button>Detailed</button>
        </div>
        <div className='right'>
          <img src={hero} alt="hero" />
        </div>
      </div>
    </header>
  )
}

export default Header