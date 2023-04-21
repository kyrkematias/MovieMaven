import React from 'react'
import styles from "../assets/styles/err.module.css"
import robot from "../assets/images/5203299.jpg"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.err}>ERROR 404
      <img src={robot} alt="img err 404" className={styles.errimg}/>
      <Link to={"/"}><Button>Volver al inicio</Button></Link>
      
    </div>
  )
}

export default NotFound;