import { useForm } from "react-hook-form"

interface TodoFormProps {
  setContent: React.Dispatch<React.SetStateAction<string[]>>
}

export function TodoForm({ setContent }: TodoFormProps) {
  const { register, handleSubmit } = useForm<{ task: string }>({
    shouldUseNativeValidation: true,
  })
  const onSubmit = async (data: { task: string }) => {
    setContent((prevContent) => [...prevContent, data.task])
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("task", {
            required: "Please enter your task.",
          })}
        />
        <button>
          Criar
        </button>
      </form>
    </div>
  )
}