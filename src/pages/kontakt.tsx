import Nav from '@/components/Nav/Nav';
import Overlay from '@/components/Overlay/Overlay';
import ContactForm from '@/components/ContactForm/ContactForm';
import * as sContactHello from '@/components/ContactHello/ContactHello.styles';

import * as sContainers from '@/components/Container/Containers.styles';

import { useOverlay } from '@/providers/OverlayProvider';

export const getStaticProps = async () => {
    return {
        props: {},
    };
};

export default function Contact() {
    const { isOverlayVisible } = useOverlay();

    return (
        <>
            <sContainers.Top>
                <Nav position="nav" />
            </sContainers.Top>
            <sContainers.Main>
                <sContainers.Base>
                    <sContainers.TwoColumns>
                        <sContactHello.Text>
                            Masz pytanie? Chcesz się czegoś dowiedzieć?
                            <br />
                            <br />
                            <sContactHello.TextAccent>Napisz!</sContactHello.TextAccent>
                        </sContactHello.Text>
                        <ContactForm />
                    </sContainers.TwoColumns>
                </sContainers.Base>
            </sContainers.Main>
            <Overlay isOverlayVisible={isOverlayVisible} />
        </>
    );
}
