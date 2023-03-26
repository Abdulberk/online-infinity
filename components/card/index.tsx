import React from 'react'
import style from './style.module.scss'


export type CardNames = 'views' | 'members' | 'courses'

export interface CardProps {
  image: string
  sticks?: string
  type?: CardNames
  count: number
  title: string

}


function Card({image,sticks, type, count, title} : CardProps) {
  return (
    <div className = {style.card}>
        
        <div className = {style.card__container} >

        <div className = {style.firstRowContainer} >

        <div className = {style.textContainer } >

        <div className = {style.title} >
          {title}

          </div>
          <div className = {style.countText} >
          {count}
            </div>

          </div>


          <div className = {style.icon} >
          <img src = {image} width = {56} height = {56} alt = "none" />

          </div>

          </div>


          <div className = {style.secondRowContainer} >

        <img src = {sticks} width = {161} height = {90} alt = "none" />



            </div>

        </div>



    </div>
  )
}

export default Card