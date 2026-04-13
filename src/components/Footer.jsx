import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 px-5 text-white sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Résaux sociaux</h2>
          <div className="grid gap-3 text-sm sm:text-base">
            <a className="transition hover:text-[#e99b63]" href="https://youtube.com/@stela.esport?si=f_1f1VEBPVZW6v6F" target="_blank" rel="noreferrer">Youtube</a>
            <a className="transition hover:text-[#e99b63]" href="https://discord.gg/GzbdJRjZ3k" target="_blank" rel="noreferrer">Discord</a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 text-sm sm:text-base">
            <a className="transition hover:text-[#e99b63]" href="https://www.tiktok.com/@stela.esport?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">Tiktok</a>
            <a className="transition hover:text-[#e99b63]" href="https://www.twitch.tv/stelaesport" target="_blank" rel="noreferrer">Twitch</a>
            <a className="transition hover:text-[#e99b63]" href="https://www.instagram.com/stela.esport/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Contact</h2>
          <div className="grid gap-3 text-sm sm:text-base">
            <a className="transition hover:text-[#e99b63]" href="mailto:stela.esport@gmail.com">stela.esport@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
