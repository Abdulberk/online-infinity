import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className = {style.sidebar}>
        
        <div className  = {style.sidebar__logoContainer}>
            <Image src = "/online.svg" width = {235} height = {34} alt = "none" />

        </div>
        <div className={style.sidebar__menu}>
  <ul>
    <li>

      <a href="/dashboard">
        <div className={style.menu__item}>
          <img src="/dashboard.svg" width={24} height={24} alt="none" />
          <div>Dashboard</div>
        </div>

      </a>
     
    </li>
    <li>
      <a href="/users">
        <div className={style.menu__item}>
          <img src="/users.svg" width={24} height={24} alt="none" />
          <div>Users</div>
        </div>
      </a>
    </li>

    <li>
      <a href="/settings">
        <div className={style.menu__item}>
          <img src="/settings.svg" width={24} height={24} alt="none" />
          <div>Settings</div>
        </div>
      </a>
    </li>
    <li>
      <a href="/report">
        <div className={style.menu__item}>
          <img src="/report.svg" width={24} height={24} alt="none" />
          <div>Report</div>
        </div>
      </a>
    </li>
    <li>
      <a href="/support">
        <div className={style.menu__item}>
          <img src="/support.svg" width={24} height={24} alt="none" />
          <div>Support</div>
        </div>
      </a>
    </li>

  </ul>

</div>

<div className = {style.sidebar__footer}>

<div className = {style.sidebar__footer__item}>
    <img src = "/logout.svg" width = {24} height = {24} alt = "none" />
    <div>Logout</div>

    </div>

  </div>


    </div>
  )
}

export default Sidebar