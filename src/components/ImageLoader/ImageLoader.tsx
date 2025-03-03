import { useState } from 'react';

import { ImageWrapper, LoadingSpinner, StyledImage } from '.';

type Props = {
    src: string;
    className?: string;
};

function LazyImage({ src, className }: Props) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <ImageWrapper className={className}>
            <LoadingSpinner $isLoaded={isLoaded} />
            <StyledImage
                src={src}
                $isLoaded={isLoaded}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </ImageWrapper>
    );
}

export default LazyImage;
