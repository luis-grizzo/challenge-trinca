import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .w__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

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
