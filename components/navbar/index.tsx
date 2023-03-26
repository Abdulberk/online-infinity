import React from 'react'
import style from './style.module.scss'

function Navbar() {
  return (
    <div className = {style.navbar}>
       <div className = {style.navbar__left}>
    burası sol
       </div>

  
       <div className = {style.navbar__right} >

<div className = {style.navbar__right__container} >
  <div className = {style.navbar__right__container__item} >
    <img src = "/bell.svg" width = {24} height = {24} alt = "none" />

    </div>
    <div className = {style.navbar__right__container__item} >
    
    <div className = {style.username}>
      Berk Kaya

    </div>
    <div className = {style.role}>
      Admin

    </div>

    </div>
    <div className = {style.navbar__right__container__item} >
    <img src = "/bell.svg" width = {24} height = {24} alt = "none" />

    </div>

</div>

  

       </div>

    </div>
  )
}

export default Navbar