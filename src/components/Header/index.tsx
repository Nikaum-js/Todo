import Logo from '../../assets/rocket.svg'

import Styles from './styles'

export function Header() {
  return (
    <Styles.Header>
      <img src={Logo} alt="" />
      <h1>
        to<span>do</span>
      </h1>
    </Styles.Header>
  )
}
