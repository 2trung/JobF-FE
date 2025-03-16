import './App.css'
import Header from './component/Header'

function App() {
  return (
    <div
      className='flex flex-col w-full h-[2000px]'
      style={{
        background:
          'linear-gradient(90deg, rgba(208,208,251,1) 2%, rgba(228,221,250,1) 20%, rgba(213,236,251,1) 89%)',
      }}
    >
      <Header />
      <div className='flex-grow'></div>
    </div>
  )
}

export default App
