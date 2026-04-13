import { useState } from 'react';

const Tournois = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-5 py-20 gap-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">
        LES TOURNOIS
      </h1>

      {/* Section d'information: permet d'insérer des détails sur les tournois */}
      <div className="max-w-3xl text-center bg-black bg-opacity-40 p-8 rounded-lg">
        <h3 className="text-2xl font-medium mb-4">Où on joue ?</h3>
        <p className="text-gray-300 mb-6">
          Les tournois auxquels nous participons sont organisés par des structures externes.
          KITI, le manager, inscrit différents trios afin de représenter la structure lors de diverses parties privées organisées par ces structures.
          Ces tournois sont rémunérés en cas de victoire, ce qui permet de récompenser les joueurs et de contribuer au développement de notre structure.
        </p>

        {/* Sous-titre demandé : placé directement sous le paragraphe */}
        <h4 className="text-xl md:text-2xl font-medium text-[#e99b63] mb-4">
          Régles des tournois de la cypher
        </h4>
        
        {/* Bouton pour ouvrir le menu déroulant */}
        <div className="flex justify-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#e99b63] text-black rounded-full font-medium hover:scale-105 transition"
          >
            {open ? 'Fermer' : 'Voir options'}
          </button>
        </div>

        {/* Contenu du menu déroulant */}
        {open && (
          <div className="mt-4 text-left bg-black bg-opacity-60 p-4 rounded">
            <ul className="space-y-3">
              <li>
                <a href="#reglement" className="text-gray-200 hover:text-[#e99b63]">Règlement du tournoi</a>
                <div className="mt-2">
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    TOURNOIS GRATUITS – Seules les règles Standard s’appliquent.
                    TOURNOIS PAYANTS – Les règles EWC + Standard s’appliquent.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Les joueurs PC doivent être conscients que si une triche est suspectée, une vérification via caméra écran (moni-cam) et un contrôle du PC peuvent être demandés.
                    Les joueurs doivent impérativement disposer d’une caméra pour la vérification moni-cam si nécessaire, sous peine de bannissement.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    RÈGLES COMPÉTITIVES STANDARD
                    Chaque joueur doit appliquer le code d’équipe / clantag unique (fourni par e-mail ou lors de l’inscription) à son pseudo en jeu avant le début du match. Tout manquement peut entraîner une perte de points ou un forfait.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Tous les joueurs doivent enregistrer l’intégralité de leur gameplay. Les joueurs PC doivent streamer et sauvegarder les VOD, accessibles après la fin du stream. Les joueurs console doivent enregistrer des clips et les uploader sur YouTube en cas de victoire ou sur demande.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Les images peuvent être demandées à tout moment pour vérification. L’incapacité à fournir les images requises entraînera une disqualification immédiate. Toute forme de triche, d’exploitation ou d’avantage injuste entraînera une disqualification immédiate et un bannissement définitif de tous les événements CLG.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    CLG se réserve le droit de retirer tout joueur ou toute équipe sur la base des principes de fair-play ou en raison d’un historique d’utilisation de logiciels non autorisés. L’inscription ne garantit pas la participation.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    En dehors des protocoles de reset spécifiques EWC, un redémarrage de lobby n’a lieu que si plus de 25 % du lobby est déconnecté. Tous les joueurs de l’équipe doivent être présents sur Discord et dans les salons vocaux d’équipe pour participer.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    RÈGLES SPÉCIFIQUES AUX TOURNOIS EWC (applicables aux tournois payants) – incluent des restrictions strictes d’objets et des protocoles de reset. Se retirer d’un tournoi payant entraînera un bannissement.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Objets & Équipements Interdits : l’utilisation de tout objet restreint entraînera 0 point pour la map concernée. Skins interdits : Skin Terminator Endo Titanium. Atouts interdits : Tracker. Armes : seules les classes Black Ops 7 sont autorisées; les classes MWII et MWIII sont strictement interdites.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Classes interdites : tous les snipers, fusils à pompe et lanceurs (butin au sol et classes personnalisées). Létaux/Tactiques interdits : Grenades Psych, Charge de choc, C4. Séries/Objets spéciaux interdits : aucun Specialist, aucun Napalm Strike, aucun Slots.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Note UAV : Aucun Research Code (UAV avancé). L’UAV avancé est autorisé uniquement s’il est acheté dans la boutique.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Protocoles de reset : dépend du nombre de parties déjà jouées. Si l’incident survient très tôt, des règles spécifiques s’appliquent. Un crash ou une déconnexion est défini comme une sortie involontaire du client de jeu. Reset automatique si un joueur du Top 3 crash dans les deux premières minutes.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Si plusieurs parties ont déjà été jouées, les kills/points pourront être conservés au lieu d’un redémarrage selon le bug rencontré. En cas de déconnexions en cours de partie, l’équipe peut recevoir la moyenne des points obtenus sur les autres maps complétées; tous les scores de la map affectée sont annulés.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    La demande doit être soumise via ticket, avec preuve vidéo. Les décisions des admins sont définitives.
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-0">
                    ENREGISTREMENT, STREAM & COMMUNICATIONS : tous les joueurs PC doivent streamer leur gameplay. Les joueurs console (PS/Xbox) doivent enregistrer tous les matchs et les uploader sur YouTube en cas de victoire ou si les images sont demandées. Toutes les communications vocales doivent être activées dans les enregistrements. Les streamers sont conseillés d’utiliser un délai de 60 secondes. Les gagnants doivent envoyer toutes les VODs dans le salon afin de recevoir le paiement.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}

      </div>
    </section>
  );
};

export default Tournois;

