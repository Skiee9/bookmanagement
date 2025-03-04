import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import {logout} from '../redux/actions/authActions'
import { logoutUser } from '@/redux/actions.js/authActions'
// import { useDispatch, useSelector } from 'react-redux'


const Navbar = () => {
    const { user} = useSelector((state) => state.auth.user);
    const  dispatch= useDispatch();
  return (
    <div>
      <nav>
       <h2>My Library</h2>
       <div>
        <Link to="/">Home</Link>
      {user && <Link to="/my-books">My Books</Link>}
      {!user ? (
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
      ):(
        <button onClick={()=>dispatch(logout())}>Logout</button>
      )}
       </div>
      </nav>
    </div>
  )
}

export default Navbar
