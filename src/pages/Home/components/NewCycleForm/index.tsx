import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will work with</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Give the name for the project"
        disabled={!!activeCycle}
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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
