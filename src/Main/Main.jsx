import { useEffect, useState } from "react";
// import Cric from './Cric'
import Tick from "./Tick";
import Players from './Players'
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Main = ({PlayersPrice,money}) => {

    
const [blogs , setBlogs] = useState ([]);
    

  useEffect(()=>{
    fetch('Bpl.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

const [title,setTitle]=useState('Available Players')



// Selected Player 
const [selectedPlayers, setSelectedPlayers]=useState([])
const [isDisabled, setIsDisabled] = useState([]);

const SelectedPlayer=(id)=>{
    
    const IdPrice=id.price
    // console.log('nur', IdPrice)
    const newPlayer=[...selectedPlayers,id]
    if(selectedPlayers.length < 6){
        if(money>IdPrice){
        setSelectedPlayers(newPlayer)
        
        toast.success('Player Selected Successfull', {
            position: "top-right",
            autoClose: 5000, // Close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setIsDisabled([...isDisabled,id.id])
          
          
        }
        else{
            toast.error('Your Balance is not Available', {
                position: "top-right",
                autoClose: 5000, // Close after 5 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        
            } }
        else{
            toast.warn('Your 6 Player Already Add', {
                position: "top-right",
                autoClose: 5000, // Close after 5 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        
            } 
                


    const PlayerId=blogs.find(player=>player.id ===id.id)
    PlayersPrice(PlayerId)
}

// Remove Player 
    const Delete =(del)=>{
    const DeleteItem=selectedPlayers.filter(item=>item.id !== del.id)
    setSelectedPlayers(DeleteItem)
    toast.error('Remove This Player', {
        position: "top-right",
        autoClose: 5000, // Close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    
    const Available=()=>{
        const title='Available Players'
        setTitle(title)
    }

    const AddMoreAvailableButton=()=>{
        const title='Available Players'
        setTitle(title)
    }

    const Selected=()=>{

        const se='Selected Players:'
        setTitle(se)
    }
    
    return (
        <div className="">
            <div className="flex justify-between items-center my-10">
            <h2 className="font-bold
            ">{title}</h2>

                <div className="flex border  rounded-lg ">
                <button  onClick={Available} className={`px-5 py-2 rounded-sm ${title==='Available Players'&& 'bg-yellow-400'}`}>Available</button>
                <button onClick={Selected} className={`border-l px-3 py-2 rounded-sm ${title==="Selected Players:"&& 'bg-yellow-400'}`}>Selected {selectedPlayers.length}</button>
                </div>
            
            </div>

            <div className={`${title==='Selected Players:'&& "hidden"}`}>

                <div className="grid grid-cols-3 gap-10 ">
                    {
                    blogs.map(players => <Players key={players.id} players={players} SelectedPlayer={SelectedPlayer} isDisabled={isDisabled}></Players> )
                    }
                </div>
            </div>
  
                    <ToastContainer></ToastContainer>

           <div className={`${title==='Available Players'&& 'hidden'}`}>
            {
                selectedPlayers.map(man=><Tick key={man.id} selectedPlayers={man} Delete={Delete} ></Tick>)
            }
              <button onClick={AddMoreAvailableButton} className="p-3 mt-4 bg-yellow-600 rounded-lg">Add More Available</button>
           </div>
            
            
        </div>
    );
};




Main.propTypes={
    PlayersPrice:PropTypes.object,
    money:PropTypes.func
}
export default Main;