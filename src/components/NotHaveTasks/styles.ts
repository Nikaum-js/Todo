import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 750px;
  height: 250px;
  margin-top: 24px;
  border-radius: 4px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_400};

  .NotHaveTasks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;

    strong {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.gray_300};
      font-weight: ${({ theme }) => theme.fontsWeights.bold};
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.gray_300};
      font-weight: ${({ theme }) => theme.fontsWeights.regular};
    }
  }
`

export default {
  Container,
  Content,
}
