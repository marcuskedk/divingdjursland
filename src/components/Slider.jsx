import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "../../img/IMG_20190726_122436_1.jpg" },
  { url: "../../img/IMG_20190806_152625_1.jpg" },
  { url: "../../img/IMG_20190824_085139_1.jpg" },
  { url: "../../img/IMG_20200621_090929_2.jpg" },
  { url: "../../img/IMG_20200822_193847.jpg" },
  { url: "../../img/IMG_20200912_130107.jpg" },
];

const Slider = () => {
    return (
        <>
            <SimpleImageSlider
                width={1000}
                height={504}
                images={images}
                showBullets={false}
                showNavs={true}
                loop={true}
                autoPlay={true}
                autoPlayDelay={6}
                slideDuration={1}
            />
        </>
    )
}

export default Slider
