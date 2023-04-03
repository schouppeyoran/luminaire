import React, {useState, useEffect} from 'react';
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
    }

    function handleRightClick() {
        const newIndex = (centerIndex - 1 + galleryItems.length) % galleryItems.length;
        setRightIndex(centerIndex);
        setCenterIndex(newIndex);
        setLeftIndex((newIndex - 1 + galleryItems.length) % galleryItems.length);
    }
    

    return (
    <section id='gallery' className='app__gallery'>

        <div className="app__gallery-heading">
            <img src={gallerySection.decorator} alt="" />
            <h1>{gallerySection.heading}</h1>
            <h4>{gallerySection.subtext}</h4>
        </div>
        <div className="app__gallery-items">
            <div className="app__gallery-items-left">
                <img src={galleryItems[leftIndex].colorways[0]} alt="" />
            </div>
            <div className="app__gallery-items-center">
                <a className='app__gallery-button-left' onClick={handleLeftClick}><AiOutlineArrowLeft/></a>
                <a className='app__gallery-button-right' onClick={handleRightClick}><AiOutlineArrowRight/></a>
                <img src={galleryItems[centerIndex].colorways[0]} alt="" />
                <div className="app__gallery-items-center-description">
                    <h3>{galleryItems[centerIndex].name}</h3>
                    <div className="app__gallery-items-center-description-properties">
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
                <img src={galleryItems[rightIndex].colorways[0]} alt="" />
            </div>
        </div>
    </section>
    )
}

export default Gallery