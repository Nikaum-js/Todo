import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  .circle {
    flex: 1;
    height: 25px;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    margin-left: 8px;
    background: ${({ theme }) => theme.colors.gray_400};

    color: ${({ theme }) => theme.colors.gray_200};
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.fontsWeights.bold};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 750px;
  width: 100%;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const MaidsTasks = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.blue};
  font-size: 0.875rem;

  @media (max-width: 530px) {
    margin-bottom: 1rem;
  }
`

const FinishedTasks = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.purple};
  font-size: 0.875rem;
`

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -27px;
  margin-bottom: 60px;
  max-width: 750px;
  width: 100%;

  input {
    background-color: ${({ theme }) => theme.colors.gray_500};
    border: 1px solid ${({ theme }) => theme.colors.gray_700};
    padding-left: 16px;
    border-radius: 8px;
    margin-right: 8px;
    width: 100%;
    height: 54px;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  placeholder {
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 1rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90px;
    height: 52px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blue_dark};

    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.fontsWeights.bold};

    svg {
      margin-left: 4px;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    @media (max-width: 530px) {
      svg {
        display: none;
      }
    }
  }
`

export default {
  Header,
  SearchBar,
  MaidsTasks,
  FinishedTasks,
  Container,
}
