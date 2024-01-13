import * as React from "react"
import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel"
import andrianampoinimerina from "../../assets/andrianampoinimerina.webp"
import Image from "next/image";

export function CarouselArticle() {
  return (
    <div className="w-full h-full">
      <div className="mr-auto ml-auto mt-[10%] w-4/5 overflow-hidden">
        <Image
          alt=""
          src={andrianampoinimerina}
          className="w-full "
        />
      </div>
    </div>

  )
}
