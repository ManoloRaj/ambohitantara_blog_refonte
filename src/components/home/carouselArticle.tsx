import React from "react"
import { article_data } from "../../services/article_data";
import Image from "next/image";


export const CarouselArticle = () => {
  return (
    <div className="carousel" id="scroll_view">
      {article_data.map((d, _index) => (
          <div className="carousel_slide">
            <Image alt="" src={d.image_url} className="slide" id={`slide_${_index}`} />
          </div>
        ))}
    </div>
  );
};


