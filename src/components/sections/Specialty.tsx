import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sneaker, Bag, Bed, FrameCorners, Rug, CoatHanger } from '@phosphor-icons/react';

const specialties = [
  {
    Icon: Sneaker,
    title: 'Sepatu',
    subtitle: 'Sneaker, Leather, Suede',
    features: ['Deep cleaning + deodorize', 'Color refresh', 'Sol whitening'],
    price: 'Rp 35k - 85k',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&auto=format&fit=crop',
    accent: '#ff385c',
  },
  {
    Icon: Bag,
    title: 'Tas & Dompet',
    subtitle: 'Branded & Premium',
    features: ['Leather care', 'Stain removal', 'Conditioning'],
    price: 'Rp 50k - 250k',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80&auto=format&fit=crop',
    accent: '#7c3aed',
  },
  {
    Icon: Bed,
    title: 'Bed Cover & Sprei',
    subtitle: 'Semua ukuran',
    features: ['Dust mite treatment', 'Sanitize wash', 'Lipat rapi'],
    price: 'Rp 35k - 80k',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80&auto=format&fit=crop',
    accent: '#0ea5e9',
  },
  {
    Icon: FrameCorners,
    title: 'Gorden',
    subtitle: 'Per panel',
    features: ['Pickup-takedown (+Rp 100k)', 'Deep clean + iron', 'All materials'],
    price: 'Rp 25k / panel',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80&auto=format&fit=crop',
    accent: '#f59e0b',
  },
  {
    Icon: Rug,
    title: 'Karpet',
    subtitle: 'Per meter persegi',
    features: ['Shampoo + steam clean', 'Deodorize', 'Antibacterial finish'],
    price: 'Rp 35k / m²',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop',
    accent: '#10b981',
  },
  {
    Icon: CoatHanger,
    title: 'Jas & Pakaian Formal',
    subtitle: 'Dry cleaning special',
    features: ['Steam press', 'Hanger bag included', 'Garansi rapih'],
    price: 'Mulai Rp 55k',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80&auto=format&fit=crop',
    accent: '#1c1e54',
  },
];

export default function Specialty() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="specialty" ref={ref} style={{ backgroundColor: 'var(--color-canvas)', paddingBlock: '96px' }}>
      <div className="container-fresh">
        <motion.div className="section-head" initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:'56px' }}>
          <span className="section-eyebrow">Perawatan Khusus</span>
          <h2 style={{ fontSize:'clamp(28px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:'12px' }}>Laundry Specialty</h2>
          <p style={{ fontSize:'17px', color:'var(--color-muted)', maxWidth:'440px', margin:'0 auto' }}>Untuk item yang butuh perhatian khusus.</p>
        </motion.div>

        <div className="specialty-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'24px' }}>
          {specialties.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity:0, y:32 }}
                animate={inView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.5, delay: i * 0.08 }}
                whileHover={{ y:-6 }}
                style={{ backgroundColor:'var(--color-canvas)', border:'1px solid var(--color-border)', borderRadius:'14px', overflow:'hidden' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                {/* Image */}
                <div className="specialty-img" style={{ height:'180px', overflow:'hidden', position:'relative' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.3s ease' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                  />
                  {/* Icon badge overlay */}
                  <div style={{ position:'absolute', top:'12px', left:'12px', backgroundColor:'rgba(255,255,255,0.95)', borderRadius:'10px', width:'40px', height:'40px', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.12)' }}>
                    <Icon weight="duotone" size={22} color={item.accent} />
                  </div>
                </div>

                <div className="specialty-card-body" style={{ padding:'20px' }}>
                  <h3 style={{ fontSize:'17px', fontWeight:700, marginBottom:'2px', color:'var(--color-ink)' }}>{item.title}</h3>
                  <p style={{ fontSize:'13px', color:'var(--color-muted)', marginBottom:'12px' }}>{item.subtitle}</p>
                  <ul className="specialty-features" style={{ listStyle:'none', padding:0, margin:'0 0 14px', display:'flex', flexDirection:'column', gap:'6px' }}>
                    {item.features.map(f => (
                      <li key={f} style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'13px', color:'var(--color-body-text)' }}>
                        <span style={{ color:'var(--color-success)', fontWeight:700 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ borderTop:'1px solid var(--color-border-soft)', paddingTop:'12px' }}>
                    <span style={{ fontSize:'16px', fontWeight:700, color: item.accent }}>{item.price}</span>
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
