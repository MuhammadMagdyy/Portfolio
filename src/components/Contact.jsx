import { useState, useRef, useEffect } from 'react'; // Added useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import HeroBackground from './HeroBackground';
export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Initialize EmailJS once when the component mounts
  useEffect(() => {
    emailjs.init("o2BgROCjrz-ZdRJeV");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_6votd0p', 
      'template_jpsj0fv', 
      formRef.current, 
      'o2BgROCjrz-ZdRJeV'
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        setIsSubmitting(false);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);
    }, (error) => {
        // Detailed error logging to help you debug
        console.error('EmailJS FAILED...', error);
        setIsSubmitting(false);
        alert(`Transmission failed: ${error.text}. Please try again.`);
    });
  };

  return (
    
      
    <section id="contact" className="dark:bg-[#030303] bg-white py-24 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <HeroBackground />
      <div className="max-w-[700px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight dark:text-white text-zinc-900 mb-4">
            Let's build <span className="text-cyan-500">together.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-body text-sm">
            Direct Line: <span className="text-zinc-800 dark:text-zinc-200 font-mono">iimuhammadmagdy@gmail.com</span>
          </p>
        </motion.div>

        <div className="relative group">
          {/* Decorative Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[2.5rem] opacity-20 group-hover:opacity-40 transition duration-1000 blur-sm"></div>
          
          <div className="relative dark:bg-zinc-900/90 bg-zinc-50/80 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-12 border dark:border-white/5 border-black/5 shadow-2xl">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  ref={formRef}
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={sendEmail}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        name="user_name" // Matches {{user_name}} in template
                        className="w-full bg-white/5 dark:bg-zinc-800/30 border dark:border-zinc-700/50 border-zinc-200 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all dark:text-white" 
                        placeholder="Adel Shakl" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        name="user_email" // Matches {{user_email}} in template
                        className="w-full bg-white/5 dark:bg-zinc-800/30 border dark:border-zinc-700/50 border-zinc-200 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all dark:text-white" 
                        placeholder="hello@example.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      name="message" // Matches {{message}} in template
                      className="w-full bg-white/5 dark:bg-zinc-800/30 border dark:border-zinc-700/50 border-zinc-200 rounded-2xl px-5 py-5 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all dark:text-white resize-none" 
                      placeholder="Briefly describe your project..." 
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="relative w-full group overflow-hidden rounded-2xl bg-zinc-900 dark:bg-white p-5 flex items-center justify-center gap-3 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity" />
                    
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="font-bold text-sm text-white dark:text-black uppercase tracking-widest">Transmit Message</span>
                        <Send size={16} className="text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="relative inline-block mb-6">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 size={40} className="text-emerald-500" />
                    </motion.div>
                    <Sparkles className="absolute -top-2 -right-2 text-cyan-400 animate-pulse" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white mb-2 tracking-tight">Transmission Received</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}