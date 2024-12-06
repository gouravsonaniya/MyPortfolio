import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
        {mywork_data.map((work, index)=> {
             return    <div key={index} className="work-item">
                    <a href={work.w_link} target='_blank'>
                     <img src={work.w_img} target={work.w_link}alt={work.w_name} />
                     </a>
                     <h3>{work.w_title}</h3>
                     <p>{work.w_desc}</p>
                     <p className="work-tech">{work.w_tech}</p>
                     </div>
        })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork