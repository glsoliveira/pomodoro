import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'What is the task?'),
  minutesAmount: zod.number().min(5).max(60, 'The value must be up to 60'),
})

// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  // Controlled
  // const [task, setTask] = useState("");

  // Uncontrolled
  // function handleSubmit(event) {
  //   console.log(event.target.task.value);
  // }
  // onSubmit={handleSubmit} add on tag form

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const id = String(new Date().getTime())
  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  // console.log(activeCycle);

  // console.log(formState.errors);

  const task = watch('task')
  const isSubmitDisable = !task
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">I will work with</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Give the name for the project"
            {...register('task')}
            // onChange={(e) => setTask(e.target.value)}
            // value={task}
          />
          <datalist id="task-suggestions">
            <option value="Project 01" />
            <option value="Project 02" />
            <option value="Project 03" />
            <option value="Banana" />
          </datalist>
          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutes.</span>
        </FormContainer>
        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>
        {/* disabled={!task}  */}
        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} /> Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
