import React, {useState, useEffect, useRef} from 'react';
import { images } from '../../constants';
import './gallery.css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const gallerySection = {
    decorator: images.star3,
    heading: 'Pick your dream car',
    subtext: 'Explore our fleet',
    labelLeft: 'Pick your car',
    labelRight: 'Luminaire'
}

const galleryItems = [
    {
        name: 'Rivian Hatch',
        colorways: [
            images.rivianHatch1,
            images.rivianHatch2,
            images.rivianHatch3,
            images.rivianHatch4,
        ],
        properties : [
            {
                property: 'EPA gas range',
                value: '32mpg'
            },
            {
                property: 'Drivetrain',
                value: 'All-wheel drive'
            },
            {
                property: 'Max power',
                value: '1,200 hp'
            }
        ]
    },
    {
        name: 'Rivian Pickup',
        colorways: [
            images.rivianPickup1,
            images.rivianPickup2,
            images.rivianPickup3,
            images.rivianPickup4,
        ],
        properties : [
            {
                property: 'Property 1',
                value: 'Value 1'
            },
            {
                property: 'Property 2',
                value: 'Value 2'
            },
            {
                property: 'Carrying capacity',
                value: '25 Schmeckels'
            }
        ]
    },
    {
        name: 'Polestar Coupe',
        colorways: [
            images.polestarCoupe1,
            images.polestarCoupe2,
            images.polestarCoupe3,
        ],
        properties : [
            {
                property: 'Property 1',
                value: 'Value 1'
            },
            {
                property: 'Property 2',
                value: 'Value 2'
            },
            {
                property: 'Property 3',
                value: 'Value 3'
            }
        ]
    },
    {
        name: 'Polestar Hatch',
        colorways: [
            images.polestarHatch1,
            images.polestarHatch2,
            images.polestarHatch3,
        ],
        properties : [
            {
                property: 'Property 1',
                value: 'Value 1'
            },
            {
                property: 'Property 2',
                value: 'Value 2'
            },
            {
                property: 'Property 3',
                value: 'Value 3'
            }
        ]
    },
]

const Gallery = () => {
    const [leftIndex, setLeftIndex] = useState(galleryItems.length - 1);
    const [centerIndex, setCenterIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(1);

    function handleLeftClick() {
        const newIndex = (centerIndex + 1) % galleryItems.length;
        setLeftIndex(centerIndex);
        setCenterIndex(newIndex);
        setRightIndex((newIndex + 1) % galleryItems.length);
        setSlideDirection("left");
    }
    
    function handleRightClick() {
        const newIndex = (centerIndex - 1 + galleryItems.length) % galleryItems.length;
        setRightIndex(centerIndex);
        setCenterIndex(newIndex);
        setLeftIndex((newIndex - 1 + galleryItems.length) % galleryItems.length);
        setSlideDirection("right");
    }
    
    const [slideDirection, setSlideDirection] = useState(null);
    
    useEffect(() => {
        leftItemRef.current.classList.remove("--slide-left", "--slide-right");
        centerItemRef.current.classList.remove("--slide-left", "--slide-right");
        rightItemRef.current.classList.remove("--slide-left", "--slide-right");
        centerItemNameRef.current.classList.remove("--slide-up-name");
        

        centerItemNameRef.current.classList.add("--slide-up-name")
        centerItemPropertiesRef.current.classList.add("--slide-up-properties")
        if (slideDirection === "left") {
            leftItemRef.current.classList.add("--slide-left");
            centerItemRef.current.classList.add("--slide-left");
            rightItemRef.current.classList.add("--slide-left");
        } else if (slideDirection === "right") {
            leftItemRef.current.classList.add("--slide-right");
            centerItemRef.current.classList.add("--slide-right");
            rightItemRef.current.classList.add("--slide-right");
        }
    }, [slideDirection, leftIndex, centerIndex, rightIndex]);

    useEffect(() => {
        function handleTransitionEnd() {
            setSlideDirection(null);
        }
    
        centerItemRef.current.addEventListener("animationend", handleTransitionEnd);
    
        return () => {
            centerItemRef.current.removeEventListener("animationend", handleTransitionEnd);
        }
    }, []);

    const leftItemRef = useRef(null);
    const centerItemRef = useRef(null);
    const rightItemRef = useRef(null);
    const centerItemNameRef = useRef(null);
    const centerItemPropertiesRef = useRef(null);
    
    return (
    <section id='gallery' className='app__gallery'>

        <div className="app__gallery-heading">
            <img src={gallerySection.decorator} alt="" />
            <h1>{gallerySection.heading}</h1>
            <h4>{gallerySection.subtext}</h4>
        </div>
        <div className="app__gallery-items">
            <div className="app__gallery-items-left">
                <img src={galleryItems[leftIndex].colorways[0]} alt="" ref={leftItemRef}/>
            </div>
            <div className="app__gallery-items-center" >
                <a className='app__gallery-button-left' onClick={handleLeftClick}><AiOutlineArrowLeft/></a>
                <a className='app__gallery-button-right' onClick={handleRightClick}><AiOutlineArrowRight/></a>
                <img src={galleryItems[centerIndex].colorways[0]} alt="" ref={centerItemRef} />
                <div className="app__gallery-items-center-description">
                    <h3 ref={centerItemNameRef}>{galleryItems[centerIndex].name}</h3>
                    <div className="app__gallery-items-center-description-properties" ref={centerItemPropertiesRef}>
                        {galleryItems[centerIndex].properties.map((property, index) => (
                            <div className="app__gallery-items-center-description-property">
                                <h4>{property.property}</h4>
                                <h5>{property.value}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="app__gallery-items-right">
                <img src={galleryItems[rightIndex].colorways[0]} alt="" ref={rightItemRef}/>
            </div>
        </div>
    </section>
    )
}

export default Gallery