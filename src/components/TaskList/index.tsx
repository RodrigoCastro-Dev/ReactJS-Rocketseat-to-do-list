import clipboardLogo from '../../assets/clipboard.svg'

export function TaskList({ count }: { count: number }) {
  return (
    <div>
      <span>Tarefas Criadas ({count})</span>
      <span>Concluidas ({count})</span>
      <hr></hr>

      <i> <img src={clipboardLogo} className="logo"></img> </i>
      <p>Você ainda não tem tarefas cadastradas</p>
      <p className="read-the-docs">
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
