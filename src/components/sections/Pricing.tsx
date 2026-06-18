import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import {
  Van, DeviceMobileCamera, Drop, ShieldCheck, Leaf, ClockCountdown,
} from '@phosphor-icons/react';

const pricingRows = [
  { service: 'Cuci Kiloan (no setrika)', price: 'Rp 8.000 / kg', timeline: '2-3 hari' },
  { service: 'Cuci Setrika', price: 'Rp 12.000 / kg', timeline: '2-3 hari' },
  { service: 'Express 24 jam', price: 'Rp 18.000 / kg', timeline: '24 jam' },
  { service: 'Super Express 8 jam', price: 'Rp 25.000 / kg', timeline: '8 jam' },
  { service: 'Dry Cleaning Jas', price: 'Rp 65.000', timeline: '3-4 hari' },
  { service: 'Dry Cleaning Gaun', price: 'Rp 85.000', timeline: '3-4 hari' },
  { service: 'Sweater', price: 'Rp 25.000', timeline: '3 hari' },
  { service: 'Coat', price: 'Rp 45.000', timeline: '4 hari' },
  { service: 'Bed cover queen/king', price: 'Rp 35.000 - 50.000', timeline: '3 hari' },
  { service: 'Sepatu sneakers', price: 'Rp 35.000', timeline: '3-5 hari' },
  { service: 'Tas (small/medium/large)', price: 'Rp 50k - 150k', timeline: '5-7 hari' },
  { service: 'Gorden per panel', price: 'Rp 25.000', timeline: '5-7 hari' },
  { service: 'Karpet per m²', price: 'Rp 35.000', timeline: '7 hari' },
];

const uspItems = [
  { Icon: Van,                title: 'Pickup-Delivery Gratis', desc: 'Tidak perlu antar-jemput sendiri', color: '#fff0f3', accent: 'var(--color-primary)' },
  { Icon: DeviceMobileCamera, title: 'Order via App',          desc: 'Schedule, track, pay — semua di app', color: '#f0f4ff', accent: '#533afd' },
  { Icon: Drop,               title: 'Detergent Premium',      desc: 'Hypoallergenic, gentle, harum tahan lama', color: '#f0f9ff', accent: '#0ea5e9' },
  { Icon: ShieldCheck,        title: 'Garansi Hilang/Rusak',  desc: 'Kompensasi 10x harga laundry, max Rp 500k/item', color: '#f0fff4', accent: '#10b981' },
  { Icon: Leaf,               title: 'Eco-Friendly Process',  desc: 'Hemat air 40%, biodegradable detergent', color: '#f0fdf4', accent: '#16a34a' },
  { Icon: ClockCountdown,     title: 'On-Time Guarantee',     desc: 'Telat? 20% off order Anda', color: '#fff8f0', accent: '#ff8c00' },
];

export default function PricingAndWhy() {
  const pricingRef = useRef(null);
  const whyRef = useRef(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: '-60px' });
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' });

  return (
    <>
      {/* === PRICING (Stripe-style) === */}
      <section id="pricing" ref={pricingRef} style={{ backgroundColor: 'var(--color-canvas)', paddingBlock: '96px' }}>
        <div className="container-fresh">
          <motion.div className="section-head" initial={{ opacity:0, y:24 }} animate={pricingInView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:'48px' }}>
            <span className="section-eyebrow">Transparan & Jelas</span>
            <h2 style={{ fontSize:'clamp(28px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:'12px' }}>Pricing Transparent</h2>
            <p style={{ fontSize:'17px', color:'var(--color-muted)', maxWidth:'440px', margin:'0 auto' }}>Harga di awal. No hidden fee. Bayar setelah selesai.</p>
          </motion.div>

          {/* Outer: scroll wrapper — overflow:hidden di dalam tidak bisa scroll sendiri */}
          <div style={{ width:'100%', maxWidth:'800px', margin:'0 auto', overflowX:'auto', WebkitOverflowScrolling:'touch' } as React.CSSProperties}>
          <motion.div initial={{ opacity:0, y:32 }} animate={pricingInView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay:0.1 }} style={{ border:'1px solid var(--color-border)', borderRadius:'16px', overflow:'hidden', boxShadow:'var(--shadow-panel)', minWidth:'520px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr auto auto', backgroundColor:'var(--color-navy)', padding:'14px 24px', gap:'24px' }}>
              <span style={{ fontSize:'13px', fontWeight:700, color:'rgba(255,255,255,0.7)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Layanan</span>
              <span style={{ fontSize:'13px', fontWeight:700, color:'rgba(255,255,255,0.7)', textTransform:'uppercase', letterSpacing:'0.06em', textAlign:'right', minWidth:'120px' }}>Harga</span>
              <span style={{ fontSize:'13px', fontWeight:700, color:'rgba(255,255,255,0.7)', textTransform:'uppercase', letterSpacing:'0.06em', textAlign:'right', minWidth:'80px' }}>Waktu</span>
            </div>
            {pricingRows.map((row, i) => (
              <div key={row.service} style={{ display:'grid', gridTemplateColumns:'1fr auto auto', padding:'14px 24px', gap:'24px', borderBottom: i < pricingRows.length - 1 ? '1px solid var(--color-border-soft)' : 'none', backgroundColor: i % 2 === 0 ? 'var(--color-canvas)' : 'var(--color-canvas-soft)', alignItems:'center' }}>
                <span style={{ fontSize:'15px', color:'var(--color-ink)', fontWeight:500 }}>{row.service}</span>
                <span style={{ fontSize:'15px', fontWeight:700, color:'var(--color-primary)', textAlign:'right', minWidth:'120px' }}>{row.price}</span>
                <span style={{ fontSize:'13px', color:'var(--color-muted)', textAlign:'right', minWidth:'80px' }}>{row.timeline}</span>
              </div>
            ))}
            <div style={{ backgroundColor:'rgba(255,56,92,0.05)', borderTop:'1px solid var(--color-primary-muted)', padding:'14px 24px', display:'flex', alignItems:'center', gap:'10px' }}>
              <Van weight="duotone" size={22} color="var(--color-primary)" />
              <span style={{ fontSize:'14px', fontWeight:600, color:'var(--color-primary)' }}>Free pickup-delivery untuk order &gt; Rp 30.000</span>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* === WHY FRESHFOLD === */}
      <section id="why" ref={whyRef} style={{ backgroundColor: 'var(--color-canvas-warm)', paddingBlock: '96px' }}>
        <div className="container-fresh">
          <motion.div className="section-head" initial={{ opacity:0, y:24 }} animate={whyInView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:'56px' }}>
            <span className="section-eyebrow">Kenapa FreshFold</span>
            <h2 style={{ fontSize:'clamp(28px, 3.5vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:'12px' }}>
              Kenapa 12.000+ Customer<br />Pilih FreshFold
            </h2>
          </motion.div>

          <div className="usp-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'20px' }}>
            {uspItems.map((item, i) => {
              const Icon = item.Icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity:0, y:28 }}
                  animate={whyInView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.5, delay: i * 0.08 }}
                  whileHover={{ y:-4 }}
                  style={{ backgroundColor:'var(--color-canvas)', border:'1px solid var(--color-border)', borderRadius:'14px', padding:'28px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ width:'48px', height:'48px', borderRadius:'12px', backgroundColor:item.color, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'14px' }}>
                    <Icon weight="duotone" size={26} color={item.accent} />
                  </div>
                  <h3 style={{ fontSize:'17px', fontWeight:700, marginBottom:'8px', color:'var(--color-ink)' }}>{item.title}</h3>
                  <p style={{ fontSize:'14px', color:'var(--color-body-text)', lineHeight:1.6 }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
