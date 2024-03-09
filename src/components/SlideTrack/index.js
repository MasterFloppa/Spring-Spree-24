import React from 'react';


const SlideTrack = ({forward = false, images}) => {

    
    images = [...images, ...images]; // twice so the animation doesnt glitch

    const val = forward ? 'marquee-forward' : 'marquee-backward';

    return (
        <div className="hero h-screen">
            <div className="flex-col overflow-hidden">
                <div className={`marquee-group1 ${val}`}>
                    {
                        images.map((image, index) => {
                            return (
                                <div key={index} className="image-wrapper grid">
                                    <img className="object-contain rounded-lg aspect-video" src={"../../../images/hero/" + image} alt="banner" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SlideTrack;