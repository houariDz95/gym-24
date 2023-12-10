import about from '../../assets/about/photo_01.png';
import './about.css'

const About = () => {
  return (
    <section className="about">
      <div className="about_wrapper">
        <div className='text_wrapper'>
          <h2 className="heading_text">About us</h2>
          <p>
            Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym.
            <br /> <br />
            With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it's building strength, increasing endurance, or losing weight. 
            <br /> <br />
            Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals. 
          </p>
        </div>
        <div className='img_wrapper'>
          <img src={about} alt='about' />
        </div>
      </div>
    </section>
  )
}

export default About