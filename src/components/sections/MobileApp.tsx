import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CalendarBlank, Package, CreditCard, ClipboardText, Bell, Star,
} from '@phosphor-icons/react';

const features = [
  { Icon: CalendarBlank,  text: 'Schedule pickup sampai 7 hari ke depan' },
  { Icon: Package,        text: 'Real-time order tracking' },
  { Icon: CreditCard,     text: 'In-app payment (GoPay, OVO, transfer, CC)' },
  { Icon: ClipboardText,  text: 'Order history & receipts' },
  { Icon: Bell,           text: 'Notifikasi: pickup, proses, ready, delivery' },
  { Icon: Star,           text: 'Rate & review setiap order' },
];

export default function MobileApp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="app"
      ref={ref}
      style={{ backgroundColor: 'var(--color-canvas)', paddingBlock: '96px' }}
    >
      <div className="container-fresh">
        <div className="layout-2col">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <span className="section-eyebrow">Semua di Genggaman</span>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>
              Download FreshFold App
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-body-text)', lineHeight: 1.7, marginBottom: '32px' }}>
              Schedule pickup, track order real-time, pay via app, lihat history & receipt — semua di satu app.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <div style={{ width:'36px', height:'36px', borderRadius:'8px', backgroundColor:'rgba(255,56,92,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <f.Icon weight="duotone" size={20} color="var(--color-primary)" />
                  </div>
                  <span style={{ fontSize: '15px', color: 'var(--color-body-text)' }}>{f.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Store badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--color-ink)',
                  color: '#fff',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                <span style={{ fontSize: '24px' }}>🍎</span>
                <div>
                  <div style={{ fontSize: '10px', opacity: 0.7 }}>Download on the</div>
                  <div style={{ fontSize: '15px', fontWeight: 700 }}>App Store</div>
                </div>
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--color-ink)',
                  color: '#fff',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                <span style={{ fontSize: '24px' }}>▶️</span>
                <div>
                  <div style={{ fontSize: '10px', opacity: 0.7 }}>Get it on</div>
                  <div style={{ fontSize: '15px', fontWeight: 700 }}>Google Play</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Phone mockup — disembunyikan di mobile via .hide-mobile */}
          <motion.div
            className="hide-mobile"
            initial={{ opacity: 0, x: 32, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                width: '280px',
                backgroundColor: 'var(--color-ink)',
                borderRadius: '40px',
                padding: '12px',
                boxShadow: '0 32px 64px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.1)',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-canvas)',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  height: '520px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Status bar */}
                <div style={{ backgroundColor: 'var(--color-primary)', padding: '16px 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>FreshFold</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>9:41</span>
                </div>

                {/* App content preview */}
                <div style={{ padding: '20px', flex: 1, overflow: 'hidden' }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '4px' }}>Halo, Budi 👋</p>
                  <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '16px' }}>Ada order aktif hari ini</p>

                  {/* Active order card */}
                  <div style={{ backgroundColor: 'rgba(255,56,92,0.06)', border: '1px solid var(--color-primary-muted)', borderRadius: '12px', padding: '14px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-ink)' }}>Order #FF2847</span>
                      <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-muted)', padding: '2px 8px', borderRadius: '9999px' }}>In Process</span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '8px' }}>Cuci Setrika • 4.5 kg</p>
                    <div style={{ backgroundColor: 'var(--color-border-soft)', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                      <div style={{ backgroundColor: 'var(--color-primary)', width: '60%', height: '100%', borderRadius: '4px' }} />
                    </div>
                    <p style={{ fontSize: '10px', color: 'var(--color-muted)', marginTop: '4px' }}>Estimasi selesai: Besok 14:00</p>
                  </div>

                  {/* Quick actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['📱 Order Baru', '📦 Track', '💳 Bayar', '⭐ Review'].map(action => (
                      <div key={action} style={{ backgroundColor: 'var(--color-canvas-soft)', borderRadius: '10px', padding: '12px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: 'var(--color-ink)' }}>
                        {action}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom nav */}
                <div style={{ borderTop: '1px solid var(--color-border-soft)', padding: '10px 24px', display: 'flex', justifyContent: 'space-around' }}>
                  {['🏠', '📦', '💳', '👤'].map((icon, idx) => (
                    <span key={idx} style={{ fontSize: '20px', opacity: idx === 0 ? 1 : 0.4 }}>{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
