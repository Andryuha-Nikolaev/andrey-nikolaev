import React from "react"
import s from "./CopyIcon.module.scss"

const CopyIcon = () => {
  return (
    <span className={s["wrap"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M15.75 5.625V15.75H5.625V5.625H15.75ZM15.75 4.5H5.625C5.32663 4.5 5.04048 4.61853 4.82951 4.82951C4.61853 5.04048 4.5 5.32663 4.5 5.625V15.75C4.5 16.0484 4.61853 16.3345 4.82951 16.5455C5.04048 16.7565 5.32663 16.875 5.625 16.875H15.75C16.0484 16.875 16.3345 16.7565 16.5455 16.5455C16.7565 16.3345 16.875 16.0484 16.875 15.75V5.625C16.875 5.32663 16.7565 5.04048 16.5455 4.82951C16.3345 4.61853 16.0484 4.5 15.75 4.5Z"
          fill="#B2B6B9"
        />
        <path
          d="M2.25 10.125H1.125V2.25C1.125 1.95163 1.24353 1.66548 1.4545 1.4545C1.66548 1.24353 1.95163 1.125 2.25 1.125H10.125V2.25H2.25V10.125Z"
          fill="#B2B6B9"
        />
      </svg>
    </span>
  )
}

export default CopyIcon
