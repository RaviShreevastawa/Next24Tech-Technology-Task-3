import React from "react"
import "./courses.css"
import { online } from "../../dummydata"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
        <h4 className=" text-yellow-500 text-2xl">COURSES</h4>
        <h4 className=" text-4xl pb-5 pt-5">Browse Our Online Courses</h4>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses