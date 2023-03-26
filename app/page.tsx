import Image from 'next/image'
import Navbar from '../components/navbar'
import style from '../style.module.scss'
import Content from '../components/content'
import Sidebar from '../components/sidebar'

export default function Home() {

  return (
     
    <div className = {style.container}>
      <Navbar />
      <Sidebar />
      <Content />
      


      </div>
  )
}
