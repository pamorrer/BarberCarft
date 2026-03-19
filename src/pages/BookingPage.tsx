import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { 
  Scissors, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  Smartphone,
  ShieldCheck,
  Star,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialService = searchParams.get('servico') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    date: '',
    time: ''
  });

  const services = [
    "Corte Masculino",
    "Barba & Bigode",
    "Cabelo + Barba",
    "Coloração / Platinado",
    "Luzes & Mechas",
    "Tratamento Capilar"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, date, time } = formData;
    
    if(!name || !phone || !service || !date || !time){
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const numeroWhatsApp = '5511999999999';
    const formattedDate = date.split('-').reverse().join('/');
    const mensagem = `Olá! Meu nome é ${name}. Quero agendar um ${service} em ${formattedDate} às ${time}. Meu WhatsApp é ${phone}.`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-gold selection:text-zinc-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-400 hover:text-gold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-widest">Voltar</span>
          </button>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
              <Scissors className="text-zinc-950 w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold text-gold">BarberCraft</span>
          </Link>
          
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Reserve sua <span className="text-gold">Experiência</span>
              </h1>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Escolha o serviço desejado e o melhor horário para você. Nossa equipe está pronta para elevar seu estilo com o máximo de conforto e precisão.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Qualidade</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">Produtos premium e técnicas de visagismo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Pontualidade</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">Respeitamos seu tempo com horários precisos.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 barber-pole-gradient rounded-full blur-3xl opacity-20" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Ex: João Silva" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 outline-hidden focus:border-gold transition-all text-sm text-zinc-100 rounded-xl"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">WhatsApp</label>
                <input 
                  type="text" 
                  placeholder="(11) 99999-9999" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 outline-hidden focus:border-gold transition-all text-sm text-zinc-100 rounded-xl"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Serviço Desejado</label>
                <select 
                  required 
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 outline-hidden focus:border-gold transition-all text-sm text-zinc-100 rounded-xl appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="" disabled>Selecione um serviço</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Data</label>
                  <input 
                    type="date" 
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-zinc-950 border border-zinc-800 p-4 outline-hidden focus:border-gold transition-all text-sm text-zinc-100 rounded-xl accent-gold cursor-pointer [color-scheme:dark]"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">Horário</label>
                  <input 
                    type="time" 
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 p-4 outline-hidden focus:border-gold transition-all text-sm text-zinc-100 rounded-xl accent-gold cursor-pointer [color-scheme:dark]"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold text-zinc-950 font-bold uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-gold-light transition-all shadow-xl shadow-gold/20 mt-8 cursor-pointer flex items-center justify-center gap-3 group"
              >
                Confirmar no WhatsApp
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest">
                Seu agendamento será finalizado via WhatsApp
              </p>
            </form>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default BookingPage;
