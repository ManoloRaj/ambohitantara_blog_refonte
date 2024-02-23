import React from "react"

import Image, { StaticImageData } from "next/image";

export interface articleInterface {
  id: number,
  poster: StaticImageData,
  title: string,
  description: string,
  author: string
}

export interface carouselArticlePropsInterface {
  article_list: Array<articleInterface> | null,
  handleClickItem: any | null,
  isDetail: boolean
}

export interface titlePropsInterface {
  title: string
}

const Legend: React.FC<titlePropsInterface> = ({
  title
}) => {
  return (
    <div className="legend">
      {title}
    </div>
  )
}

export const CarouselArticle: React.FC<carouselArticlePropsInterface> = ({
  article_list,
  handleClickItem,
  isDetail
}) => {
  return (
    <>
      {
        article_list !== null &&
        article_list.length > 0 &&
        <div className="carousel" id="scroll_view">
          {article_list.map((d, _index) => (
            <div key={_index} className="carousel_slide" onClick={() => isDetail && handleClickItem(d)}>
              <Image width="300" height="300" alt="" src={d.poster || ""} className="slide" id={`slide_${_index}`} />
              <Legend title={d.title} />
            </div>
          ))}
        </div>
      }
    </>
  );
};




