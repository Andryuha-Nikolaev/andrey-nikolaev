import React from "react"
import s from "./CloseIcon.module.scss"
import classNames from "classnames"

type CloseIconProps = {
  color: string
  strokeColor?: string
  form: "round" | "rect"
}

const CloseIcon = ({
  color,
  strokeColor = "transparent",
  form,
}: CloseIconProps) => {
  return (
    <div className={classNames(s["wrapper"], s[strokeColor])}>
      {form === "rect" && (
        <svg
          className={s["icon"]}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
        >
          <g transform="translate(-37.12,-37.12) scale(1.29,1.29)">
            <g
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "none",
                strokeWidth: "1",
                strokeLinecap: "butt",
                strokeMiterlimit: "10",
                strokeDasharray: "",
                strokeDashoffset: "0",
                mixBlendMode: "normal",
              }}
            >
              <path
                className={s["stroke"]}
                transform="scale(5.12,5.12)"
                d="M25,23.5625l17.28125,-17.28125l1.4375,1.4375l-17.28125,17.28125l17.28125,17.28125l-1.4375,1.4375l-17.28125,-17.28125l-17.28125,17.28125l-1.4375,-1.4375l17.28125,-17.28125l-17.28125,-17.28125l1.4375,-1.4375z"
                id="strokeMainSVG"
                fill={strokeColor}
                stroke={strokeColor}
                strokeLinejoin="round"
              ></path>
              <g
                className={s["line"]}
                transform="scale(5.12,5.12)"
                fill={color}
                stroke="none"
                strokeLinejoin="miter"
              >
                <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
              </g>
            </g>
          </g>
        </svg>
      )}
      {form === "round" && (
        <svg
          className={s["icon"]}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
        >
          <g transform="translate(-87.04,-87.04) scale(1.68,1.68)">
            <g
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "none",
                strokeWidth: "1",
                strokeLinecap: "butt",
                strokeMiterlimit: "10",
                strokeDasharray: "",
                strokeDashoffset: "0",
                mixBlendMode: "normal",
              }}
            >
              <path
                className={s["stroke"]}
                transform="scale(4,4)"
                d="M17.41406,14.58594l14.58594,14.58594l14.58594,-14.58594c0.781,-0.781 2.04712,-0.781 2.82812,0c0.781,0.781 0.781,2.04712 0,2.82812l-14.58594,14.58594l14.58594,14.58594c0.781,0.781 0.781,2.04712 0,2.82812c-0.781,0.781 -2.04712,0.781 -2.82812,0l-14.58594,-14.58594l-14.58594,14.58594c-0.391,0.391 -0.90206,0.58594 -1.41406,0.58594c-0.512,0 -1.02306,-0.19494 -1.41406,-0.58594c-0.781,-0.781 -0.781,-2.04712 0,-2.82812l14.58594,-14.58594l-14.58594,-14.58594c-0.781,-0.781 -0.781,-2.04713 0,-2.82812c0.391,-0.391 0.90206,-0.58594 1.41406,-0.58594c0.512,0 1.02306,0.19494 1.41406,0.58594z"
                id="strokeMainSVG"
                fill={strokeColor}
                stroke={strokeColor}
                strokeLinejoin="round"
              ></path>
              <g
                className={s["line"]}
                transform="scale(4,4)"
                fill={color}
                stroke="none"
                strokeLinejoin="miter"
              >
                <path d="M16,14c-0.512,0 -1.02306,0.19494 -1.41406,0.58594c-0.781,0.781 -0.781,2.04712 0,2.82812l14.58594,14.58594l-14.58594,14.58594c-0.781,0.781 -0.781,2.04713 0,2.82812c0.391,0.391 0.90206,0.58594 1.41406,0.58594c0.512,0 1.02306,-0.19494 1.41406,-0.58594l14.58594,-14.58594l14.58594,14.58594c0.781,0.781 2.04713,0.781 2.82812,0c0.781,-0.781 0.781,-2.04713 0,-2.82812l-14.58594,-14.58594l14.58594,-14.58594c0.781,-0.781 0.781,-2.04712 0,-2.82812c-0.781,-0.781 -2.04713,-0.781 -2.82812,0l-14.58594,14.58594l-14.58594,-14.58594c-0.391,-0.391 -0.90206,-0.58594 -1.41406,-0.58594z"></path>
              </g>
            </g>
          </g>
        </svg>
      )}
    </div>
  )
}

export default CloseIcon
