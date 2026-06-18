import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    q: 'Bagaimana sistem timbangan?',
    a: 'Saat pickup, kami timbang di depan customer. Timbangan tertara, foto bukti untuk transparency. Kamu bisa lihat hasilnya langsung di app.',
  },
  {
    q: 'Apakah ada minimum order?',
    a: '3 kg untuk layanan kiloan. Free pickup-delivery untuk order di atas Rp 30.000. Untuk specialty item seperti sepatu dan tas tidak ada minimum.',
  },
  {
    q: 'Bagaimana kalau ada barang hilang/rusak?',
    a: 'Kompensasi 10x harga laundry per item, maksimal Rp 500.000. Untuk branded items, claim dengan bukti pembelian. Prosesnya cepat, tidak berbelit.',
  },
  {
    q: 'Apakah cuci pisah per customer?',
    a: 'Ya, sistem nomor PIC per customer. Tidak ada mix dengan order lain. Setiap pakaian dilabel sebelum masuk proses.',
  },
  {
    q: 'Bisa request setrika khusus?',
    a: 'Bisa. Catat di app atau WA, kemeja kerja kami setrika dengan steam, kerah tegak, dll. Ada juga layanan hanger untuk jas dan pakaian formal.',
  },
  {
    q: 'Bagaimana kalau saya tidak ada di rumah saat pickup?',
    a: 'Bisa request titip ke security/teman/tetangga, atau reschedule via app gratis. Tidak ada biaya tambahan untuk reschedule.',
  },
  {
    q: 'Apakah aman untuk pakaian premium/branded?',
    a: 'Aman. Kami separate khusus untuk premium item, dengan detergent gentle & care label-respect. Untuk dry cleaning item sangat premium, kami konsultasi dulu.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-border-soft)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', lineHeight: 1.4 }}>{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-canvas-soft)',
            color: isOpen ? '#fff' : 'var(--color-muted)',
            fontSize: '18px',
            fontWeight: 400,
            flexShrink: 0,
            lineHeight: 1,
            transition: 'background-color 0.2s ease',
          }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: '15px', color: 'var(--color-body-text)', lineHeight: 1.7, paddingBottom: '20px' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      style={{ backgroundColor: 'var(--color-canvas)', paddingBlock: '96px' }}
    >
      <div className="container-fresh">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="section-eyebrow">Ada Pertanyaan?</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ maxWidth: '680px', margin: '0 auto' }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
