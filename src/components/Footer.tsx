import React from "react"
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <a href="https://mhxw.life/eth-dev-with-go/" target="__blank">
          用Go来做以太坊开发
        </a>
      </div>
      <div className={styles.row}>
        <a href="https://github.com/mhxw/solidity-by-example" target="__blank">
          源码
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/mhxw/solidity-by-example/blob/dev/LICENSE"
          target="__blank"
        >
          License
        </a>
      </div>
    </div>
  )
}

export default Footer
