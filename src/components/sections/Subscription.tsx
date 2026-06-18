import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const plans = [
  {
    name: 'Weekly Pass',
    icon: '👕',
    price: 'Rp 250k',
    period: '/minggu',
    features: [
      'Up to 7 kg per minggu',
      'Kiloan + setrika',
      'Pickup-delivery free',
      'Cocok untuk single/couple',
    ],
    cta: 'Mulai Weekly',
    featured: false,
  },
  {
    name: 'Family Pass',
    icon: '🏠',
    price: 'Rp 600k',
    period: '/minggu',
    features: [
      'Up to 15 kg per minggu',
      'Pickup-delivery free',
      '10% off specialty service',
      'Cocok untuk keluarga',
    ],
    cta: 'Pilih Family',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium Unlimited',
    icon: '💎',
    price: 'Rp 1,5 jt',
    period: '/bulan',
    features: [
      'Unlimited kiloan + setrika',
      'Pickup 3x/minggu',
      '15% off specialty + dry cleaning',
      'Priority handling',
    ],
    cta: 'Go Premium',
    featured: false,
  },
];

export default function Subscription() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="subscription"
      ref={ref}
      style={{ backgroundColor: 'var(--color-canvas-cream)', paddingBlock: '96px' }}
    >
      <div className="container-fresh">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="section-eyebrow">Hemat Sampai 25%</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Subscription Plan
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-muted)', maxWidth: '420px', margin: '0 auto' }}>
            Hemat sampai 25% untuk yang laundry rutin.
          </p>
        </motion.div>

        <div
          className="sub-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                backgroundColor: plan.featured ? 'var(--color-navy)' : 'var(--color-canvas)',
                border: plan.featured ? 'none' : '1px solid var(--color-border)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                position: 'relative',
                boxShadow: plan.featured ? 'var(--shadow-panel)' : 'none',
                transition: 'box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                if (!plan.featured) (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={e => {
                if (!plan.featured) (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--color-primary)',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ⭐ {plan.badge}
                </div>
              )}

              {/* Icon + Name */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{plan.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: plan.featured ? '#fff' : 'var(--color-ink)', marginBottom: '0' }}>
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '36px', fontWeight: 800, color: plan.featured ? '#fff' : 'var(--color-ink)', letterSpacing: '-0.03em' }}>
                  {plan.price}
                </span>
                <span style={{ fontSize: '14px', color: plan.featured ? 'rgba(255,255,255,0.6)' : 'var(--color-muted)', fontWeight: 400 }}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: plan.featured ? 'rgba(255,255,255,0.85)' : 'var(--color-body-text)' }}>
                    <span style={{ color: plan.featured ? '#a5f3d4' : 'var(--color-success)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#booking"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backgroundColor: plan.featured ? 'var(--color-primary)' : 'var(--color-ink)',
                  color: '#fff',
                  transition: 'opacity 0.15s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
