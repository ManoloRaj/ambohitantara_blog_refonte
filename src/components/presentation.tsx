"use client";
import { CarouselArticle } from "./home/carouselArticle";
import { Description, Illustration, Title } from "./home/title";
import "../assets/styles/1_pages/presentation.css";
import fleche from "../assets/fleche.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Presentation() {
    const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setScrollContainer(document.getElementById('scroll_view'));
    }, []);

    const handleScrollTop = () => {

        setCurrentIndex((prevIndex) => prevIndex - 1);
        const targetElement = document.getElementById(`slide_${currentIndex}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleScrollBottom = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        const targetElement = document.getElementById(`slide_${currentIndex + 1}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        }
    };

    return (
        <div className="presentation">
            <div className="left">
                <div className="title">
                    <Title />
                    <Description />
                </div>
                <Illustration />
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
                    <CarouselArticle />
                </div>
            </div>

        </div>
    )
}