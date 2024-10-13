import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import header1 from '../../../../public/images/wallpaperflare.com_wallpaper.jpg';
import header2 from '../../../../public/images/cover-2.jpg';
import header3 from '../../../../public/images/cover-3.jpg';
import Navbar from '../Navbar/Navbar';
import '../../../Styles/Styles.css';

const Header = () => {
    return (
        <div className="w-full mx-auto flex flex-col">
            <div className='relative w-full flex flex-col items-center justify-center'>
                {/* Hero Swiper Section */}
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000, // 3 seconds delay
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true} // Infinite loop
                    className="w-full sm:h-[500px] md:h-[700px] lg:h-[800px]" // Set a fixed height for the Swiper
                >
                    <SwiperSlide>
                        <img className='w-full h-full object-cover' src={header1} alt="First Banner" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full object-cover' src={header2} alt="Second Banner" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full object-cover' src={header3} alt="Third Banner" />
                    </SwiperSlide>
                </Swiper>

                {/* Overlay Content */}
                <div className='px-12 flex flex-col md:gap-12 lg:gap-12 w-full absolute top-0 z-10 space-y-3'>
                    <Navbar />

                    {/* Web Heading */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-[30px] lg:text-[75px] text-center text-white playfair'>
                            Eco Wonderland <span className='hidden md:block lg:block'>Tourist Management</span>
                        </h1>
                        <p className='font-normal text-[15px] lg:text-[23px] text-center text-white mulish lg:bg-gray-700 lg:py-2'>
                            Better to see something once than hear about it a thousand times!
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='w-full h-fit mx-auto flex lg:flex-row justify-center gap-4 mulish'>
                        <button className='w-[380px] border border-white p-3 text-[20px] text-black py-1 bg-white hover:bg-transparent hover:text-white md:w-fit md:bg-white md:hover:bg-transparent md:hover:text-white lg:w-fit lg:bg-transparent lg:hover:bg-white lg:text-white lg:hover:text-black'>
                            Explore
                        </button>
                        <button className='w-[380px] border border-white p-3 text-[20px] text-black py-1 bg-white hover:bg-transparent hover:text-white md:w-fit md:bg-white md:hover:bg-transparent md:hover:text-white lg:w-fit lg:bg-transparent lg:hover:bg-white lg:text-white lg:hover:text-black'>
                            Join with us
                        </button>
                    </div>
                </div>
            </div>

             {/* floating text div */}
             <div className='z-20 my-24 md:mb-24 lg:mb-40 md:relative lg:relative w-10/12 md:w-10/12 lg:w-10/12 bg-red-400  mx-auto'>
                <div className='p-8   md:absolute md:-top-32 lg:absolute lg:-top-32 bg-[#fff]  w-full mx-auto drop-shadow-xl'>
                    <h1 className='mb-6 text-[#3A3A3A] text-[20px] lg:text-[30px] text-center playfair'>Your Ultimate Sustainable Travel Guide Experience</h1>
                    <p className='block text-[#3a3a3adc] text-[14px] lg:text-[15px] lg:hidden mulish'>Embark on a transformative journey with Eco Wonderland, the leading tourist management platform dedicated to sustainable travel, immersive nature experiences, and fostering environmental stewardship on a global scale.</p>
                    <p className='text-[#3a3a3adc]  text-[14px] lg:text-[17px] hidden md:hidden lg:block  mulish  '>Eco Wonderland is your gateway to a world of eco-conscious travel, offering a blend of breathtaking landscapes, cultural richness, and sustainable experiences. Explore our curated destinations and embark on transformative journeys that prioritize environmental preservation, community engagement, and authentic cultural interactions, making every trip an enriching and responsible adventure.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;


// import header from '../../../../public/images/wallpaperflare.com_wallpaper.jpg';
// import Navbar from '../Navbar/Navbar';
// import '../../../Styles/Styles.css'
// // import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div className="w-full mx-auto flex flex-col">
//             <div className='relative w-full flex flex-col items-center justify-center'>
//                 <img className='w-full' src={header} alt="" />
//                 <div className='px-12 flex flex-col md:gap-12 lg:gap-12 w-full absolute top-0 space-y-3'>
//                     <Navbar></Navbar>
//                     {/* web heading */}
//                     <div className='flex flex-col gap-5'>
//                         <h1 className='font-bold text-[30px] lg:text-[75px] text-center text-white playfair '>Eco Wonderland <span className='hidden md:block lg:block'>Tourist Management</span> </h1>
//                         <p className='font-normal text-[15px]  lg:text-[23px] text-center text-white mulish lg:bg-gray-700 lg:py-2'>Better to see something once than hear about it a thousand times!</p>
//                     </div>
//                     {/* btn */}
//                     <div className=' w-full h-fit mx-auto flex lg:flex lg:flex-row justify-center gap-4 mulish '>
//                         <button className=' w-[380px] border border-white p-3 text-[20px] text-black py-1 bg-white hover:bg-transparent hover:text-white md:w-fit md:bg-white md:hover:bg-transparent md:hover:text-white lg:w-fit lg:bg-transparent lg:hover:bg-white lg:text-white lg:hover:text-black'>Explore</button>
//                         <button className=' w-[380px] border border-white p-3 text-[20px] text-black py-1 bg-white hover:bg-transparent hover:text-white md:w-fit md:bg-white md:hover:bg-transparent md:hover:text-white lg:w-fit lg:bg-transparent lg:hover:bg-white lg:text-white lg:hover:text-black'>Join with us</button>
//                     </div>
//                 </div>
//             </div>
//             {/* floating text div */}
//             <div className='my-12 md:mb-24 lg:mb-40 md:relative lg:relative w-10/12 md:w-10/12 lg:w-10/12 bg-red-400  mx-auto'>
//                 <div className='p-8   md:absolute md:-top-32 lg:absolute lg:-top-32 bg-[#fff]  w-full mx-auto drop-shadow-xl'>
//                     <h1 className='mb-6 text-[#3A3A3A] text-[20px] lg:text-[30px] text-center playfair'>Your Ultimate Sustainable Travel Guide Experience</h1>
//                     <p className='block text-[#3a3a3adc] text-[14px] lg:text-[15px] lg:hidden mulish'>Embark on a transformative journey with Eco Wonderland, the leading tourist management platform dedicated to sustainable travel, immersive nature experiences, and fostering environmental stewardship on a global scale.</p>
//                     <p className='text-[#3a3a3adc]  text-[14px] lg:text-[17px] hidden md:hidden lg:block  mulish  '>Eco Wonderland is your gateway to a world of eco-conscious travel, offering a blend of breathtaking landscapes, cultural richness, and sustainable experiences. Explore our curated destinations and embark on transformative journeys that prioritize environmental preservation, community engagement, and authentic cultural interactions, making every trip an enriching and responsible adventure.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;


