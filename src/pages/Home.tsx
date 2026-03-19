import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  Award, 
  ShieldCheck, 
  Smartphone,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Droplets,
  Package,
  Sun,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Scissors className="text-zinc-950 w-6 h-6" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tighter text-gold">BarberCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-400 hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/agendar"
            className="px-6 py-2 bg-gold text-zinc-950 font-bold rounded-sm hover:bg-gold-light transition-all hover:scale-105 text-sm uppercase tracking-tighter cursor-pointer"
          >
            Agende seu horário
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-100 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-gold border-b border-zinc-800 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <Link 
                to="/agendar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-gold text-zinc-950 font-bold rounded-sm text-center uppercase cursor-pointer"
              >
                Agende seu horário
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920" 
        alt="Barbearia BarberCraft" 
        className="w-full h-full object-cover opacity-30"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-1 barber-pole-gradient rounded-full hidden sm:block" />
          <span className="text-gold font-bold tracking-[0.3em] text-sm uppercase">Estilo & Tradição</span>
          <div className="w-16 h-1 barber-pole-gradient rounded-full hidden sm:block" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-10">
          Transforme seu estilo com a excelência <span className="text-gold-gradient">BarberCraft</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-2xl mb-12 leading-relaxed mx-auto max-w-2xl font-light">
          Onde a barbearia clássica encontra o design moderno para criar o visual perfeito para você.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to="/agendar"
            className="px-12 py-5 bg-gold text-zinc-950 font-bold rounded-sm hover:bg-gold-light transition-all transform hover:scale-105 text-center shadow-2xl shadow-gold/30 text-lg uppercase tracking-tight cursor-pointer"
          >
            Agende seu horário online
          </Link>
          <a 
            href="#services" 
            className="px-12 py-5 border border-zinc-700 text-zinc-100 font-bold rounded-sm hover:bg-zinc-800 transition-all text-center text-lg uppercase tracking-tight"
          >
            Nossos Serviços
          </a>
        </div>
      </motion.div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute left-10 bottom-10 opacity-10 hidden xl:block">
      <Scissors className="w-32 h-32 text-zinc-100 rotate-45" />
    </div>
    <div className="absolute right-10 top-24 opacity-10 hidden xl:block">
      <div className="w-20 h-80 barber-pole-gradient rounded-full blur-sm" />
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      id: "corte",
      title: "Corte Masculino",
      desc: "Cortes clássicos ou modernos, feitos com precisão e visagismo.",
      icon: <Scissors className="w-6 h-6" />,
      image: "https://drive.google.com/uc?export=view&id=17_ZyABg391_CTCkTQBOar9IddIW_PnZO"
    },
    {
      id: "barba",
      title: "Barba & Bigode",
      desc: "Modelagem, aparo e hidratação com toalha quente e cuidado com a pele.",
      icon: <User className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1593702295094-ada35bc19972?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "coloracao",
      title: "Coloração / Platinado",
      desc: "Técnicas avançadas para transformar o visual com segurança e estilo.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1599351431247-f13b283253c9?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "luzes",
      title: "Luzes & Mechas",
      desc: "Balayage e luzes com acabamento profissional para iluminar o rosto.",
      icon: <Sun className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1512690196252-741d2fd35ad0?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "tratamento",
      title: "Tratamentos & Cuidados",
      desc: "Hidratação, reconstrução capilar e tratamentos faciais exclusivos.",
      icon: <Droplets className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "pacote",
      title: "Pacotes Completos",
      desc: "Combos de corte, barba e tratamento para uma experiência completa.",
      icon: <Package className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl font-bold mb-6">Nossos Serviços</h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-light">
            Cortes, barbas e tratamentos de alto padrão para transformar seu estilo com excelência.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-gold/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-800 text-gold rounded-sm group-hover:bg-gold group-hover:text-zinc-950 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 h-12">
                  {s.desc}
                </p>
                <Link 
                  to={`/agendar?servico=${encodeURIComponent(s.title)}`}
                  className="inline-flex items-center gap-2 text-gold font-bold uppercase text-xs tracking-widest border-b border-transparent hover:border-gold pb-1 transition-all cursor-pointer"
                >
                  Agende este serviço <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-gold" />,
      title: "Profissionais Experientes",
      desc: "Mestres barbeiros com anos de mercado e constante atualização técnica."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-gold" />,
      title: "Produtos Premium",
      desc: "Utilizamos apenas as melhores marcas mundiais para sua pele e cabelo."
    },
    {
      icon: <Star className="w-10 h-10 text-gold" />,
      title: "Ambiente Acolhedor",
      desc: "Espaço climatizado, bebidas selecionadas e música de qualidade."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-gold" />,
      title: "Agendamento Rápido",
      desc: "Sistema online inteligente para marcar seu horário em segundos."
    }
  ];

  return (
    <section className="py-32 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Por que escolher BarberCraft?</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1621605815841-2941a50369c9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1593702295094-ada35bc19972?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1599351431247-f13b283253c9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512690196252-741d2fd35ad0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="gallery" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl font-bold mb-6">Nossa Galeria</h2>
            <p className="text-zinc-400 text-lg font-light">
              Confira a qualidade dos nossos cortes e o ambiente exclusivo que preparamos para você.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-4 border border-zinc-800 hover:bg-zinc-900 transition-colors rounded-full"><ChevronLeft /></button>
            <button className="p-4 border border-zinc-800 hover:bg-zinc-900 transition-colors rounded-full"><ChevronRight /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group border border-zinc-800"
            >
              <img 
                src={img} 
                alt={`Trabalho ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Scissors className="text-zinc-950 w-6 h-6" />
                </div>
                <span className="text-gold font-bold tracking-widest uppercase text-xs">Ver Detalhes</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-zinc-950 pt-32 pb-12 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <Scissors className="text-zinc-950 w-6 h-6" />
            </div>
            <span className="font-serif text-3xl font-bold text-gold">BarberCraft</span>
          </div>
          <p className="text-zinc-500 text-base leading-relaxed font-light">
            Excelência em barbearia clássica e moderna. 
            Onde cada detalhe é pensado para elevar o seu estilo e confiança.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-gold hover:text-zinc-950 hover:border-gold transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-gold hover:text-zinc-950 hover:border-gold transition-all duration-300">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-gold">Menu</h4>
          <ul className="space-y-5 text-sm text-zinc-500">
            <li><a href="#home" className="hover:text-gold transition-colors">Início</a></li>
            <li><a href="#services" className="hover:text-gold transition-colors">Nossos Serviços</a></li>
            <li><a href="#gallery" className="hover:text-gold transition-colors">Galeria</a></li>
            <li><Link to="/agendar" className="hover:text-gold transition-colors">Agendamento Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-gold">Contato</h4>
          <ul className="space-y-6 text-sm text-zinc-500">
            <li className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-zinc-300 font-bold mb-1">(11) 99999-9999</p>
                <p className="text-xs">Atendimento via WhatsApp</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-zinc-300 font-bold mb-1">Av. Principal, 1234</p>
                <p className="text-xs">Centro - São Paulo, SP</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-zinc-300 font-bold mb-1">Segunda a Sábado</p>
                <p className="text-xs">09:00 às 20:00</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-gold">Newsletter</h4>
          <p className="text-zinc-500 text-sm mb-6 font-light">Inscreva-se para receber novidades e promoções exclusivas.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="bg-zinc-900 border border-zinc-800 p-4 outline-hidden focus:border-gold transition-all text-sm text-zinc-100"
            />
            <button className="bg-zinc-100 text-zinc-950 py-3 font-bold uppercase text-xs tracking-widest hover:bg-gold transition-colors">Inscrever</button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
        <p>© 2026 BarberCraft – Todos os direitos reservados</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
          <a href="#" className="hover:text-gold transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Footer />
    </div>
  );
}
