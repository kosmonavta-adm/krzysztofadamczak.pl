import { Nav } from '../Nav/Nav';
import * as sFooter from './Footer.styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <sFooter.Wrapper>
            Krzysztof Adamczak © 2013 - {currentYear}
            <Nav small />
        </sFooter.Wrapper>
    );
};

export default Footer;
