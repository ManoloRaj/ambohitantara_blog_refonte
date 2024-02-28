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
                    Create in April 2023,
                    Ambohitantara is a Blog that
                    share history of Madagascar
                    especially in Imerina
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

