import React from 'react'
import style from '../../styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <div>
      <div className={`${style.footer_div} `}>
        <p className={`${style.footer_text} `}>copyright © 2022 inventam, All rights</p>
      </div>
    </div>
  )
}

export default Footer