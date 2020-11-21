import Landing from './Landing.svelte'
import Home from './Home.svelte'
import Setup from './Setup.svelte'
import Preview from './Preview.svelte'
import Workout from './Workout.svelte'
import Summary from './Summary.svelte'
import History from './History.svelte'

const routes = {
  // Exact path
  '/': Landing,
  '/home': Home,
  '/setup': Setup,
  '/preview': Preview,
  '/workout': Workout,
  '/summary': Summary,
  '/history': History,
  // Catch-all
  // This is optional, but if present it must be the last
  //'*': NotFound,
}

export default routes
