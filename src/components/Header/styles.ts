import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;


  height: 200px;
  background-color: ${({ theme }) => theme.colors.gray_700};

  img {
    margin-right: 12px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontsWeights.black};
    color: ${({ theme }) => theme.colors.blue};
  }

  span {
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontsWeights.black};
    color: ${({ theme }) => theme.colors.purple_dark};
  }
`

export default {
  Header,
}
