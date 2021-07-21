import { Images } from "../carousel-slider/Images";
import React from "react";
import {Slides} from "../video-slider/Videos";
import classes from "../carousel-slider/CarouselSlider.module.css";
import {HiChevronRight, HiChevronLeft} from "react-icons/all";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



// const Slider = ()=> {
//     const settings = {
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//     }
//     return (
//         <div>
//
//             {
//                 Images.map((image, index) => {
//                     return (
//
//                                     <figure {...settings}>className="snip1584">
//                                         <img src={image.image}/>
//                                         <figcaption>
//                                             <h3>{image.title}</h3>
//                                             <p>{image.text}</p>
//                                         </figcaption>
//                                     </figure>
//
//                     )
//                 })
//              }
//         </div>
//         )
// }

// const slideWidth = 30;
//
// const length = Images.length;
//
// const sleep = (ms = 0) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// };
//
// const createItem = (position, idx) => {
//     const item = {
//         styles: {
//             transform: `translateX(${position * slideWidth}rem)`,
//         },
//         image: Images[idx].image,
//     };
//
//     switch (position) {
//         case length - 1:
//         case length + 1:
//             item.styles = {...item.styles, filter: 'grayscale(1)'};
//             break;
//         case length:
//             break;
//         default:
//             item.styles = {...item.styles, opacity: 0};
//             break;
//     }
//
//     return item;
// };
//
// const CarouselSlideItem = ({pos, idx, activeIdx}) => {
//     const item = createItem(pos, idx, activeIdx);
//
//     return (
//         <li className="carousel__slide-item" style={item.styles}>
//             <div className="carousel__slide-item-img-link">
//                 <img src={item.image.image} alt={item.image.title} />
//             </div>
//             <div className="carousel-slide-item__body">
//                 <h4>{item.image.title}</h4>
//                 <p>{item.image.text}</p>
//             </div>
//         </li>
//     );
// };
//
// const keys = Array.from(Array(Images.length).keys());
//
// const Carousel = () => {
//     const [items, setItems] = React.useState(keys);
//     const [isTicking, setIsTicking] = React.useState(false);
//     const [activeIdx, setActiveIdx] = React.useState(0);
//     const bigLength = items.length;
//
//     const prevClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map((_, i) => prev[(i + jump) % bigLength]);
//             });
//         }
//     };
//
//     const nextClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map(
//                     (_, i) => prev[(i - jump + bigLength) % bigLength],
//                 );
//             });
//         }
//     };
//
//     const handleDotClick = (idx) => {
//         if (idx < activeIdx) prevClick(activeIdx - idx);
//         if (idx > activeIdx) nextClick(idx - activeIdx);
//     };
//
//     React.useEffect(() => {
//         if (isTicking) sleep(300).then(() => setIsTicking(false));
//     }, [isTicking]);
//
//     React.useEffect(() => {
//         setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
//     }, [items]);
//
//     return (
//         <div className="carousel__wrap">
//             <div className="carousel__inner">
//                 <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
//                     <HiChevronLeft />
//                 </button>
//                 <div className="carousel__container">
//                     <ul className="carousel__slide-list">
//                         {items.map((pos, i) => (
//                             <CarouselSlideItem
//                                 key={i}
//                                 idx={i}
//                                 pos={pos}
//                                 activeIdx={activeIdx}
//                             />
//                         ))}
//                     </ul>
//                 </div>
//                 <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
//                     <HiChevronRight />
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default  Carousel;

function ImageCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <Slider {...settings}>
            {
                 Images.map((image, index) => {
                     return (
                        <div className={classes.container}>
                            <img className={classes.img} src={image.image}/>
                            <div className={classes.text_container}>
                                <h3>{image.title}</h3>
                                <p>{image.text}</p>
                            </div>
                        </div>
                     )})}
        </Slider>
    )
}

export default  ImageCarousel;
