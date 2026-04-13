import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
                

                {/* Main  Heading */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                    STELA
                    <br />
                    E-SPORT TEAMS
                </h1>

                {/* Description*/}
                <p className='text-base sm:text-lg tracking-wider text-gray-400  max-w-[25rem] lg:max-w-[30rem]'>
                    La STELA, une team e-sport compétitive fondé autour de call of duty.
                    <br />
                    Cette équipe et ouverte a tout ceux qui souhaite donnée le meilleure deux-même.
                </p>

                {/* Buttons */}
                <div className='flex gap-4 mt-12'>

                    <Link to="/nous-rejoindre" className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'>
                        Nous-Rejoindre <i className='bx bx-link-external'></i>
                    </Link>
                </div>
            </div>

      
        </main>
    );
}


export default Hero