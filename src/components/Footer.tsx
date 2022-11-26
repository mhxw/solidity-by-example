import React from "react"
import styles from "./Footer.module.css"
import sce from "./sce.png"
import youTube from "./youtube.png"
import telegram from "./telegram.png"
import discord from "./discord.png"

// Khan Academy
const ADDRESS = "0x95a647B3d8a3F11176BAdB799b9499C671fa243a"

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
