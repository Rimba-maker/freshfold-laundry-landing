import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  WashingMachine, Wind, Lightning, Rocket, CoatHanger, Package,
} from '@phosphor-icons/react';

const services = [
  {
    Icon: WashingMachine,
    title: 'Cuci Kiloan',
    price: 'Mulai Rp 8.000 / kg',
    detail: 'Min 3 kg • Selesai 2-3 hari',
    desc: 'Cuci, kering, lipat (no setrika)',
    tag: 'Pakaian harian, kaos, jeans',
    color: '#fff0f3',
    accent: 'var(--color-primary)',
  },
  {
    Icon: Wind,
    title: 'Cuci Setrika',
    price: 'Mulai Rp 12.000 / kg',
    detail: 'Min 3 kg • Selesai 2-3 hari',
    desc: 'Cuci, kering, lipat, setrika rapi',
    tag: 'Kemeja kerja, celana formal',
    color: '#f0f4ff',
    accent: '#533afd',
  },
  {
    Icon: Lightning,
    title: 'Express 24 Jam',
    price: 'Mulai Rp 18.000 / kg',
    detail: 'Selesai dalam 24 jam',
    desc: 'Termasuk setrika',
    tag: 'Urgent, business trip',
    color: '#fff8f0',
    accent: '#ff8c00',
  },
  {
    Icon: Rocket,
    title: 'Super Express 8 Jam',
    price: 'Mulai Rp 25.000 / kg',
    detail: 'Selesai 8 jam',
    desc: 'Drop pagi, kembali sore. Termasuk setrika',
    tag: 'Emergency',
    color: '#f0fff4',
    accent: '#10b981',
  },
  {
    Icon: CoatHanger,
    title: 'Dry Cleaning',
    price: 'Mulai Rp 55.000',
    detail: 'Selesai 3-4 hari',
    desc: 'Jas, gaun pesta, kebaya — perawatan khusus',
    tag: 'Pakaian premium & formal',
    color: '#faf0ff',
    accent: '#7c3aed',
  },
  {
    Icon: Package,
    title: 'Cuci Satuan Special',
    price: 'Mulai Rp 25.000',
    detail: 'Selesai 3-4 hari',
    desc: 'Sweater, coat, boneka, bed cover',
    tag: 'Item besar & spesial',
    color: '#f0f9ff',
    accent: '#0ea5e9',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} style={{ backgroundColor: 'var(--color-canvas)', paddingBlock: '96px' }}>
      <div className="container-fresh">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="section-eyebrow">Layanan Kami</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Layanan FreshFold
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-muted)', maxWidth: '480px', margin: '0 auto' }}>
            Mulai dari pakaian harian sampai item spesial — semua kami handle.
          </p>
        </motion.div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  backgroundColor: 'var(--color-canvas)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '14px',
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', backgroundColor:s.accent, borderRadius:'14px 14px 0 0' }} />

                {/* Phosphor Icon dalam colored box */}
                <div style={{ width:'52px', height:'52px', borderRadius:'12px', backgroundColor:s.color, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px' }}>
                  <Icon weight="duotone" size={28} color={s.accent} />
                </div>

                <h3 style={{ fontSize:'18px', fontWeight:700, marginBottom:'4px', color:'var(--color-ink)' }}>{s.title}</h3>
                <p style={{ fontSize:'20px', fontWeight:700, color:s.accent, marginBottom:'6px' }}>{s.price}</p>
                <p style={{ fontSize:'13px', color:'var(--color-muted)', marginBottom:'10px' }}>{s.detail}</p>
                <p className="service-desc" style={{ fontSize:'14px', color:'var(--color-body-text)', marginBottom:'14px', lineHeight:1.5 }}>{s.desc}</p>

                <div className="service-tag" style={{ display:'inline-flex', alignItems:'center', gap:'4px', backgroundColor:s.color, color:s.accent, fontSize:'12px', fontWeight:600, padding:'4px 10px', borderRadius:'9999px' }}>
                  Cocok untuk: {s.tag}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
