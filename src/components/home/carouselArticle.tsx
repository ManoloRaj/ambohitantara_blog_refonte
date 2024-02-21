import React from "react"

import Image, { StaticImageData } from "next/image";

export interface articlePropsInterface {
  article_list: Array<{
    id: number,
    image_url: StaticImageData
  }>
}
export const CarouselArticle: React.FC<articlePropsInterface> = ({ article_list }) => {
  return (
    <div className="carousel" id="scroll_view">
      {article_list.map((d, _index) => (
        <div key={_index} className="carousel_slide">
          <Image alt="" src={d.image_url} className="slide" id={`slide_${_index}`} />
        </div>
      ))}
    </div>
  );
};


