import React from 'react'
import './HeaderOption.css'
import Gravatar from 'react-gravatar'

function HeaderOption({avatar,Icon, title}) { 

  return (
    <div className='headerOption'>
     {Icon && <Icon className
     ="headerOption_icon" />}
     {avatar && 
     <Gravatar className="headerOption_icon" email={avatar} />
     }
     <h3 className="headerOption_title"> {title}</h3>
      </div>
    
    
  )
}

export default HeaderOption