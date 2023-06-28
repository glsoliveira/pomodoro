import { createContext, useContext, useState } from 'react'

const CycleContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CycleContext)
  return (
    <>
      <h1>NewCycleForm {activeCycle}</h1>
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        update
      </button>
    </>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CycleContext)
  return <h2>Countdown {activeCycle}</h2>
}
export function ContextAPI() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
      <>
        <NewCycleForm />
        <Countdown />
      </>
    </CycleContext.Provider>
  )
}
