interface TodoFormProps {
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function TodoForm({ setCount }: TodoFormProps) {
  return (
    <div className="card">
      <input type="text" />
      <button onClick={() => setCount((count) => count + 1)}>
        Criar
      </button>
    </div>
  )
}