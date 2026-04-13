import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import 'boxicons/css/boxicons.min.css';

const NousRejoindre = () => {
  const [formData, setFormData] = useState({
    email: '',
    pseudo: '',
    styleJeu: [],
    age: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialiser EmailJS avec la clé publique
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== 'your_public_key_here') {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleStyleJeuChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          styleJeu: [...prev.styleJeu, value]
        };
      } else {
        return {
          ...prev,
          styleJeu: prev.styleJeu.filter(style => style !== value)
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation : au moins un style de jeu doit être sélectionné
    if (formData.styleJeu.length === 0) {
      setSubmitStatus('error');
      alert('⚠️ Veuillez sélectionner au moins un style de jeu.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Récupération des variables d'environnement
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Vérification que les variables sont configurées
    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id_here' || 
        templateId === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      setSubmitStatus('error');
      setIsSubmitting(false);
      alert('⚠️ EmailJS n\'est pas encore configuré. Veuillez suivre les instructions dans EMAILJS_SETUP.md');
      return;
    }

    try {
      // Adresse email de destination depuis les variables d'environnement
      const toEmail = import.meta.env.VITE_EMAIL_DESTINATION || 'fazekiti@gmail.com';
      
      console.log('Envoi EmailJS avec:', {
        serviceId,
        templateId,
        toEmail,
        pseudo: formData.pseudo
      });
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: toEmail,
          from_name: formData.pseudo,
          from_email: formData.email,
          pseudo: formData.pseudo,
          style_jeu: formData.styleJeu.join(', '),
          age: formData.age,
          message: formData.message,
        },
        publicKey
      );

      console.log('Email envoyé avec succès:', result);
      setSubmitStatus('success');
      setFormData({ email: '', pseudo: '', styleJeu: [], age: '', message: '' });
    } catch (error) {
      console.error('Erreur détaillée lors de l\'envoi:', error);
      console.error('Code d\'erreur:', error.code);
      console.error('Message d\'erreur:', error.text);
      
      // Message d'erreur plus détaillé
      let errorMessage = 'Erreur lors de l\'envoi. ';
      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Veuillez vérifier votre configuration EmailJS ou nous contacter sur Discord.';
      }
      
      setSubmitStatus('error');
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lien Discord depuis les variables d'environnement
  const discordLink = import.meta.env.VITE_DISCORD_LINK || 'https://discord.gg/EUqyFQhcbR';

  return (
    <section className="min-h-screen flex flex-col items-center justify-start py-20 px-4 md:px-8 lg:px-20 text-white">
      <div className="max-w-4xl w-full">
        {/* Titre principal */}
        <h1 
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-8 text-center"
        >
          REJOIGNEZ LA STELA
        </h1>

        {/* Texte d'introduction */}
        <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="mb-12 text-center"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
            La STELA est une équipe e-sport compétitive fondée autour de warzone et Call of Duty league.
            Nous recherchons des joueurs passionnés, motivés et déterminés à donner le meilleur d'eux-mêmes.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Si vous partagez notre passion pour la compétition et souhaitez intégrer une équipe dynamique,
            remplissez le formulaire ci-dessous ou rejoignez-nous directement sur Discord.
          </p>
        </div>

        {/* Lien Discord */}
        <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="mb-12 flex justify-center"
        >
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!discordLink || discordLink === 'https://discord.gg/GzbdJRjZ3k') {
                e.preventDefault();
                alert('Le lien Discord n\'est pas configuré. Veuillez contacter l\'administrateur.');
              }
            }}
            className="inline-flex items-center gap-3 border border-[#2a2a2a] py-3 px-8 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#5865F2] hover:border-[#5865F2] hover:shadow-[0_0_20px_rgba(88,101,242,0.5)] cursor-pointer"
          >
            <i className='bx bxl-discord-alt text-2xl'></i>
            Rejoindre notre Discord
            <i className='bx bx-link-external'></i>
          </a>
        </div>

        {/* Formulaire */}
        <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 lg:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-center text-white">
            Formulaire de candidature
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] focus:shadow-[0_0_10px_rgba(233,155,99,0.3)] transition-all"
                placeholder="votre.email@exemple.com"
              />
            </div>

            {/* Pseudo */}
            <div>
              <label htmlFor="pseudo" className="block text-sm font-medium mb-2 text-gray-300">
                Pseudo Activision (#) *
              </label>
              <input
                type="text"
                id="pseudo"
                name="pseudo"
                value={formData.pseudo}
                onChange={handleChange}
                required
                className="w-full bg-black border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] focus:shadow-[0_0_10px_rgba(233,155,99,0.3)] transition-all"
                placeholder="Votre pseudo#1234"
              />
            </div>

            {/* Style de jeu */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-300">
                Style de jeu * (minimum 1)
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    value="IGL (meneur)"
                    checked={formData.styleJeu.includes('IGL (meneur)')}
                    onChange={handleStyleJeuChange}
                    className="w-5 h-5 bg-black border-2 border-[#2a2a2a] rounded text-[#e99b63] focus:ring-2 focus:ring-[#e99b63] focus:ring-offset-2 focus:ring-offset-black cursor-pointer transition-all checked:bg-[#e99b63] checked:border-[#e99b63]"
                  />
                  <span className="text-white group-hover:text-[#e99b63] transition-colors">
                    IGL (meneur)
                  </span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    value="Support"
                    checked={formData.styleJeu.includes('Support')}
                    onChange={handleStyleJeuChange}
                    className="w-5 h-5 bg-black border-2 border-[#2a2a2a] rounded text-[#e99b63] focus:ring-2 focus:ring-[#e99b63] focus:ring-offset-2 focus:ring-offset-black cursor-pointer transition-all checked:bg-[#e99b63] checked:border-[#e99b63]"
                  />
                  <span className="text-white group-hover:text-[#e99b63] transition-colors">
                    Support
                  </span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    value="Frag"
                    checked={formData.styleJeu.includes('Frag')}
                    onChange={handleStyleJeuChange}
                    className="w-5 h-5 bg-black border-2 border-[#2a2a2a] rounded text-[#e99b63] focus:ring-2 focus:ring-[#e99b63] focus:ring-offset-2 focus:ring-offset-black cursor-pointer transition-all checked:bg-[#e99b63] checked:border-[#e99b63]"
                  />
                  <span className="text-white group-hover:text-[#e99b63] transition-colors">
                    Frag
                  </span>
                </label>
              </div>
              {formData.styleJeu.length === 0 && (
                <p className="text-red-400 text-xs mt-2">
                  Veuillez sélectionner au moins un style de jeu
                </p>
              )}
            </div>

            {/* Âge */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium mb-2 text-gray-300">
                Âge *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="13"
                max="100"
                className="w-full bg-black border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] focus:shadow-[0_0_10px_rgba(233,155,99,0.3)] transition-all"
                placeholder="Votre âge"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                Message / Présentation *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-black border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e99b63] focus:shadow-[0_0_10px_rgba(233,155,99,0.3)] transition-all resize-none"
                placeholder="Parlez-nous de vous, de votre expérience, de vos motivations..."
              />
            </div>

            {/* Message de statut */}
            {submitStatus === 'success' && (
              <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 text-green-300 text-center">
                <i className='bx bx-check-circle text-xl mr-2'></i>
                Message envoyé avec succès ! Nous vous répondrons bientôt.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 text-red-300 text-center">
                <i className='bx bx-error-circle text-xl mr-2'></i>
                Erreur lors de l'envoi. Veuillez réessayer ou nous contacter sur Discord.
              </div>
            )}

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-black py-4 px-8 rounded-full font-semibold text-lg tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,155,99,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <i className='bx bx-loader-alt bx-spin text-xl'></i>
                  Envoi en cours...
                </span>
              ) : (
                'Envoyer ma candidature'
              )}
            </button>
          </form>
        </div>

        {/* Note sur EmailJS - Affichée uniquement si non configuré */}
        {(!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
          import.meta.env.VITE_EMAILJS_SERVICE_ID === 'your_service_id_here') && (
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Formulaire :
              https://forms.gle/oz7X3nXjDTsxNGD76 (formulaire de candidature)
              <br />
              En attendant, vous pouvez nous contacter directement sur Discord.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NousRejoindre;