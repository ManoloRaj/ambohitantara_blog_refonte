import Image from "next/image"
import andrianampoinimerina from "../../assets/andrianampoinimerina.webp"
export function Title() {
    return (
        <div className="w-min font-bold text-6xl">
            Ambohitantara <br />
            History Blog
        </div>
    )
}
export function Description() {
    return (
        <div className="grid grid-cols-2 w-3/4 mt-20 text-zinc-300 ">
            <div>
                2023
            </div>
            <div>
                <div className="text-gray-400">
                    Create in April 2023,
                    Ambohitantara is a Blog that
                    share history of Madagascar
                    especially in Imerina
                </div>

                <div className="text-2xl pt-10">
                    HOME
                </div>
            </div>
        </div>
    )
}

export function Illustration() {
    return (
        <div className="w-1/3 grid grid-cols-2 ">
            <Image
                src={andrianampoinimerina}
                width={200}
                alt="Picture of the author"
                className="rounded-r-lg"
            />
            <div className="pl-10">
                <div className="font-bold ">Andrianampoinimerina Imboasalama</div>
                <div className="text-gray-400">
                    Great King of Madagascar <br/>1787-1810
                </div>
            </div>
        </div>

    )
}

