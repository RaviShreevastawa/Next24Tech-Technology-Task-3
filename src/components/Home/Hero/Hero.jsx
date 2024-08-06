import React from 'react'
import "./Hero.css"
import Title from '../../common/title/Title'

const Hero = () => {
  return (
     <>
         <section className='hero'>
            <div className='container'>
               <div className="row">
                  <Title subtitle='WELCOME TO ACADEMIA' title='BEST ONLINE EDUCATION'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae ratione sint labore quam voluptatibus eveniet asperiores numquam. Ex consequuntur quos optio quaerat voluptatum quas alias, maiores eos quia illum.</p>
               <div className="button">
                  <button className='primary-btn'>
                     GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                  <button>
                     VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
               </div>
               </div>
            </div>
         </section>
         <div className="margin"></div>
     </>
  )
}

export default Hero
