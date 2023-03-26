import React from 'react'
import style from './style.module.scss'

function Card() {
  return (
    <div className = {style.card}>
        
        <div className = {style.card__container} >

        <div className = {style.firstRowContainer} >

        <div className = {style.textContainer } >

        <div className = {style.title} >
          Total Users

          </div>
          <div className = {style.countText} >
          18
            </div>

          </div>


          <div className = {style.icon} >
          <img src = "/courses.svg" width = {56} height = {56} alt = "none" />

          </div>

          </div>


          <div className = {style.secondRowContainer} >

        <img src = "/courses-sticks.svg" width = {161} height = {90} alt = "none" />



            </div>

        </div>



    </div>
  )
}

export default Card