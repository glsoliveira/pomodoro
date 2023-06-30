import { Cycle } from "./reducer";

export enum ActionTypes{
    CREATE_CYCLE = 'CREATE_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
  }

  export function createCycleAction(newCycle: Cycle){
    return { 
        type: ActionTypes.CREATE_CYCLE, 
        payload: { 
            newCycle 
        } 
    }
  }

  export function interruptCycleAction(){
    return { 
        type: ActionTypes.INTERRUPT_CYCLE, 
    }
  }

  export function marcCurrentCycleAsFinishedAction(){
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      }
  }