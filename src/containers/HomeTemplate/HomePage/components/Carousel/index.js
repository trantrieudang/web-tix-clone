import React, { useState } from "react";
import imgCarousel01 from "../../../../../assets/images/carousel01.png";
import imgCarousel02 from "../../../../../assets/images/carousel02.jpg";
import imgCarousel03 from "../../../../../assets/images/carousel03.jpg";
import imgCarousel04 from "../../../../../assets/images/carousel04.jpg";
import imgCarousel05 from "../../../../../assets/images/carousel05.jpg";

import playIcon from "../../../../../assets/images/play-video.png";
import { makeStyles } from "@material-ui/core/styles";
import ModalVideo from "react-modal-video";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles(() => ({
  imgCarousel: {
    width: "100%",
    backgroudSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    position: "relative",
    top: "60px",
  },
  carousel: {},

  backgroundLinear: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    background: "linear-gradient(to top,#000,transparent 20%)",
  },
}));

const carouselItems = [
  {
    id: "1",
    imgUrl: `${imgCarousel01}`,
    linkVideo: "iCw-LfLw_Zk",
  },
  {
    id: "2",
    imgUrl: `${imgCarousel02}`,
    linkVideo: "NWEe2BGhOUA",
  },
  {
    id: "3",
    imgUrl: `${imgCarousel03}`,
    linkVideo: "iCw-LfLw_Zk",
  },
  {
    id: "4",
    imgUrl: `${imgCarousel04}`,
    linkVideo: "iCw-LfLw_Zk",
  },
  {
    id: "5",
    imgUrl: `${imgCarousel05}`,
    linkVideo: "iCw-LfLw_Zk",
  },
];

export default function Carousell() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
 
  
  return (
    <>
      <Carousel
        stopOnHover
        autoPlay
        interval={5000}
        useKeyboardArrows
        infiniteLoop
        showArrows={true}
        showItems={false}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
      >
        {carouselItems.map((item) => {
          return (
            <div className={classes.carousel} key={item.id}>
              <img
                className={classes.imgCarousel}
                src={item.imgUrl}
                alt={item.imgUrl}
              />
              <div className={classes.backgroundLinear}></div>
              <button className="btn-primary" onClick={() => setOpen(true)}>
                <img src={playIcon} alt={playIcon}></img>
              </button>
            </div>
          );
        })}
      </Carousel>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="iCw-LfLw_Zk"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
