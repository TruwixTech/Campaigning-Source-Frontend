import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <Image src="/carousel/1.webp" width={1000} height={1000} className='w-96 mx-auto rounded-lg' />
    </div>,
    <div className="item" data-value="2">
        <Image src="/carousel/2.webp" width={1000} height={1000} className='w-96 mx-auto rounded-lg' />
    </div>,
    <div className="item" data-value="3">
        <Image src="/carousel/3.webp" width={1000} height={1000} className='w-96 mx-auto rounded-lg' />
    </div>,
    <div className="item" data-value="4">
        <Image src="/carousel/4.webp" width={1000} height={1000} className='w-96 mx-auto rounded-lg' />
    </div>
];

const GraphicsCarousel = () => (
    <AliceCarousel
        mouseTracking
        disableButtonsControls
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
    />
);

export default GraphicsCarousel;