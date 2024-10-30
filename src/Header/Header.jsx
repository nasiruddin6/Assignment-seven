import cricketnav from '../assets/images/logo.png'
import coinnav from '../assets/images/coin.png'
import Banner from './Banner';
import PropTypes from 'prop-types';

const Header = ({MyTeamBalance, money}) => {

    

    return (
        <div>
           <div className='w-full mx-auto fixed top-0 left-0 bg-gray-200 opacity-75'>
           <nav className='flex justify-between items-center  w-11/12 mx-auto py-6'>
                <img className='w-[55px]' src={cricketnav} alt="" />
                <ul className="flex gap-4 items-center text-black">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                    <p className='border py-2 px-3 rounded-lg font-bold flex gap-2 text-black'>$ {money} coin
                        <img className='w-5 h-5' src={coinnav} alt="" />
                    </p>
                </ul>
            </nav>
           </div>

            <div className='mt-36'>
            <Banner AddBalance={MyTeamBalance}></Banner>
            </div>
        </div>
    );
};



Header.propTypes={
    MyTeamBalance:PropTypes.object,
    money:PropTypes.func

}
export default Header;