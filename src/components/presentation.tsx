"use client";
import { CarouselArticle, articleInterface } from "./home/carousel_article";
import { Description, Illustration, Title } from "./home/title";
import "../assets/styles/1_pages/presentation.css";
import fleche from "../assets/fleche.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { article_data } from "../services/article_data";
import { AuthorDetail, DescriptionDetail, TitleDetail } from "./detail/title_detail";
import { TransitionFunction } from "./detail/transition";
import { getArticleList } from "@/services/article.services";
import { ImageUI } from "./image_ui";


export default function Presentation() {

    const [detailView, setDetailView] = useState<{
        activate: boolean,
        title: string,
        description: string,
        author: string,
        images: Array<{ url: string }> | null
    }>({
        activate: false,
        title: "",
        description: "",
        author: "",
        images: null
    });


    const [articleList, setArticleList] = useState<Array<articleInterface> | null>(null);

    const carouselRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        getArticleList()
            .then((articles) => {
                setArticleList(articles);
            })
            .catch((error) => {
                console.error('Error fetching article list:', error);
            });
    }, [detailView.activate])



    const handleClickItem = (d: articleInterface) => {
        setDetailView({
            activate: !detailView.activate,
            title: d.title,
            description: d.description,
            author: d.author,
            images: d.images
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
                            <AuthorDetail author={detailView.author} />
                        </div>
                    )}

                </div>
                <div className="right">
                    <div className="control">
                        {detailView.activate &&
                            <ImageUI isLocal={true} src={fleche.src} width={170} height={fleche.height} alt="bottom" style={{ transform: "rotate(-90deg) translateX(-500px)" }} className="but"
                                onClick={() => setDetailView((prev_value) => ({ ...prev_value, activate: false }))} />
                        }
                    </div>
                    <div ref={carouselRef}>
                        {!detailView.activate ? (
                            <CarouselArticle listData={articleList} handleClickItem={handleClickItem} isDetail={false} />
                        ) : (
                            <CarouselArticle listData={detailView.images} handleClickItem={handleClickItem} isDetail={true} />
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

