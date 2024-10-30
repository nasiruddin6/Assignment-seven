import './Banner.css';
import bannermain from '../assets/images/banner-main.png'
const Banner = ({AddBalance}) => {
    const Money=4000000;
    return (
        <div className='images mt-5 rounded-xl border mx-auto py-7'>
            <img className='w-{350px} mx-auto' src={bannermain} alt="" />
            <div className='text-center pt-2'>
                <h2 className='text-[35px] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <h3 className='text-[28px] text-gray-400'>Beyond Boundaries Beyond Limits</h3>
                <button  onClick={()=>AddBalance(Money)} className='border border-yellow-200 p-2 rounded-xl mt-3'>
                <button className=' p-2 border bg-yellow-400 text-black font-bold rounded-lg'>Claim Free Credit</button>

                </button>

            </div>
            
        </div>

        
    );
};

export default Banner;