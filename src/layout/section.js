import React from "react"
import { Container } from "react-bootstrap"

import styles from "./section.module.scss"

const Section = props => {
  return (
    <section
      className={styles.section}
      style={{
        padding: `${props.padding} 0`,
        backgroundColor: props.background,
        backgroundImage: `url(${props.image})`,
      }}
    >
      <Container fluid>
        <div className={styles.compact}>{props.children}</div>
      </Container>
    </section>
  )
}

export default Section
