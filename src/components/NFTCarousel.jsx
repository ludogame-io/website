import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const NFTCarousel = () => {
  return (
    <Carousel 
      width="18rem"
      infiniteLoop={true}
      showArrows={true}
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      >
      <div>
        <img src="img/gen0/GMGlA.png" />
      </div>
      <div>
        <img src="img/gen0/GMPE.png" />
      </div>
      <div>
        <img src="img/gen0/GMWA.png" />
      </div>
      <div>
        <img src="img/gen0/GRGlE.png" />
      </div>
      <div>
        <img src="img/gen0/GRPA.png" />
      </div>
      <div>
        <img src="img/gen0/GRWR.png" />
      </div>
    </Carousel>
  )
}

export default NFTCarousel
