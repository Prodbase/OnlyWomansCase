import styled from 'styled-components';

export const HomeBlockThreeWrapper = styled.section`
  max-width: 150rem;
  margin: 0 auto 10rem auto;
  padding: 0 3rem;

  & > h1 {
      font-size: 4rem;
      font-weight: 600;
      max-width: 100rem;
  }

  & > p {
      margin: 2rem 0;
  }
`;

export const TextsFlex = styled.div`
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    `

export const DepoimentsWrapper = styled.div`
    display: grid;
    gap: 4rem;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    margin-top: 8rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            margin: 0.5rem 0;
            font-style: italic;
        }
    }

    img {
        border-radius: 10rem;
        object-fit: cover;
        margin: 0 auto;
    }
`