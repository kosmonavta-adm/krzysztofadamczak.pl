import Image from 'next/image';
import { createPortal } from 'react-dom';

import * as Styled from '@/components/Lightbox/Lightbox.styles';
import { useEffect, useState } from 'react';

const Lightbox = ({ src, alt }: { src: string; alt: string }) => {
    const openLightbox = () => setIsLightboxVisible(true);
    const closeLightbox = () => setIsLightboxVisible(false);
    const [isClientSide, setIsClientSide] = useState(false);
    const [isLightboxVisible, setIsLightboxVisible] = useState(false);
    useEffect(() => {
        setIsClientSide(true);
    }, []);

    return (
        <>
            <Styled.Wrapper onClick={openLightbox}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={50}
                />
            </Styled.Wrapper>
            {isClientSide &&
                isLightboxVisible &&
                createPortal(
                    <Styled.ModalWrapper onClick={closeLightbox}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            quality={100}
                        />
                    </Styled.ModalWrapper>,
                    document.querySelector('#portal-root') as HTMLDivElement
                )}
        </>
    );
};

export default Lightbox;
