import './Footer.css'
import fotterLogo from '../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <div className="mt-96 ">

            <footer className='w-full pt-16 pb-8 px-16 bg-gray-400 mt-18 relative'>
                <div>
                    <div className='shaddows text-center py-20 w-8/12 mx-auto rounded-xl absolute right-56 -top-28 space-y-4'>
                    
                        <h2 className='text-4xl font-bold'>Subscribe to our Newsletter</h2>
                        <p className='text-[18px] text-gray-400'>Get the latest updates and news right in your inbox</p>
                        <input className='p-2 border rounded-lg' placeholder=' Enter your email' type="text" />
                        <button className='border bg-red-300 ml-2 text p-2 font-bold rounded-lg'>Subscribe</button>
                    </div>

                    <div className='mt-28'>
                        <img className='w-[170px] mx-auto h-{160px}' src={fotterLogo} alt="" />
                    </div>

                </div>





                <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-7'>
                       <nav className="space-y-3">
                        <h6 className="text-xl text-gray-600 font-bold" >SERVICES</h6>
                        <p>Branding</p>
                        <p>Design</p>
                        <p>Marketing</p>
                        <p>Advertisment</p>
                        </nav>
                    
                    
                        <nav className="space-y-3">
                        <h6 className="text-xl text-gray-600 font-bold">COOMPANY</h6>
                        <p>About Us</p>
                        <p>Content</p>
                        <p>Jobs</p>
                        <p>Press Kit</p>
                         </nav>
                    

                    
                        <nav className="space-y-3">
                        <h6 className="text-xl text-gray-600 font-bold">LEGAL</h6>
                        <p>Terms Of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie policy</p>
                        </nav>


                        <nav className="space-y-3">
                        <h6 className="text-xl text-gray-600 font-bold">NEWSLETTER</h6>
                        <p>Enter your Email Address</p>
                        <div className='flex gap-1'>
                        <input className="px-2 rounded-lg" placeholder="username@site.com" type="text"  />
                        <button className="rounded-lg px-4 py-2 bg-blue-500">Subscribe</button>
                        </div>
                        </nav>

                </div>
            </footer>


        </div>
    );
};

export default Footer;