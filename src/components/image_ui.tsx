import supabase from "@/lib/supabaseClient";
import supabaseLoader from "@/services/supabase-image-loader";
import Image from "next/image";

export function ImageUI({
    src,
    isLocal,
    width,
    height,
    alt,
    className,
    onClick,
    style,
    id,
    ...restProps
}: {
    src: string,
    isLocal: boolean,
    width: number,
    height: number,
    alt: string,
    className: string,
    onClick?: any,
    style?: any,
    id?: string,
    [key: string]: any;
}) {
    return (
        <Image
            src={isLocal ? src : supabaseLoader(src)}
            loader={() => isLocal ? src : supabaseLoader(src)}
            width={width}
            height={height}
            alt={alt}
            className={className}
            onClick={onClick}
            style={style}
            id={id}
            {...restProps}
        />
    )
}