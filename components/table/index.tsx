import React from 'react'
import style from './style.module.scss'

function Table() {


  const courses = [
    { title: "Course 1", duration: "1h 30m", date: "12/12/2020", price: "$100", author: "John Doeeeeee", status: "rejected" },
    { title: "Course 2", duration: "1h 30m", date: "12/12/2020", price: "$100", author: "John Doe", status: "rejected" },
    { title: "Course 3", duration: "1h 30m", date: "12/12/2020", price: "$100", author: "John Doe", status: "pending" },
    { title: "Course 4", duration: "1h 30m", date: "12/12/2020", price: "$100", author: "John Doe", status: "approved" },
    { title: "Course 5", duration: "1h 30m", date: "12/12/2020", price: "$100", author: "John Doe", status: "approved" },
  ]



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
          <div className={style.tableBody__row}>

               
             <div className = {style.coursePic} >
              <img src="/react.png" width={48} height={48} alt="none" />
              
              </div>
 


            <div className={style.tableBody__row__item}>
              <span>{courses[0].title}</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{courses[0].duration}</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{courses[0].date}</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{courses[0].price}</span>
            </div>

            <div className={style.tableBody__row__item}>
              <span>{courses[0].author}</span>
            </div>

            <div className={style.tableBody__row__item}>
            <img src="/rejected.svg" width={16} height={16} alt="none" />
              <span>
               
                {courses[0].status}
                </span>


            </div>

            <div className={style.buttonsContainer}>
                  <img src="/edit.svg" width={32} height={32} alt="none" />
                  <img src="/delete.svg" width={32} height={32} alt="none" />
                </div>
            



          </div>
        </div>
      </div>
    </div>
  );
}

export default Table