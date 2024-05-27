import React from 'react'
import "./Banner.css"
import BannerImage from "./Banner-Image/BannerImg"
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


function Banner() {
  return (
    <div className='Banner-Main-Container'>
      <BannerImage/>
    </div>
  )
}

export default Banner