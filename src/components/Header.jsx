import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  // Simple function to toggle the mobile menu
  const toggleMobileMenu = () => {
    // Get the Moble Menu Element
    const mobileMenu = document.getElementById('mobileMenu')

    // If it has the 'hidden' class, remove it . otherwise, add it
    if(mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  }

  return (
    <header className="sticky top-0 z-50 relative flex justify-between items-center py-4 px-4  lg:px-20">

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="px-12"
      >
        <img src={`${import.meta.env.BASE_URL}vite.svg`} alt="STELA.ESPORT Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Navigation (centree) */}
      <nav className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
        <Link
          to="/accueil"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50 relative"
        >
          ACCEUIL
        </Link>

        <Link
          to="/nous-rejoindre"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50 relative"
        >
          NOUS-REJOINDRE
        </Link>

        <Link
          to="/tournois"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50 relative"
        >
          TOURNOIS
        </Link>

      </nav>

      {/* Mobile Menu Botton - Visible only on Mobile */}
      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i className='bx bx-menu'></i>
      </button>

      {/* Mobile Menu - Hidden by default */}
      <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
        <nav className='flex flex-col gap-6 items-center'>
          <Link
            to="/reseaux"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            RESEAUX <i className='bx bx-link-external'></i>
          </Link>

          <Link
            to="/accueil"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50"
          >
            ACCEUIL
          </Link>

          <Link
            to="/nous-rejoindre"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50"
          >
            NOUS-REJOINDRE
          </Link>

          <Link
            to="/tournois"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50"
          >
            TOURNOIS
          </Link>

        </nav>
      </div>

    </header>
  )
}

export default Header
