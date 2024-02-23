import Image from "next/image";
import illustration_1 from "../../assets/illustration_1.jpg";
import illustration_2 from "../../assets/illustration_2.jpg";
import illustration_3 from "../../assets/illustration_3.jpg";

interface itemArticleInterface {
    active: boolean
}
export function ArticleList() {
    return (
        <div className="list_review">
            <div className="title">
                Existing articles
            </div>
            <div className="body">
                <ItemArticle active={false} />
                <ItemArticle active={false} />
                <ItemArticle active={true} />
                <ItemArticle active={false} />
                <ItemArticle active={false} />
                <ItemArticle active={false} />
                <ItemArticle active={false} />
            </div>
        </div>
    )
}

function ItemArticle({
    active
}: itemArticleInterface) {
    return (
        <div className={`item ${active && 'active'}`}>
            <div className="t">
                History of Madagascar et de la reine
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