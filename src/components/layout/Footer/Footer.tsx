import { Nav } from '../Nav/Nav';

import * as sFooter from './Footer.styles';
import * as sContainers from '@/components/layout/Containers.styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <sContainers.Base>
            <sFooter.Wrapper>
                Krzysztof Adamczak © 2013 - {currentYear}
                <Nav $small />
            </sFooter.Wrapper>
        </sContainers.Base>
    );
};

export default Footer;
