import React from 'react';

const ImageBanner = ({
    imageUrl,
    alt = '',
    children,
    overlay = false,
    overlayColor = 'bg-black/50',
    position = 'center',
}) => {
    const positions = {
        'top-left': 'items-start justify-start text-left',
        'top-center': 'items-start justify-center text-center',
        'top-right': 'items-start justify-end text-right',
        'center-left': 'items-center justify-start text-left',
        'center': 'items-center justify-center text-center',
        'center-right': 'items-center justify-end text-right',
        'bottom-left': 'items-end justify-start text-left',
        'bottom-center': 'items-end justify-center text-center',
        'bottom-right': 'items-end justify-end text-right',
    };

    return (
        <div className="relative w-full h-[320px] overflow-hidden">
            <img
                src={imageUrl}
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
            />

            {overlay && <div className={`absolute inset-0 ${overlayColor}`} />}

            {children && (
                <div className={`absolute inset-0 flex ${positions[position]} p-6`}>
                    <div className="w-full max-w-5xl">{children}</div>
                </div>
            )}
        </div>
    );
};

export default ImageBanner;
