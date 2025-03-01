import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
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
       {user ? <Link to="/mybooks">My Books</Link>: <Link to="/login">Login/register</Link>}
        {user && <button onClick={()=>dispatch(logoutUser())}>Logout</button>}
       </div>
      </nav>
    </div>
  )
}

export default Navbar
