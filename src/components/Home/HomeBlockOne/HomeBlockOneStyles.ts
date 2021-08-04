import styled from 'styled-components';

export const HomeBlockOneWrapper = styled.section`
    height: 100vh;
    display: flex;
    position: relative;
    
    
    & > div:not(:first-child, :last-child) {
        position: relative;
        width: 100%;
        
        img {
            object-fit: cover;
            filter: brightness(0.6) blur(4px);
            transform: scale(1.1);
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;

        & > div:not(:first-child, :last-child) {
            height: 100%;
        }
    }
`;

export const TextsWrapper = styled.div`
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: ${props => props.theme.colors.white};
    max-width: 80rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > h1 {
        font-size: 5rem;
    }
    
    & > p {
        font-size: 2rem;
        margin: 2rem 0;
    }
    
    
    & > button {
        padding: 1.3rem 3rem;
        font-size: 2rem;
        border: none;
        border-radius: 10rem;
        transition: 0.5s;
        
        :hover {
            transition: 0.5s;
            border-radius: 0;
            letter-spacing: 0.5rem;
            cursor: pointer;
        }
    }

    @media (max-width: 750px) {
        & > h1 {
            font-size: 3rem
        }

        & > button,
        & > p {
           font-size: 1.5rem;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
        padding: 0 3rem;
    }
`