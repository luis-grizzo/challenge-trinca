import styled from 'styled-components'

export const Wrapper = styled.div`
  .w__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 1fr;
    gap: 2.4rem;
  }

  .wm__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;

    width: 100%;
  }
`
