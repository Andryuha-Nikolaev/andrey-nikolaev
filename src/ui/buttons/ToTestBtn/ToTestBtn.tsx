import React from "react"
import RootButton from "../RootButton/RootButton"

const ToTestBtn = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 100,
        backgroundColor: "#4c4c4c",
        zIndex: 105,
        color: "white",
      }}
    >
      <RootButton link="/ui" role="next-link" styleVariant="2">
        UI
      </RootButton>
    </div>
  )
}

export default ToTestBtn
