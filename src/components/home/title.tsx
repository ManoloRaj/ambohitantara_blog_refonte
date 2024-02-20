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
            <div>
                2023
            </div>
            <div>
                <div className="">
                    Create in April 2023,
                    Ambohitantara is a Blog that
                    share history of Madagascar
                    especially in Imerina
                </div>

                <div className="">
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
                width={200}
                alt="Picture of the author"
                className="image_illustration"
            />
            <div className="">
                <div className="">
                    <strong>Andrianampoinimerina Imboasalama</strong>
                </div>
                <div className="">
                    Great King of Madagascar <br />1787-1810
                </div>
            </div>
        </div>

    )
}

