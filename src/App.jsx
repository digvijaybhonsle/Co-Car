import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import Aboutbody from './components/Aboutbody'
import Howitworks from './components/Howitworks'
// import Landingbody from './components/Landingbody'

function App() {

  return (
    <div className='bg-[#FFF] font-family-poppins'>
      <Header />
      {/* <Landingbody /> */}
      {/* <Aboutbody /> */}
      <Howitworks />
      <Footer />
    </div>
  )
}

export default App
