import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DeviceMobileCamera, Van, WashingMachine, Sparkle } from '@phosphor-icons/react';

const steps = [
  {
    Icon: DeviceMobileCamera,
    number: '01',
    title: 'Order via App / WA',
    desc: 'Pilih layanan, tanggal pickup, alamat. Konfirmasi dalam 5 menit.',
    time: '< 5 menit',
  },
  {
    Icon: Van,
    number: '02',
    title: 'Tim FreshFold Pickup',
    desc: 'Kami jemput di waktu yang dipilih. Timbang di tempat, langsung dapat invoice.',
    time: 'Tepat waktu',
  },
  {
    Icon: WashingMachine,
    number: '03',
    title: 'Proses Profesional',
    desc: 'Cuci dengan detergent premium + softener. Sortir warna, suhu sesuai material.',
    time: 'Sesuai layanan',
  },
  {
    Icon: Sparkle,
    number: '04',
    title: 'Delivery Bersih Rapi',
    desc: 'Antar kembali sesuai jadwal. Pakaian terlipat rapi, harum, siap pakai.',
    time: 'Sampai pintu',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-it-works" ref={ref} style={{ backgroundColor: 'var(--color-canvas-soft)', paddingBlock: '96px' }}>
      <div className="container-fresh">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-eyebrow" style={{ color: 'var(--color-step)' }}>Cara Kerja</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
            4 Langkah, Laundry Selesai
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-muted)', maxWidth: '460px', margin: '0 auto' }}>
            Dari order sampai balik ke tangan kamu, semua kami yang handle.
          </p>
        </motion.div>

        <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0' }}>
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.15 }}
                style={{ position: 'relative', padding: '32px 24px', textAlign: 'center' }}
              >
                {/* Step number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.15 + 0.1 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-step)',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: '0 4px 12px rgba(255,79,0,0.35)',
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Phosphor Icon */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <Icon weight="duotone" size={48} color="var(--color-step)" />
                </div>

                <div className="hiw-card" style={{ backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-border)', borderRadius: '14px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-ink)' }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-body-text)', lineHeight: 1.6, marginBottom: '12px' }}>{step.desc}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(255,79,0,0.08)', color: 'var(--color-step)', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '9999px' }}>
                    ⏱ {step.time}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
