import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const areas = [
  { region: 'Jakarta', places: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara'], active: true },
  { region: 'Tangerang Selatan', places: ['BSD', 'Bintaro', 'Alam Sutera', 'Serpong'], active: true },
  { region: 'Bekasi', places: ['Bekasi Barat', 'Bekasi Utara'], active: true },
  { region: 'Depok', places: ['Margonda', 'Sekitarnya'], active: true },
  { region: 'Surabaya', places: ['Coming Q4 2025'], active: false },
  { region: 'Bandung', places: ['Coming 2026'], active: false },
];

const slots = [
  { time: '08:00 - 11:00', label: 'Pagi', icon: '🌅' },
  { time: '12:00 - 14:00', label: 'Siang', icon: '☀️' },
  { time: '15:00 - 18:00', label: 'Sore', icon: '🌤️' },
  { time: '19:00 - 21:00', label: 'Malam', icon: '🌙', surcharge: '+Rp 10k' },
];

export default function Coverage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="coverage"
      ref={ref}
      style={{ backgroundColor: 'var(--color-canvas-warm)', paddingBlock: '96px' }}
    >
      <div className="container-fresh">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="section-eyebrow">Area Layanan</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Coverage Area
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-muted)', maxWidth: '440px', margin: '0 auto' }}>
            Jakarta + sekitarnya, terus expand.
          </p>
        </motion.div>

        <div className="layout-2col-coverage">
          {/* Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: 'var(--color-ink)' }}>
              Area Aktif
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {areas.map((area, i) => (
                <motion.div
                  key={area.region}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  style={{
                    backgroundColor: 'var(--color-canvas)',
                    border: `1px solid ${area.active ? 'var(--color-border)' : 'var(--color-border-soft)'}`,
                    borderRadius: '12px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    opacity: area.active ? 1 : 0.6,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: area.active ? 'var(--color-success)' : 'var(--color-muted-soft)',
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-ink)' }}>{area.region}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--color-muted)', paddingLeft: '16px' }}>
                      {area.places.join(', ')}
                    </p>
                  </div>
                  {!area.active && (
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--color-muted)',
                      backgroundColor: 'var(--color-canvas-soft)',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                    }}>
                      Coming Soon
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pickup Slots */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: 'var(--color-ink)' }}>
              Slot Pickup
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {slots.map((slot, i) => (
                <motion.div
                  key={slot.time}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  style={{
                    backgroundColor: 'var(--color-canvas)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>{slot.icon}</span>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)' }}>{slot.label}</div>
                      <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>{slot.time}</div>
                    </div>
                  </div>
                  {slot.surcharge && (
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-warning)', backgroundColor: 'rgba(245,158,11,0.1)', padding: '3px 10px', borderRadius: '9999px' }}>
                      {slot.surcharge}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              style={{
                backgroundColor: 'var(--color-canvas-soft)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '36px' }}>🗺️</span>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', fontWeight: 500 }}>
                Jabodetabek Coverage Map
              </p>
              <p style={{ fontSize: '12px', color: 'var(--color-muted-soft)' }}>15+ titik pickup tersebar</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #coverage .container-fresh > div:last-child {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
