import Clipboard from '../../assets/clipboard.svg'

import Styles from './styles'

export function NotHaveTasks() {
  return (
    <Styles.Container>
      <Styles.Content>
        <img src={Clipboard} alt="Ícone de um bloco de notas" />

        <div className="NotHaveTasks">
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </Styles.Content>
    </Styles.Container>
  )
}
