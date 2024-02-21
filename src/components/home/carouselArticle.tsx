import React from "react"

import Image, { StaticImageData } from "next/image";

export interface articleInterface {
  id: number,
  image_url: StaticImageData,
  legend: string,
  description: string
}

export interface carouselArticlePropsInterface {
  article_list: Array<articleInterface>,
  handleClickItem: any
}

export interface legendPropsInterface {
  legend: string
}

const Legend: React.FC<legendPropsInterface> = ({
  legend
}) => {
  return (
    <div className="legend">
      {legend}
    </div>
  )
}

export const CarouselArticle: React.FC<carouselArticlePropsInterface> = ({
  article_list,
  handleClickItem
}) => {
  return (
    <div className="carousel" id="scroll_view">
      {article_list.map((d, _index) => (
        <div key={_index} className="carousel_slide" onClick={() => handleClickItem(d)}>
          <Image alt="" src={d.image_url} className="slide" id={`slide_${_index}`} />
          <Legend legend={d.legend} />
        </div>
      ))}
    </div>
  );
};




