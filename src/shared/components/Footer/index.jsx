import React from 'react';
import {Badge} from "antd";

import { FooterStyled } from "./styles";

function Footer() {
    
    return (
        <FooterStyled>
            <Badge count="1.0.0" style={{ backgroundColor: '#51bcad', color:'#a5e2d4' }} />
            <p>© 2020 - Desarrollado por Felipe Lobo, Jessica Pinzón & José Álvarez</p>
            {/*<Button shape="round" type="default" target="_blank" icon="github" href="https://github.com/wolfmaster8/trivia-osi">
                Github
            </Button>*/}
        </FooterStyled>
    );
}

export default Footer;
