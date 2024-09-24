import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import { translator, ElementTranslator } from '../../languages'
import { HTMLElement } from './language'
import { CyclesContext } from '../../context/CyclesContext'
import { LanguageContext } from '../../context/Language'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O intervalo precisa ser de no mínimo 5 minutos')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos.'),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const { language } = useContext(LanguageContext)

  function translate(element: ReadonlyArray<ElementTranslator>) {
    return translator(element, language)
  }

  // importe formState
  // utilize formState.errors para utilizar as mensagens de erros
  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisable = !task

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            {translate(HTMLElement.lblButtonInteromper)}
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            {translate(HTMLElement.lblButtonComecar)}
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
