import styled from 'styled-components';

export const HomeBlockFourWrapper = styled.section`
    padding-bottom: 3rem;
    border-bottom: 4px dashed #ddd;
`;

export const Banner = styled.div`
    margin: 4rem 0;
    height: 50rem;
    background-color: #bb4160;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.white};

    & > h1 {
        font-size: 4rem;
    }

    @media (max-width: 750px) {
        padding: 0 3rem;
    }
    
    `

export const Texts = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 3rem;

    p {
        margin-bottom: 2rem;
    }

    h1 {
        margin-bottom: 1rem;
        color: #BB4160;
    }
`
