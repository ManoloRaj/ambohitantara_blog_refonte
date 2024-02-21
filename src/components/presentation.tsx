"use client";
import { CarouselArticle, articleInterface } from "./home/carouselArticle";
import { Description, Illustration, Title } from "./home/title";
import "../assets/styles/1_pages/presentation.css";
import fleche from "../assets/fleche.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { article_data } from "../services/article_data";
import { DescriptionDetail, TitleDetail } from "./detail/titleDetail";
import { TransitionFunction } from "./detail/transition";


export default function Presentation() {
    const [detailView, setDetailView] = useState({
        activate: false,
        title: "",
        description: ""
    });

    const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setScrollContainer(document.getElementById('scroll_view'));
    }, []);

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
        setCurrentIndex((prevIndex) => {
            const newIndex = Math.min(article_data.length - 1, prevIndex + 1);
            const targetElement = document.getElementById(`slide_${newIndex}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return newIndex;
        });
    };

    const handleClickItem = (d: articleInterface) => {
        setDetailView({
            activate: !detailView.activate,
            title: d.legend,
            description: d.description
        })
    }

    return (
        <>
            <TransitionFunction isTransit={detailView.activate} />
            <div className="presentation">
                <div className="left">
                    {!detailView.activate ? (
                        <>
                            <div className="title">
                                <Title />
                                <Description />
                            </div>
                            <Illustration />
                        </>

                    ) : (
                        <div className="detail">
                            <TitleDetail title={detailView.title} />
                            <DescriptionDetail description={detailView.description} />
                        </div>
                    )}

                </div>
                <div className="right">
                    <div className="control">
                        <Image
                            src={fleche}
                            width={170}
                            alt="top"
                            className="but"
                            onClick={handleScrollTop}
                        />
                        <Image
                            src={fleche}
                            width={170}
                            alt="bottom"
                            style={{ transform: "rotate(180deg)" }}
                            className="but"
                            onClick={handleScrollBottom}
                        />
                    </div>
                    <div ref={carouselRef}>
                        <CarouselArticle article_list={article_data} handleClickItem={handleClickItem} />
                    </div>
                </div>
            </div>

        </>
    )
}

