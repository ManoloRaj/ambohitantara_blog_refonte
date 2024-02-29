import Image from "next/image"
import andrianampoinimerina from "../../assets/andrianampoinimerina.webp"

export function Title() {
    return (
        <div className="label">
            Ambohitantara <br />
            History Blog
        </div>
    )
}

export function Description() {
    return (
        <div className="legend_title">
            <div className="year">
                2023
            </div>
            <div className="little_description">
                <div className="text">
                    Inaugurated in the vibrant month of April in the year 2023, Ambohitantara emerges as a thoughtfully curated and engaging blog, passionately committed to the dissemination of historical knowledge pertaining to the captivating island of Madagascar. Its primary emphasis lies in unraveling the intricate threads of history, with a specialized focus on the culturally significant and historically resonant landscapes of Imerina, providing readers with an immersive exploration of the island's past, fostering a deeper understanding and appreciation for Madagascar's rich heritage.
                </div>

                <div className="little_label">
                    HOME
                </div>
            </div>
        </div>
    )
}

export function Illustration() {
    return (
        <div className="illustration">
            <Image
                src={andrianampoinimerina}
                alt="Picture of the author"
                className="image_illustration"
            />
            <div className="description">
                <div className="title_description">
                    <strong>Andrianampoinimerina Imboasalama</strong>
                </div>
                <div className="content">
                    Great King of Madagascar <br />
                    <div className="year">1787-1810</div>
                </div>
            </div>
        </div>

    )
}

