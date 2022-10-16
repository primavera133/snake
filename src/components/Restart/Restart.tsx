import PubSub from 'pubsub-js'
import { pubSubEvents } from '../../config'

function handleRestart () {
  PubSub.publish(pubSubEvents.RESETGAME, true)
}

export const Restart = () => {
  return <button onClick={handleRestart}>Restart</button>
}
