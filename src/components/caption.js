import React from "react"

import styles from "./caption.module.scss"

const Caption = props => {
  return (
    <h1 className={!props.classes ? styles.caption : props.classes}>
      {props.children}
    </h1>
  )
}

export default Caption
