import * as sOverlay from '@/components/Overlay/Overlay.styles';

export const Overlay = ({ isOverlayVisible = false }: { isOverlayVisible: boolean }) => {
    return (
        <sOverlay.Overlay
            aria-hidden={false}
            $isOverlayVisible={isOverlayVisible}
        />
    );
};

export default Overlay;
