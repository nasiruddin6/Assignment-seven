import PropTypes from 'prop-types';
import { FaUser,FaFlag,FaDollarSign } from 'react-icons/fa';


const Players = ({players,SelectedPlayer,isDisabled}) => {
        const {name ,img ,zella, role ,battingType , bowlingType , price ,age} = players;





    return (
        <div className='border  p-4 rounded-lg space-y-3'>
            <div>
            <img className='w-full h-[270px] rounded-xl' src={img} alt={`cover picture of the title ${name}`} />
            </div>
            <div className='flex items-center justify-between'>
            <h2 className="font-bold flex items-center text-[22px] pt-2"> <FaUser></FaUser> {name}</h2>
            <h2 className='font-semibold pt-2'>AGE :{age}</h2>
            </div>
           
           <div className='mt-2 flex justify-between'>
                <h2 className='text-center flex items-center gap-3'> <FaFlag></FaFlag> {zella}</h2>
                <p className='text-sm bg-gray-200 rounded-lg px-4 py-1 '>{role}</p>  
           </div>
                <div className='mt-2'>
                    <h2 className='border-t-2 font-bold pt-2 '>Rating</h2>

                    <div className='flex justify-between my-2 '>
                        <h2>{battingType}</h2>
                        <h2 className='text-gray-400'>{bowlingType}</h2>
                    
                        
                    </div>
                    <div className='flex items-center justify-between'>
                        <h2 className='flex items-center'>Price: <FaDollarSign></FaDollarSign> {price}</h2>
                        <button  
                        onClick={()=>SelectedPlayer(players)}
                        disabled={isDisabled.includes(players.id)}

                        
                        className='text-sm border bg-yellow-100 px-5 py-2 text-center rounded-lg'>{isDisabled.includes(players.id) ? 'Done' : 'Choose Players'}</button>
                    </div>


                </div> 
        </div>
    );
};

Players.propType = {
    players : PropTypes.object,
    SelectedPlayer:PropTypes.func,
    isDisabled:PropTypes.func
    
}

export default Players;