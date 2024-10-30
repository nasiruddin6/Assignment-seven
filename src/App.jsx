import { useState } from 'react'
import './App.css'
import Footer from './Footer/Footer'
// import Banner from './Header/Banner'
import Header from './Header/Header'
// import Cric from './Main/Cric'
import Main from './Main/Main'


function App() {


  const [money , setMoney]=useState(0)

    
    const MyTeamBalance=(tk)=>{
        const NewBalance=money+tk
        // console.log(money)
        setMoney(NewBalance)
    }


    const PlayersPrice =(player)=>{
      const pPrice=player.price

      const newPrice=money-pPrice

     if(money > pPrice){
       setMoney(newPrice)}
    }


  return (
    <div>
      
         <div className='w-11/12 mx-auto'>
         <Header MyTeamBalance={MyTeamBalance} money={money}></Header>
     
       <Main PlayersPrice={PlayersPrice} money={money}></Main>
       <div>
      
       </div>
          </div>    
       
       
       <Footer></Footer>
       
      
    </div>
  )
}

export default App
