import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 750px;

  .checked {
    background-color: ${({ theme }) => theme.colors.gray_500};

    p {
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.gray_300};
    }
  }

  & + & {
    margin-top: -12px;
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 70px;
  margin-top: 24px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  background-color: ${({ theme }) => theme.colors.gray_500};

  form {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    margin: 0 10px;

    p {
      max-width: 650px;
      width: 100%;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    svg {
      color: ${({ theme }) => theme.colors.gray_300};
      cursor: pointer;

      :hover {
        color: ${({ theme }) => theme.colors.danger};
      }
    }

    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .container {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 17px;
      user-select: none;
    }

    .checkmark {
      position: relative;
      top: 0;
      left: 0;
      height: 1em;
      width: 1em;
      border: 2px solid ${({ theme }) => theme.colors.blue};
      background-color: ${({ theme }) => theme.colors.gray_400};
      transition: all 0.3s;
      border-radius: 50%;
    }

    .checkmark:hover {
      background-color: ${({ theme }) => theme.colors.blue_dark};
    }

    .container input:checked ~ .checkmark {
      background-color: ${({ theme }) => theme.colors.purple};
      animation: pop 0.5s;
      border: 0;
      animation-direction: alternate;
    }

    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    .container input:checked ~ .checkmark:after {
      display: block;
    }

    .container .checkmark:after {
      border: 0;
      left: 0.35em;
      top: 0.19em;
      width: 0.2em;
      height: 0.4em;
      border: solid white;
      border-width: 0 0.15em 0.15em 0;
      transform: rotate(45deg);
    }

    @media (max-width: 768px) {
      p {
        margin-left: 0.5rem;
      }
    }
  }
`

export default {
  Container,
  Content,
}
