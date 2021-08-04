import React, { useState } from 'react';
import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import useMediaQuery from '../../hooks/useMediaQuery';
import { HeaderWrapper, ModalMobile } from './HeaderStyles';
import { useEffect } from 'react';

const Header: React.FC = () => {
    const [activeModel, setActiveModel] = useState(false)
    const mobile = useMediaQuery('(max-width: 740px)')

    const openModalMobile = () => {
        setActiveModel(active => !active)
    }
    return (
        <>
            <HeaderWrapper mobile={mobile}>
                <a href="#home">
                    <h1><SiApacheairflow /> OnlyWoman</h1>
                </a>
                {!mobile ? (
                    <nav>
                        <a href="#about">Sobre</a>
                        <a href="#join">Junte-se</a>
                        <a href="#contact">Entrar em contato</a>
                    </nav>
                ) : (
                    activeModel ? (
                        <AiOutlineClose onClick={openModalMobile} size={40} color="#fff" />
                    ) : (
                        <AiOutlineMenu onClick={openModalMobile} size={40} color="#fff" />
                    )
                )}
                {activeModel && (
                    <ModalMobile>
                        <nav>
                            <a href="#about">Sobre</a>
                            <a href="#join">Junte-se</a>
                            <a href="#contact">Entrar em contato</a>
                        </nav>
                    </ModalMobile>
                )}
            </HeaderWrapper>
        </>
    )
}

export default Header;