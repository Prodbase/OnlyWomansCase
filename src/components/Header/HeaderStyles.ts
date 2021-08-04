import styled from 'styled-components';

export const HeaderWrapper = styled.header<{ mobile?: boolean }>`
    position: ${props => props.mobile ? 'fixed' : 'absolute'};
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    background: ${props => props.mobile ? '#bb4160' : 'transparent'};

    h1 {
        color: ${props => props.theme.colors.white};
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    nav {
        a {
            margin: 0 1.5rem;
            font-size: 2rem;
            font-weight: 400;
            color: ${props => props.theme.colors.white};
    
            :hover {
                border-bottom: 3px solid #fff;
            }
        }
    }
    

    svg {
        cursor: pointer;
    }
`;

export const ModalMobile = styled.div`
    position: absolute;
    z-index: 999;
    top: 100%;
    right: 0;
    left: 0;
    min-height: 20rem;
    background: #bb4160;
    border-top: 2px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    
    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 2rem;
        
        a {
            color: ${props => props.theme.colors.white};
            font-weight: 500;
            font-size: 1.8rem;

            :hover {
                border-bottom: 2px solid #fff;
            }
        }
    }
`
