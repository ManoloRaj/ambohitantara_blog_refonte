import { CarouselArticle } from "./home/carouselArticle";
import { Description, Illustration, Title } from "./home/title";
import "../assets/styles/1_pages/presentation.css";

export default function Presentation() {
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
                <CarouselArticle />
            </div>

        </div>
    )
}