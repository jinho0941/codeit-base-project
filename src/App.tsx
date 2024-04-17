import { Form } from './components/app/form'
import { Header } from './components/app/header'
import { Logo } from './components/app/logo'
import { MobileHeader } from './components/app/mobile-header'

function App() {
  return (
    <main className='h-[100vh] bg-slate-100'>
      <Header />
      <div className='flex flex-col items-center pt-40 sm:pt-20'>
        <Logo />
        <MobileHeader />
        <Form />
      </div>
    </main>
  )
}

export default App
