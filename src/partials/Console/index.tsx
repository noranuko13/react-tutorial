import { useTranslation } from 'react-i18next'
import { Button } from '../../elements'
import './style.scss'

interface ConsoleProps {
  newGame: () => void
}

export function Console(props: ConsoleProps) {
  const { t } = useTranslation()

  return (
    <div data-testid="console" className="console">
      <Button data-testid={'new-game-button'} onClick={() => props.newGame()}>
        {t('console.newGame')}
      </Button>
    </div>
  )
}
