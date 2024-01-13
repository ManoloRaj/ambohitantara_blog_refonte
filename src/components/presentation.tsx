import { CarouselArticle } from "./home/carouselArticle";
import { Description, Illustration, Title } from "./home/title";

export default function Presentation() {
    return (
        <div className="w-full h-screen bg-[url('../assets/background.png')] bg-cover grid grid-cols-2">
            <div className="">
                <div className="p-20">
                    <Title />
                    <Description />
                </div>
                <Illustration />
            </div>
            <div className="">
                <CarouselArticle />
            </div>

        </div>

    )
}