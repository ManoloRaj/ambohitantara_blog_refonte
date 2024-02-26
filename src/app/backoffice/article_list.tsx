import Image from "next/image";
import illustration_1 from "../../assets/illustration_1.jpg";
import illustration_2 from "../../assets/illustration_2.jpg";
import illustration_3 from "../../assets/illustration_3.jpg";
import { useEffect, useState } from "react";
import { getArticleList } from "@/services/article.services";
import { articleInterface } from "@/components/home/carousel_article";

interface itemArticleInterface {
    active: boolean,
    title: string
}
export function ArticleList() {
    const [articleList, setArticleList] = useState<Array<articleInterface> | null>(null);

    useEffect(() => {
        getArticleList()
            .then((articles) => {
                setArticleList(articles);
            })
            .catch((error) => {
                console.error('Error fetching article list:', error);
            });
    }, [])

    return (
        <div className="list_review">
            <div className="title">
                Existing articles
            </div>
            {
                articleList !== null &&
                articleList.length > 0 &&
                <div className="body">
                    {articleList.map((a, _index) => (
                        <ItemArticle key={_index} title={a.title} active={false} />
                    ))}
                </div>
            }
        </div>
    )
}

function ItemArticle({
    active,
    title
}: itemArticleInterface) {
    return (
        <div className={`item ${active && 'active'}`}>
            <div className="t">
                {title}
            </div>
            <ImageExtract />
        </div>
    )
}
function ImageExtract() {
    return (
        <div className="image_extract">
            <div className="image_container">
                <Image alt="" src={illustration_1} />
            </div>
            <div className="image_container">
                <Image alt="" src={illustration_2} />
            </div>
            <div className="image_container">
                <Image alt="" src={illustration_3} />
            </div>
            <div className="image_container">
                <Image alt="" src={illustration_1} />
            </div>
            <div className="image_container">
                <Image alt="" src={illustration_2} />
            </div>
        </div>
    )
}