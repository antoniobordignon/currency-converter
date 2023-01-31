import { GridMoney } from './components/GridMoney'
import { Header } from './components/Header'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <Header />
      <GridMoney />
    </div>
  )
}
