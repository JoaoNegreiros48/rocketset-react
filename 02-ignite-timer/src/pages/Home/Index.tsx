import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './Style'
import { NewCycleForm } from './Components/NewCycleForm/Index'
import { Countdown } from './Components/Countdown/Index'
import { CyclesContenxt } from '../../contexts/CyclesContext'

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ser de no minímo 5 minutos.')
    .max(60, 'O ciclo deve ser de no máximo 60 minutos.'),
})

type NewCicleFormData = zod.infer<typeof newCicleFormValidationSchema>

export function Home() {
  const {
    activeCycle,
    createNewCicle,
    interruptCurrentCycle,
  } = useContext(CyclesContenxt)

  const newCycleForm = useForm<NewCicleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCicleFormData) {
    createNewCicle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle
          ? (
            <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
            )
          : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
            )}
      </form>
    </HomeContainer>
  )
}
