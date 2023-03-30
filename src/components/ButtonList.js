import React from 'react'
import Button from './Button'


const ButtonList = () => {
  return (
    <div className='flex'>
     <Button name="All"/>
     <Button name="Gaming"/>
     <Button name="Songs"/>
     <Button name= "Live"/>
     <Button name= "Socer"/>
     <Button name= "Movies"/>
     <Button name= "News"/>
     <Button name= "Sports"/>
     <Button name= "TV-Shows"/>
    </div>
  )
}

export default ButtonList
