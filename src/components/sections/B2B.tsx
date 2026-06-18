import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Buildings, ForkKnife, OfficeChair, Barbell, Stethoscope } from '@phosphor-icons/react';

const b2bServices = [
  { Icon: Buildings,    title: 'Hotel Linen',         desc: 'Sheets, towels, pillow cover — kontrak bulanan' },
  { Icon: ForkKnife,    title: 'F&B Uniforms',         desc: 'Seragam staff, taplak, lap dapur' },
  { Icon: OfficeChair,  title: 'Office Towel Service', desc: 'Towel pantry weekly refresh' },
  { Icon: Barbell,      title: 'Gym Towels',           desc: 'Towel members & staff' },
  { Icon: Stethoscope,  title: 'Klinik & Spa',         desc: 'Linen sanitize, gentle wash' },
];

const benefits = [
  'Dedicated account manager',
  'Custom pickup schedule',
  'Volume pricing khusus',
  'Tax invoice ready',
  'Min order 50 kg/pickup',
];

export default function B2B() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="b2b" ref={ref} style={{ backgroundColor: 'var(--color-navy)', paddingBlock: '96px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position:'absolute', top:'-20%', right:'-10%', width:'500px', height:'500px', background:'radial-gradient(circle, rgba(83,58,253,0.15) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

      <div className="container-fresh">
        <div className="layout-2col b2b-grid">
          {/* Left */}
          <motion.div className="b2b-text" initial={{ opacity:0, x:-32 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.65 }}>
            <span className="section-eyebrow" style={{ color:'var(--color-indigo-soft)' }}>Solusi Bisnis</span>
            <h2 style={{ fontSize:'clamp(28px, 3vw, 40px)', fontWeight:800, letterSpacing:'-0.03em', color:'#fff', marginBottom:'16px' }}>
              Untuk Bisnis & Korporat
            </h2>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,0.7)', lineHeight:1.7, marginBottom:'32px' }}>
              Hotel, F&B, kantor, gym — kami handle laundry bisnis skala besar dengan sistem yang andal dan harga kompetitif.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'36px' }}>
              {benefits.map((b, i) => (
                <motion.div key={b} initial={{ opacity:0, x:-16 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.4, delay: 0.15 + i * 0.07 }} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <span style={{ color:'var(--color-indigo-soft)', fontWeight:700, fontSize:'16px' }}>✓</span>
                  <span style={{ fontSize:'15px', color:'rgba(255,255,255,0.85)' }}>{b}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="#booking"
              initial={{ opacity:0, y:12 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.5, delay:0.5 }}
              whileHover={{ y:-2 }}
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', backgroundColor:'#fff', color:'var(--color-navy)', fontSize:'16px', fontWeight:700, padding:'14px 28px', borderRadius:'8px', textDecoration:'none' }}
            >
              Konsultasi B2B →
            </motion.a>
          </motion.div>

          {/* Right: service cards */}
          <motion.div className="b2b-cards" initial={{ opacity:0, x:32 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.65, delay:0.1 }} style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
            {b2bServices.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity:0, x:20 }}
                  animate={inView ? { opacity:1, x:0 } : {}}
                  transition={{ duration:0.4, delay: 0.2 + i * 0.08 }}
                  style={{ backgroundColor:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', padding:'16px 20px', display:'flex', alignItems:'center', gap:'16px', transition:'background-color 0.2s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div style={{ width:'44px', height:'44px', borderRadius:'10px', backgroundColor:'rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon weight="duotone" size={24} color="rgba(255,255,255,0.9)" />
                  </div>
                  <div>
                    <div style={{ fontSize:'15px', fontWeight:700, color:'#fff', marginBottom:'2px' }}>{s.title}</div>
                    <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.6)' }}>{s.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
