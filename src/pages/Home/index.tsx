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
// import { useState } from "react";
import { useForm } from 'react-hook-form'

export function Home() {
  // Controlled
  // const [task, setTask] = useState("");

  // Uncontrolled
  // function handleSubmit(event) {
  //   console.log(event.target.task.value);
  // }
  // onSubmit={handleSubmit} add on tag form

  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisable = !task

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
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        {/* disabled={!task}  */}
        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} /> Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
