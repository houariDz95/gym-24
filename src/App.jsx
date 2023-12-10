import './App.css'
import Header from './components/header/Header'
import Feedback from './components/feedback/Feedback'
import Membership from './components/membership/Membership'
import About from './components/about/About'
import Trainers from './components/trainers/Trainers'
import Footer from './components/footer/Footer'

function App() {
  return (
    <main>
      <div className='shadow_01' />
      <Header />
      <Feedback />
      <Membership />
      <About />
      <Trainers />
      <Footer />
      <div className='shadow_02' />
    </main>
  )
}

export default App
