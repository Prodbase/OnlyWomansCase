import styled, { css } from 'styled-components';

interface TextAbsoluteProps {
    one?: boolean
    two?: boolean
    three?: boolean
    four?: boolean
}

export const HomeBlockTwoWrapper = styled.section`
    margin: 10rem auto;
    padding-bottom: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 120rem;
    border-bottom: 5px dashed #ddd;
    `;

export const Intros = styled.div`
    padding: 0 3rem;
    display: grid;
    gap: 6rem;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));

    @media (max-width: 750px) {
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }

    div p {
        font-size: 2rem;
    }
`
export const WomanBannner = styled.div`
    position: relative;
    width: 100%;
    height: 100rem;
    margin-top: 4rem;
    border-radius: 1rem;
    
    img {
        border-radius: 1rem;
        object-fit: cover;
        filter: brightness(0.6);
    }

    @media (max-width: 750px) {
        img {
            border-radius: 0;
        }
    }
`;

export const TextAbsolute = styled.div<TextAbsoluteProps>`
    position: absolute;
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
    font-style: italic;

    ${props => props.one && css`
        top: 10%;
        left: 10%;
        max-width: 50rem;
    `}

    ${props => props.two && css`
        top: 30%;
        right: 10%;
        text-align: right;
        max-width: 50rem;
    `}

    ${props => props.three && css`
        top: 50%;
        left: 10%;
        text-align: left;
        max-width: 50rem;
    `}
    
    ${props => props.four && css`
        top: 70%;
        right: 10%;
        text-align: right;
        max-width: 50rem;
    `}
`