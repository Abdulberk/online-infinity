import React from 'react'
import style from './style.module.scss'
import Card from '../card'
import { CardProps } from '../card';
import { CardNames } from '../card';
import Table from '../table'

function Content() {


  const cards = [
    { image: "/courses.svg", sticks: "/courses-sticks.svg", type: "courses", count: 18, title: "Courses" },
    { image: "/views.svg", sticks: "views-sticks.svg", type: "views", count: 1597, title:"Views" },
    { image: "/members.svg", sticks: "members-sticks.svg", type: "members", count: 79, title :"Members" },
  ] as CardProps[]
  
  const cardList = cards.map((card, index) => (
    <Card key={index} image={card.image} sticks={card.sticks} type={card.type} count={card.count} title={card.title} />
  ));

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


      {cardList}
      </div>

      <Table />
      


    </div>
  )
}

export default Content