import { Description, Illustration, Title } from "./home/title";

export default function Presentation() {
    return (
        <div className="w-full h-screen bg-[url('../assets/background.png')] bg-cover">
            <div className="p-20">
                <Title />
                <Description />
            </div>
            <Illustration />
        </div>

    )
}