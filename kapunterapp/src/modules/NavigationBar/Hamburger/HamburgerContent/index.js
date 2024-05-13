import React from 'react'
import CreatId from "./HamConParts/CreateId"
import Bonus from "./HamConParts/Bonus"
import Rules from "./HamConParts/Rules"
import Terms from "./HamConParts/Terms"
import Offers from "./HamConParts/Offers"
import Notifications from "./HamConParts/Notifications"
import Help from "./HamConParts/Help"
// import { Link } from "react-router-dom"


function index() {
  return (
    <>
    <div className='Burger-Menu'>
    <div>Hamburger index Head</div>
    <ul>
        <li>Profile</li>
        <li>Withdrawala details</li>
        <li>Create ID</li>
        <li>Bonus</li>
        <li>Rules</li>
        <li>Terms</li>
        <li>Offers</li>
        <li>Notifications</li>
        <li>Help</li>
    </ul>
    <div>Hamburger index Footer</div>
    </div>
    </>
  )
}

export default index