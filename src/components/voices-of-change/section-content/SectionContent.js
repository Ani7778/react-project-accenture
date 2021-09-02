import React, {useEffect} from "react";
import classes from "./SectionContent.module.scss";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

function SectionContent({images}) {
    // const [cursorX, setCursorX] = useState();
    // const [cursorY, setCursorY] = useState();
    //
    // window.addEventListener('mousemove', (e)=> {
    //     setCursorX(e.pageX);
    //     setCursorY(e.pageY);
    // })

    // const img = useRef();
    // console.log(img);
    //
    // const zoomImg = (width, height) => {
    //     img.current.style.width = `${width}px`;
    //     img.current.style.height = `${height}px`;
    //     img.current.addEventListener('mousemove', handleMouseMove, false);
    // }
    //
    // function handleMouseMove(e) {
    //     const dimensions = this.getBoundingClientRect();
    //     const [x, y] = [
    //         e.clientX - dimensions.left,
    //         e.clientY - dimensions.top
    //     ];
    //     const [percentX, percentY] = [
    //         Math.round(100 / (dimensions.width / x)),
    //         Math.round(100 / (dimensions.height / y))
    //     ];
    //     this.style.setProperty('--mouse-x', percentX);
    //     this.style.setProperty('--mouse-y', percentY);
    // }
    //
    // zoomImg(320, 212);

    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    const animateImages = useAnimation();

    useEffect(()=> {
        if(inView) {
            animateImages.start({
                height: "100%",
                transition: {
                    duration: 1.5
                }
            })
        }
        if(!inView) {
            animateImages.start({
                height: 0,
            })
        }
    })

    return (
        <div className={classes.container} ref={ref}>
            {images.map((image)=>{
                return (
                    <motion.div className={image.container} animate={animateImages}>
                        <div className={classes.img_container} >
                            <img className={classes.img} src={image.src}/>
                        </div>
                        <div className={classes.text_container}>
                            <p className={classes.category_title}>{image.subject}</p>
                            <span>{image.title}</span>
                            <p className={classes.text}>{image.text}</p>
                        </div>
                    </motion.div>

                )
            })}
            {/*<div className={classes.cursor} style={{*/}
            {/*    left: `${cursorX}px`,*/}
            {/*    top: `${cursorY}px`*/}
            {/*}}>explore</div>*/}
        </div>
    );
}

export default SectionContent;
