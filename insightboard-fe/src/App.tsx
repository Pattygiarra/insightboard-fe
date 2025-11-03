import './App.css'
import StatsChart from './components/StatsChart'
import { Provider } from 'react-redux'
import {store} from './store'

function App() {

  return (
    <Provider store={store}>
      <StatsChart />
    </Provider>
  )
}

export default App
