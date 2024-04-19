"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselMolecureProps } from "../types/carouselType";

export default function CarouselMolecure(props: CarouselMolecureProps) {
  return (
    <div className="w-full h-full">
      <Carousel
        renderIndicator={props.renderIndicator}
        className="h-fit"
        verticalSwipe="natural"
        swipeScrollTolerance={50}
        preventMovementUntilSwipeScrollTolerance
        autoPlay
        emulateTouch
        swipeable
        showThumbs={false}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        stopOnHover
      >
        {props.children}
      </Carousel>
    </div>
  );
}
