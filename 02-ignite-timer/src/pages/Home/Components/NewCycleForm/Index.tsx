import { FormContainer, MinutesAmountInput, TaskInput } from './Style'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContenxt } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContenxt)
  const { register } = useFormContext()

  return (
    <FormContainer>

      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
