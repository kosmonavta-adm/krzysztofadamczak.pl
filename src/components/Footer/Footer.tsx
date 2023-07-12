import Nav from '@/components/Nav/Nav';

import * as sFooter from '@/components/Footer/Footer.styles';

import * as sContainers from '@/components/Container/Containers.styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <sContainers.Base>
            <sFooter.Wrapper>
                Krzysztof Adamczak © 2013 - {currentYear}
                <Nav position="footer" />
            </sFooter.Wrapper>
        </sContainers.Base>
    );
};

export default Footer;
