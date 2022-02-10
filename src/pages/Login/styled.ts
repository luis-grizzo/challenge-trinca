import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  .w__login-form,
  .wm__register-form {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    width: 100%;
  }

  .w__login-form {
    max-width: 50rem;
  }
`
