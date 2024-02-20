import React from "react"
import illustration_1 from "../../assets/illustration_1.jpg"
import illustration_2 from "../../assets/illustration_2.jpg"
import illustration_3 from "../../assets/illustration_3.jpg"
import Image from "next/image";

export function CarouselArticle() {

  return (
    <>
      <div className="carousel">
        <div className="carousel_slide">
          <Image
            alt=""
            src={illustration_3}
            className="slide"
          />
        </div>
        <div className="carousel_slide">
          <Image
            alt=""
            src={illustration_2}
            className="slide"
          />
        </div>
        <div className="carousel_slide">
          <Image
            alt=""
            src={illustration_1}
            className="slide"
          />
        </div>
      </div>
    </>

  )
}
