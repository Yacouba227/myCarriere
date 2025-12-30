'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const PortfolioPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage('Merci de remplir tous les champs.');
      return;
    }

    const subject = encodeURIComponent(`Contact depuis le portfolio — ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n--\n${formData.name} — ${formData.email}`);
    window.location.href = `mailto:halidouyacouba999@gmail.com?subject=${subject}&body=${body}`;
    setFormMessage('');
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      id: 1,
      title: 'Gestion des sessions (Mémoire)',
      description: 'Base de données PostgreSQL et application web sur la gestion des sessions de conseil de la FAST.',
      image: '/images/memoire.png',
      techs: ['PostgreSQL', 'Prisma', 'Next.js', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Portfolio Template',
      description: 'Site portfolio moderne et responsive, prêt à être personnalisé et déployé sur Vercel.',
      image: '/images/portfolio.png',
      techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 3,
      title: 'Application Flutter',
      description: 'Application mobile pour la gestion de suivi scolaire (prototype "élève, enseignent, parent et admin").',
      image: '/images/suivi.jpg',
      techs: ['Flutter', 'Dart'],
    },
    {
      id: 4,
      title: 'API RESTful',
      description: 'API sécurisée avec authentification JWT, endpoints CRUD et tests automatisés.',
      image: '/images/api.png',
      techs: ['Flask', 'Pytest'],
    },
    {
      id: 5,
      title: 'App CaféTech Hub (Maquette)',
      description: 'Prototype Figma et pages marketing pour la cafétéria connectée "CaféTech Hub" à Niamey.',
      image: '/images/cafe.png',
      techs: ['Figma', 'HTML'],
    },
    {
      id: 6,
      title: 'Intra',
      description: 'Plateforme de formation numérique conçu pour la formation des développeur full stack.',
      image: '/images/intra.png',
      techs: ['Next.js 15', 'MongoDB', 'Tailwind'],
    },
  ];

  const experiences = [
    {
      year: '2023 — 2025',
      title: 'Etudiant — CS Codeloccol',
      description: 'Développeur full stack / Mobile.',
    },
    {
      year: '2024 — 2025',
      title: 'Master 2 — Génie Logiciel EPI - Niger',
      description: 'Université — Mémoire sur la gestion des sessions de la FAST.',
    },
    {
      year: '2022 — 2023',
      title: 'Licence — Génie Logiciel EPI - Niger',
      description: 'Rapport de stage sur le developpement d\'une application web de gestion de bibiliotheque numerique.',
    },
    {
      year: '2019 — 2020',
      title: 'Baccaloreat serie D',
      description: 'L\'obtention d\'un Bac scientifique serie D.',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-sm border-b border-primary-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center font-bold">
              HY
            </div>
            <div>
              <div className="font-bold">HALIDOU Yacoubou</div>
              <div className="text-xs text-muted">Développeur Web • Mobile • Fullstack</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            <a href="#about" className="text-muted hover:text-white px-3 py-2 rounded-lg">À propos</a>
            <a href="#projects" className="text-muted hover:text-white px-3 py-2 rounded-lg">Projets</a>
            <a href="#exp" className="text-muted hover:text-white px-3 py-2 rounded-lg">Expériences</a>
            <a href="#contact" className="bg-gradient-to-r from-accent to-purple-600 text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden container mx-auto px-4 py-3 border-t border-primary-800">
            <nav className="flex flex-col gap-2">
              <a 
                href="#about" 
                className="text-muted hover:text-white px-3 py-2 rounded-lg" 
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#projects" 
                className="text-muted hover:text-white px-3 py-2 rounded-lg" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Projets
              </a>
              <a 
                href="#exp" 
                className="text-muted hover:text-white px-3 py-2 rounded-lg" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Expériences
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-accent to-purple-600 text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-24 container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-primary-800 text-muted px-3 py-2 rounded-full text-sm">M2 Génie Logiciel</div>
                <div className="bg-primary-800 text-muted px-3 py-2 rounded-full text-sm">Next.js • React • Express.js</div>
                <div className="bg-primary-800 text-muted px-3 py-2 rounded-full text-sm">PostgreSQL • Prisma • MongoDB</div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-primary-800 text-muted px-3 py-2 rounded-full text-sm">Flutter • Dart</div>
                <div className="bg-primary-800 text-muted px-3 py-2 rounded-full text-sm">HTML • CSS • JavaScript</div>
                <div className="bg-primary-800 text-muted px-3 py-2 rounded-full text-sm">Analyse de données • Canvas • Figma</div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-primary-800 text-muted px-3 py-2 rounded-full text-sm">Wordpress</div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Bonjour, je suis <span className="text-accent">Halidou</span> — Développeur Fullstack
              </h1>
              <p className="text-muted mb-6 text-lg">
                Je conçois et développe des applications web et mobiles modernes,
                performantes et maintenables. Je cherche des missions / un poste
                en développement web ou fullstack.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a 
                  href="#projects" 
                  className="bg-gradient-to-r from-accent to-purple-600 text-black px-6 py-3 rounded-lg font-bold hover:opacity-90"
                >
                  Voir mes projets
                </a>
                <a 
                  href="mailto:halidouyacouba999@gmail.com" 
                  className="text-muted hover:text-white"
                >
                  Envoyer un e‑mail
                </a>
              </div>

              <div className="text-muted text-sm">
                Compétences principales : <strong>JavaScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Flutter</strong>, <strong>Wordpress</strong>
              </div>
            </div>

            <div className="bg-primary-800/50 rounded-2xl p-6 text-center">
              <div className="w-64 h-80 mx-auto bg-gradient-to-br from-gray-700 to-primary-800 rounded-xl overflow-hidden mb-4">
                <Image 
                  src="/images/profile1.jpg" 
                  alt="Profile" 
                  width={256} 
                  height={320} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold">HALIDOU</h3>
              <div className="text-muted text-sm mb-4">Développeur Web / Mobile</div>
              
              <div className="flex justify-center gap-4">
                <a href="https://github.com/Yacouba227" className="text-muted hover:text-accent">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/halidou-ali-yacoubou-71a296189/" className="text-muted hover:text-accent">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com/halidoualiyacoubou?igsh=emNqMGczaXRlNGlh" className="text-muted hover:text-accent">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12">
          <div className="bg-primary-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
            <p className="text-muted mb-6">
              Étudiant en Master 2 Génie Logiciel, je réalise un mémoire sur la
              gestion des enregistrements des nouveau-nés à l'état civil.
              Passionné par la création d'interfaces et d'API robustes, j'aime
              travailler sur des projets complets — du modèle de données
              jusqu'au frontend.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Compétences techniques</h4>
                <div className="text-muted">
                  • Frontend : HTML, CSS, JavaScript, React, Next.js<br />
                  • Mobile : Flutter<br />
                  • Backend : Python (Flask), Node.js<br />
                  • BDD : PostgreSQL, MongoDB<br />
                  • Outils : Git, Figma, VSCode <br />
                  • CMS : Wordpress <br />
                  • Autres : Analyse de données, Canvas
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Soft skills</h4>
                <div className="text-muted">
                  Communication, esprit d'équipe, gestion du temps, résolution
                  de problèmes.
                </div>
                <div className="text-muted">
                  Entrepreunariat, Design thinking, Profetionnalisme.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-primary-800/20 backdrop-blur-sm rounded-xl p-4 hover:bg-primary-800/40 transition-all"
              >
                <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-primary-800 rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={300} 
                    height={256} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-bold mb-2">{project.title}</h4>
                <p className="text-muted text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-primary-800/30 text-muted px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a 
              href="https://github.com/Yacouba227" 
              className="bg-gradient-to-r from-accent to-purple-600 text-black px-6 py-3 rounded-lg font-bold hover:opacity-90"
            >
              Voir plus de projets
            </a>
            <a 
              href="/CV professionnel halidou.pdf" 
              className="bg-primary-800 text-muted px-6 py-3 rounded-lg font-bold hover:bg-primary-700"
              download
            >
              Télécharger mon CV
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="exp" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Expériences & Formations</h2>
          <div className="bg-primary-800 rounded-xl p-6">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  <div className="min-w-[80px] text-muted">{exp.year}</div>
                  <div className="bg-primary-800/30 p-4 rounded-lg flex-1">
                    <strong>{exp.title}</strong><br />
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="bg-primary-800 rounded-xl p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-muted mb-2">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Votre nom"
                  required
                  className="w-full p-3 bg-primary-900 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-muted mb-2">E‑mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="votre.email@example.com"
                  required
                  className="w-full p-3 bg-primary-900 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm text-muted mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Écrivez votre message ici..."
                  required
                  rows={5}
                  className="w-full p-3 bg-primary-900 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="bg-gradient-to-r from-accent to-purple-600 text-black px-6 py-3 rounded-lg font-bold hover:opacity-90">
                  Envoyer
                </button>
                <div className="text-muted text-sm">
                  ou écrivez à <a href="mailto:halidouyacouba999@gmail.com" className="text-accent hover:underline">halidouyacouba999@gmail.com</a>
                </div>
              </div>

              {formMessage && (
                <div className="mt-4 text-muted text-sm">
                  {formMessage}
                </div>
              )}
            </form>

            <div className="bg-primary-800 rounded-xl p-6">
              <h4 className="font-bold mb-4">Infos</h4>
              <p className="text-muted mb-6">
                Niamey, Niger<br />
                Disponible pour stage ou emploi<br />
                Langues : Français, Anglais
              </p>

              <h4 className="font-bold mb-4">Réseaux</h4>
              <div className="flex gap-6">
                <a href="https://github.com/Yacouba227" className="text-muted hover:text-accent">
                  <FaGithub size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/halidou-ali-yacoubou-71a296189/" 
                  className="text-muted hover:text-accent"
                >
                  <FaLinkedin size={28} />
                </a>
                <a href="https://www.facebook.com/halidou.yacoubou.2025" className="text-muted hover:text-accent">
                  <FaFacebook size={28} />
                </a>
                <a href="https://wa.me/+22798094224" className="text-muted hover:text-accent">
                  <FaWhatsapp size={28} />
                </a>
                <a href="https://www.instagram.com/halidoualiyacoubou?igsh=emNqMGczaXRlNGlh" className="text-muted hover:text-accent">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-primary-900 py-6 text-center">
        <div>
          © {new Date().getFullYear()} Tech4You — Développeur Fullstack • Informaticien
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;