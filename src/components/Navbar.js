import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const TransitionNav = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', TransitionNav)

        return () => {
            window.removeEventListener('scroll', TransitionNav)
        }
    }, [])

    return (
        <>
            {/* <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/course" class="list">
            Courses
          </Link>
          <Link to="/live" class="list">
            Live course
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
        </ul> */}

            <div className={`nav ${show && ' nav-black'}`}>
                <div className="nav-content">
                    <img className='nav-logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" />

                    <img className='nav-avatar'
                        onClick={() => navigate("/profile")}
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                </div>
            </div>
        </>
    )
}
