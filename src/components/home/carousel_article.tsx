import React, { useEffect, useState } from "react"

import Image, { StaticImageData } from "next/image";
import { ImageUI } from "../image_ui";
import fleche from "../../assets/fleche.png";

export interface articleInterface {
  id: number,
  poster: StaticImageData,
  title: string,
  description: string,
  author: string,
  images: Array<{
    url: string
  }>
}

export interface carouselArticlePropsInterface {
  listData: Array<articleInterface> | Array<{ url: string }> | null,
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
  listData,
  handleClickItem,
  isDetail
}) => {
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollTop = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.max(0, prevIndex - 1);
      const targetElement = document.getElementById(`slide_${newIndex}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return newIndex;
    });
  };

  const handleScrollBottom = () => {
    if (listData) {
      setCurrentIndex((prevIndex) => {
        const newIndex = Math.min(listData.length - 1, prevIndex + 1);
        const targetElement = document.getElementById(`slide_${newIndex}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return newIndex;
      });
    }
  };

  useEffect(() => {
    setScrollContainer(document.getElementById('scroll_view'));
  }, [isDetail]);

  useEffect(() => {
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [isDetail, scrollContainer]);

  return (
    <>
      <div className="control">
        <ImageUI isLocal={true} src={fleche.src} width={170} height={fleche.height} alt="top" className="but" onClick={handleScrollTop} />
        <ImageUI isLocal={true} src={fleche.src} width={170} height={fleche.height} alt="bottom" style={{ transform: "rotate(180deg)" }} className="but" onClick={handleScrollBottom} />
      </div>
      {
        listData !== null &&
        listData.length > 0 &&
        <div className="carousel" id="scroll_view">
          {listData.map((d, _index) => (
            <div key={_index} className="carousel_slide" onClick={() => !isDetail && handleClickItem(d)} id={`slide_${_index}`} >
              {('images' in d) && d.images.length > 0 ? (
                <ImageUI isLocal={false} width={300} height={300} alt="" src={!isDetail ? d.images[0].url : ''} className="slide" />
              ) : (
                <ImageUI isLocal={false} width={300} height={300} alt="" src={('url' in d) ? d.url : ''} className="slide" />
              )}
              {!isDetail ? (<Legend title={('images' in d) ? d.title : ''} />) : null}
            </div>
          ))}
        </div>
      }
    </>
  );
};


