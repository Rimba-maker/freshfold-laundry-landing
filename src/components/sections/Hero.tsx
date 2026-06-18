import { motion } from 'framer-motion';
import { Truck, Package, ShieldCheck, DeviceMobileCamera } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const trustBadges = [
  { icon: Truck, text: 'Pickup-Delivery Gratis' },
  { icon: Package, text: '12.000+ Order/Bulan' },
  { icon: ShieldCheck, text: 'Garansi Hilang/Rusak' },
  { icon: DeviceMobileCamera, text: 'Track Order via App' },
];

export default function Hero() {
  return (
    <section
      id="hero-section"
      style={{
        backgroundColor: 'var(--color-canvas-warm)',
        paddingTop: '140px',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position:'absolute', top:'-10%', right:'-5%', width:'600px', height:'600px', background:'radial-gradient(circle, rgba(255,56,92,0.06) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-10%', left:'-5%', width:'400px', height:'400px', background:'radial-gradient(circle, rgba(83,58,253,0.04) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

      <div className="container-fresh">
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <span className="section-eyebrow">Jasa Laundry Jakarta & Jabodetabek</span>
          </motion.div>

          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--color-ink)', marginTop: '16px', marginBottom: '20px' }}
          >
            Laundry Tanpa Ribet.{' '}
            <span style={{ color: 'var(--color-primary)' }}>Kami Yang Jemput,</span>{' '}
            Kami Yang Antar.
          </motion.h1>

          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.6, color: 'var(--color-body-text)', maxWidth: '600px', margin: '0 auto 36px' }}
          >
            Layanan laundry kiloan, satuan, express, dan dry cleaning dengan pickup-delivery gratis di Jabodetabek. Bersih, harum, rapi — sampai depan pintu.
          </motion.p>

          <motion.div
            custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="hero-ctas"
            style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap', marginBottom:'48px' }}
          >
            <a href="#booking" className="btn-primary" style={{ fontSize:'16px', padding:'16px 32px' }}>
              Order Pickup Sekarang →
            </a>
            <a href="#pricing" className="btn-secondary" style={{ fontSize:'16px', padding:'16px 32px' }}>
              Cek Pricing
            </a>
          </motion.div>

          {/* Trust Badges dengan Phosphor Icons */}
          <motion.div
            custom={4} initial="hidden" animate="visible" variants={fadeUp}
            style={{ display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap' }}
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.text} className="trust-badge">
                  <Icon weight="duotone" size={18} color="var(--color-primary)" />
                  <span style={{ fontSize:'13px', fontWeight:500 }}>{badge.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="hero-preview"
          initial={{ opacity:0, y:40, scale:0.97 }}
          animate={{ opacity:1, y:0, scale:1 }}
          transition={{ duration:0.8, ease:'easeOut', delay:0.5 }}
          style={{ marginTop:'64px', borderRadius:'20px', overflow:'hidden', boxShadow:'var(--shadow-panel)', maxWidth:'900px', margin:'64px auto 0', border:'1px solid var(--color-border-soft)', aspectRatio:'16/7' }}
        >
          <img
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=80&auto=format&fit=crop"
            alt="Laundry bersih harum FreshFold"
            style={{ width:'100%', height:'100%', objectFit:'cover' }}
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}
