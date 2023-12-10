import './navbar.css'
import { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md"; 

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav>
      <h4>
        <a href="/">
          GYM<span>24</span>
        </a>
      </h4>
      <ul> 
        <li>
          <a href='#advantages'>
            Advantages
          </a>
        </li>
        <li>
          <a href="#membership">
            Membership
          </a>
        </li>
        <li>
          <a href='#about'>
            About
          </a>
        </li>
        <li>
          <a href='#trainers'>
            Trainers
          </a>
        </li>
      </ul>
      <button onClick={() => setMenu(!menu)}>
        {menu ? <MdClose size={26} color='white' /> : <MdMenu size={26} color='white' />}
      </button>
      {menu && (
        <ul className='mobile_menu'> 
          <li>
            <a href='#advantages'>
              Advantages
            </a>
          </li>
          <li>
            <a href="#membership">
              Membership
            </a>
          </li>
          <li>
            <a href='#about'>
              About
            </a>
          </li>
          <li>
            <a href='#trainers'>
              Trainers
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar