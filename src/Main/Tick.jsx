import PropTypes  from "prop-types";
import { MdDelete } from "react-icons/md";
const Tick = ({selectedPlayers, Delete}) => {
    // console.log(player)
    const {name, img,role}=selectedPlayers

    // console.log(selectedPlayers)
    // console.log(id)
    
    return (
        <div className='shadow-xl py-5 px-3 rounded-xl flex justify-between items-center'>
            <div className="flex items-center gap-5 ">
                <div>
                    <img className="w-[70px] h-[70px] rounded-full" src={img} alt="" />
                </div>
               <div>
                <p>{name}</p>
                <small>{role}</small>
               </div>
            </div>

            {/* Remove Button  */}
            <div className="text-3xl">
                <button onClick={()=>Delete(selectedPlayers)}>
                <MdDelete />
                </button>
            </div>
        </div>
    );
};



Tick.propTypes={
    selectedPlayers:PropTypes.object,
    Delete:PropTypes.func
}
export default Tick;