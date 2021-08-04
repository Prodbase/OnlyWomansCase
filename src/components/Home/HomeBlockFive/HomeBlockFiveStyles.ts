import styled from 'styled-components';

export const HomeBlockFiveWrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;

    h1 {
        color: #bb4160;
        font-size: 4rem;

        @media (max-width: 750px) {
            font-size: 3rem;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        width: 60rem;
        margin-top: 2rem;

        label {
            margin: 2rem 0 0.3rem 0;
            font-size: 1.8rem;
        }

        textarea,
        input {
            border: 2px solid #ddd;
            padding: 2rem 1.3rem;
            font-size: 2rem;
        }

        textarea {
            resize: none;
            height: 20rem;
        }

        button {
            background: #bb4160;
            margin-top: 2rem;
            border: none;
            padding: 1.4rem 2rem;
            color: ${props => props.theme.colors.white};
            font-size: 2.1rem;
            cursor: pointer;
        }

        @media (max-width: 750px) {
            width: 100%;
        }
    }
`;
