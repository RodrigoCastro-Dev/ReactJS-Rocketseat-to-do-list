import clipboardLogo from '../../assets/clipboard.svg'

export function TaskList({ content }: { content: string[] }) {
  return (
    <div>
      <span>Tarefas Criadas ({content.length})</span>
      <span>Concluídas ({content.length})</span>
      <hr />

      {content.length > 0 ? (
        <div>
          {content.map((task) => (
            <div key={task}>{task}</div>
          ))}
        </div>
      ) : (
        <>
          <i>
            <img src={clipboardLogo} className="logo" alt="Clipboard" />
          </i>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p className="read-the-docs">
            Crie tarefas e organize seus itens a fazer
          </p>
        </>
      )}
    </div>
  );
}
