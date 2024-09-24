import { CyclesContext } from '../../../../context/CyclesContext'
import { LanguageContext } from '../../../../context/Language'
import { ElementTranslator, translator } from '../../../../languages'
import { HTMLElement } from './language'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  const { language } = useContext(LanguageContext)

  function translate(element: ReadonlyArray<ElementTranslator>) {
    return translator(element, language)
  }

  return (
    <FormContainer>
      <label htmlFor="task">{translate(HTMLElement.lblInputTask)}</label>
      <TaskInput
        type="text"
        id="task"
        placeholder={translate(HTMLElement.placeholderInputTaskLabel)}
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option>Projeto 1</option>
        <option>Projeto 2</option>
        <option>Projeto 3</option>
        <option>Banana</option>
      </datalist>

      <label htmlFor="minutesAmount">
        {translate(HTMLElement.inputAmountMinutesLable)}
      </label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
      <span>{translate(HTMLElement.spanMinutesLable)}</span>
    </FormContainer>
  )
}
