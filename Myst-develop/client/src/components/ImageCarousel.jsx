import React, { useRef, useState, useCallback } from 'react';
import ImageSlider from 'react-slick';
// import { Slider } from 'react-slider';
import { Container, Button } from 'react-bootstrap';
import '../styles/ImageCarousel.css'

function ImageCarousel({ images }) {

    const sliderRef = useRef(null);
    // State variable for the thumbnail bits we're adding
    const [currentSlide, setCurrentSlide] = useState(0);
    // Slick image carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <div></div>,
        prevArrow: <div></div>,
        afterChange: (current) => setCurrentSlide(current),
    };
    // Clicking the left arrow, sets the current image to the previous image
    const handlePrev = useCallback(() => {
        sliderRef.current.slickPrev();
    }, []);
    // Clicking the right arrow, sets the current image to the next image
    const handleNext = useCallback(() => {
        sliderRef.current.slickNext();
    }, []);
    // Thumbnail click
    const handleThumbnailClick = useCallback((index) => {
        sliderRef.current.slickGoTo(index);
    }, []);
    // Add a slider between the arrows
    const handleSliderChange = useCallback((value) => {
        sliderRef.current.slickGoTo(value);
    }, []);

    return (
        <Container className="ImageCarousel">
            <ImageSlider ref={sliderRef} {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Carousel item ${index = 1}`} className="img-fluid" />
                    </div>
                ))}
            </ImageSlider>
            <div className="thumbnail-bar">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <img src={src} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="arrows">
                <Button className="arrow-btn" onClick={handlePrev}>
                    &lt;
                </Button>
                <div className="range-slider">
                    <input
                        className="horizontal-slider"
                        type="range"
                        step={1}
                        min={0}
                        max={images.length - 1}
                        value={currentSlide}
                        onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                    />
                </div>
                <Button className="arrow-btn" onClick={handleNext}>
                    &gt;
                </Button>
            </div>
        </Container>
    );
};

export default ImageCarousel;