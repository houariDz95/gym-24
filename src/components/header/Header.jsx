import './header.css'
import Navbar from '../navbar/Navbar'
import hero from '../../assets/hero.png'


const Header = () => {
  const handleScroll = (section) => {
    const element = document.getElementById("membership");
    
    // Check if the section is already in the viewport
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Section is fully in view, no need to scroll
      return;
    }
  
    // Scroll to the section with a slight offset
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY + 20,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header>
      <Navbar />
      <div className='header_wrapper'>
        <div className='header_wrapper-text'>
          <h1>Free trial session with a trainer</h1>
          <button onClick={handleScroll}>Detailed</button>
        </div>
        <div className='header_wrapper-img'>
          <img src={hero} alt="hero" />
        </div>
      </div>
    </header>
  )
}

export default Header