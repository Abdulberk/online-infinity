import React from 'react'
import style from './style.module.scss'
import Card from '../card'

function Content() {
  return (
    <div className = {style.content}>

      <div className = {style.dashboardTitleContainer}>

        <div className = {style.dashboardTitle}>
          Dashboard
        </div>

        <div className = {style.dashboardSubtitle}>
          Welcome to your dashboard
        </div>

      </div>

      <div className = {style.cardRowContainer}>


      <Card />
      <Card />
      <Card />

      </div>


    </div>
  )
}

export default Content