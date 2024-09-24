import { HTMLElement } from './language'
import { HistoryContainer, HistoryList, Status } from './styles'
import { translator, ElementTranslator } from '../../languages'
import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import { LanguageContext } from '../../context/Language'
import { formatDistanceToNow } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'

export function History() {
  const { language } = useContext(LanguageContext)
  const { cycles } = useContext(CyclesContext)

  function translate(element: ReadonlyArray<ElementTranslator>) {
    return translator(element, language)
  }

  return (
    <HistoryContainer>
      <h1>{translate(HTMLElement.h1)}</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>{translate(HTMLElement.lblThTarefa)}</th>
              <th>{translate(HTMLElement.lblThDuracao)}</th>
              <th>{translate(HTMLElement.lblThInicio)}</th>
              <th>{translate(HTMLElement.lblThStatus)}</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {cycle.minutesAmount} {translate(HTMLElement.lblMinutos)}
                  </td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: language === 'pt' ? ptBR : enUS,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">
                        {translate(HTMLElement.statusConcluido)}
                      </Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">
                        {translate(HTMLElement.statusInterrompido)}
                      </Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">
                        {translate(HTMLElement.statusEmAndamento)}
                      </Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
