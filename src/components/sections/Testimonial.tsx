import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'Sebagai dual-income couple, FreshFold game changer. Order via app jam 8 malam, jemput jam 9, balik next day rapi. Worth every rupiah.',
    name: 'Andi & Sari',
    role: 'Jakarta Selatan',
    avatar: '👫',
    rating: 5,
  },
  {
    quote: 'Anak kos di Jakarta, FreshFold weekly pass solve semua. 250k/minggu vs cuci sendiri jauh lebih praktis dan hemat waktu.',
    name: 'Bayu',
    role: 'Mahasiswa, Margonda Depok',
    avatar: '🎓',
    rating: 5,
  },
  {
    quote: 'Hotel saya kontrak bulanan dengan FreshFold sudah 2 tahun. Konsistensi quality terjaga, never miss schedule, customer service responsif.',
    name: 'Pak Reza',
    role: 'GM Hotel Boutique BSD',
    avatar: '🏨',
    rating: 5,
  },
  {
    quote: 'Pernah ada kemeja branded saya rusak (tidak sengaja oleh tim). FreshFold tanpa drama langsung kompensasi sesuai kebijakan. Trust dibangun dari handle problem.',
    name: 'Linda',
    role: 'Customer 3+ tahun',
    avatar: '👩',
    rating: 5,
  },
];

export default function Testimonial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{ backgroundColor: 'var(--color-canvas-soft)', paddingBlock: '96px' }}
    >
      <div className="container-fresh">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="section-eyebrow">Cerita Nyata</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Cerita Customer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                backgroundColor: 'var(--color-canvas)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <span key={i} style={{ color: '#222', fontSize: '16px' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'var(--color-ink)',
                fontStyle: 'italic',
                marginBottom: '28px',
                fontWeight: 400,
              }}>
                "{testimonials[active].quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-canvas-soft)',
                  border: '2px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
                }}>
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-ink)' }}>
                    {testimonials[active].name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: i === active ? 'var(--color-primary)' : 'var(--color-border)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  padding: 0,
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
