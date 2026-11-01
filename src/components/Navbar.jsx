import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <span>Mind to Move    </span>
      <NavLink to="/">About </NavLink>
      <NavLink to="/demo">Demo </NavLink>
      <NavLink to="/future">Future </NavLink>
      <NavLink to="/team">Team</NavLink>
    </nav>
  )
}