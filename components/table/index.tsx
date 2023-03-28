import React from 'react'
import style from './style.module.scss'

function Table() {

 type Status = "approved" | "pending" | "rejected";

  interface CourseProps {
    title: string;
    duration: number
    date: string;
    price: number
    coursePic: string;
    status: Status;
    author: string;
  }


  const courses = [
    { title: "React", duration: 145, date: "12/12/2020", price: 100, author: "John Doe", status: "rejected",coursePic:"/react.png" },
    { title: "Node", duration: 5, date: "12/12/2020", price: 100, author: "John Doe", status: "rejected",coursePic:"/react.png" },
    { title: "javascript", duration: 80, date: "12/12/2020", price: 100, author: "John Doe", status: "pending",coursePic:"/react.png" },
    { title: "Java", duration: 90, date: "12/12/2020", price: 100, author: "John Doe", status: "approved",coursePic:"/react.png" },
    { title: "Photoshop", duration: 250, date: "12/12/2020", price: 100, author: "John Doe", status: "approved",coursePic:"/react.png" },
  ] as CourseProps[]

  return (
    <div className={style.table}>
      <div className={style.table__container}>
        <div className={style.titleRowContainer}>
          <div className={style.leftSide}></div>

          <div className={style.rightSide}>
            <div className={style.title}>Course Management</div>

            <div className={style.buttonContainer}>
              <span>See all</span>
              <img src="/arrowright2.svg" width={24} height={24} alt="none" />
            </div>
          </div>
        </div>

        <div className={style.tableHeader}>
          {["Title", "Duration", "Date", "Price", "Author", "Status"].map(
            (item, index) => {
              return (
                <div className={style.tableHeader__item} key={index}>
                  {item}
                </div>
              );
            }
          )}
        </div>

        <span className={style.horizontalDivider}></span>

        <div className={style.tableBody}>

          {
            courses.map((item, index) => (

              <div className={style.tableBody__row} key={index}>
            
             <div className = {style.coursePic} >
              <img src={
                item.coursePic ? item.coursePic : "/react.png"
              } width={48} height={48} alt="none" />
              
              </div>
 
            <div className={style.tableBody__row__item}>
              <span>{
                item.title

                }</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{
                item.duration
                }</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{
                item.date
                }</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{
                item.price
                }</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{
                item.author
                }</span>
            </div>

            <div className={style.tableBody__row__item}>
            <img src={
                  item.status === "approved" ? "/approved.svg" : item.status === "pending" ? "/pending.svg" : "/rejected.svg"
            } width={16} height={16} alt="none" />
              <span>
               
                {
                  item.status
                }
                </span>


            </div>

            <div className={style.buttonsContainer}>
                  <img src="/edit.svg" width={32} height={32} alt="none" />
                  <img src="/delete.svg" width={32} height={32} alt="none" />
                </div>
            



          </div>
              

            
            
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default Table