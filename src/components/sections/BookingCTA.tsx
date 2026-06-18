import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightning, CreditCard, ShieldCheck, ArrowCounterClockwise, CalendarBlank, Clock, MapPin, CheckCircle } from '@phosphor-icons/react';

const services = [
  'Cuci Kiloan', 'Cuci Setrika', 'Express 24 Jam',
  'Super Express 8 Jam', 'Dry Cleaning', 'Cuci Satuan Special',
];

const timeSlots = [
  { label: 'Pagi',  time: '08:00 - 11:00', icon: '🌅' },
  { label: 'Siang', time: '12:00 - 14:00', icon: '☀️' },
  { label: 'Sore',  time: '15:00 - 18:00', icon: '🌤️' },
  { label: 'Malam', time: '19:00 - 21:00', icon: '🌙' },
];

const features = [
  { Icon: Lightning,             text: 'Konfirmasi dalam 5 menit' },
  { Icon: CreditCard,            text: 'Bayar setelah laundry selesai' },
  { Icon: ShieldCheck,           text: 'Garansi hilang/rusak' },
  { Icon: ArrowCounterClockwise, text: 'Reschedule gratis kapan saja' },
];

export default function BookingCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid var(--color-border-input)',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '15px',
    color: 'var(--color-ink)',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'border-color 0.15s ease',
  };

  return (
    <section id="booking" ref={ref} style={{ backgroundColor: 'var(--color-canvas-soft)', paddingBlock: '96px' }}>
      <div className="container-fresh">
        <div className="layout-2col-start">
          {/* Left */}
          <motion.div initial={{ opacity:0, x:-24 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.6 }}>
            <span className="section-eyebrow">Mulai Sekarang</span>
            <h2 style={{ fontSize:'clamp(28px, 3vw, 42px)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:'16px' }}>Schedule Pickup Sekarang</h2>
            <p style={{ fontSize:'17px', color:'var(--color-body-text)', lineHeight:1.7, marginBottom:'32px' }}>
              Pilih waktu pickup, kami konfirmasi dalam 5 menit. Bayar setelah selesai.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:'14px', marginBottom:'36px' }}>
              {features.map(({ Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity:0, x:-16 }}
                  animate={inView ? { opacity:1, x:0 } : {}}
                  transition={{ duration:0.4, delay: 0.1 + i * 0.07 }}
                  style={{ display:'flex', alignItems:'center', gap:'12px' }}
                >
                  <div style={{ width:'36px', height:'36px', borderRadius:'8px', backgroundColor:'rgba(255,56,92,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon weight="duotone" size={20} color="var(--color-primary)" />
                  </div>
                  <span style={{ fontSize:'15px', color:'var(--color-body-text)' }}>{text}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ paddingTop:'28px', borderTop:'1px solid var(--color-border)' }}>
              <p style={{ fontSize:'14px', color:'var(--color-muted)', marginBottom:'12px', fontWeight:500 }}>Atau hubungi kami langsung:</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'8px', color:'#25D366', fontSize:'16px', fontWeight:700, textDecoration:'none' }}>
                <span style={{ fontSize:'22px' }}>💬</span>
                Order via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity:0, x:24 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.6, delay:0.1 }}>
            {submitted ? (
              <motion.div
                initial={{ opacity:0, scale:0.95 }}
                animate={{ opacity:1, scale:1 }}
                style={{ backgroundColor:'var(--color-canvas)', border:'1px solid var(--color-border)', borderRadius:'20px', padding:'48px', textAlign:'center', boxShadow:'var(--shadow-form)' }}
              >
                <CheckCircle weight="duotone" size={56} color="var(--color-success)" style={{ marginBottom:'16px' }} />
                <h3 style={{ fontSize:'22px', fontWeight:700, marginBottom:'8px' }}>Pickup Terjadwal!</h3>
                <p style={{ color:'var(--color-muted)', fontSize:'15px' }}>Kami akan konfirmasi dalam 5 menit via WhatsApp.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ backgroundColor:'var(--color-canvas)', border:'1px solid var(--color-border)', borderRadius:'20px', padding:'36px', boxShadow:'var(--shadow-form)', display:'flex', flexDirection:'column', gap:'20px' }}
              >
                <div className="layout-2col-sm">
                  <div>
                    <label style={{ display:'block', fontSize:'13px', fontWeight:600, color:'var(--color-ink)', marginBottom:'6px' }}>Nama</label>
                    <input type="text" required placeholder="Nama kamu" style={inputStyle}
                      onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--color-primary)'; }}
                      onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--color-border-input)'; }}
                    />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'13px', fontWeight:600, color:'var(--color-ink)', marginBottom:'6px' }}>WhatsApp</label>
                    <input type="tel" required placeholder="08xx-xxxx-xxxx" style={inputStyle}
                      onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--color-primary)'; }}
                      onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--color-border-input)'; }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'13px', fontWeight:600, color:'var(--color-ink)', marginBottom:'6px' }}>
                    <MapPin weight="duotone" size={15} color="var(--color-primary)" />
                    Alamat Pickup
                  </label>
                  <input type="text" required placeholder="Jl. / Apartemen / Komplek..." style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--color-primary)'; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--color-border-input)'; }}
                  />
                </div>

                <div>
                  <label style={{ display:'block', fontSize:'13px', fontWeight:600, color:'var(--color-ink)', marginBottom:'6px' }}>Jenis Layanan</label>
                  <select required style={{ ...inputStyle, cursor:'pointer' }}>
                    <option value="">Pilih layanan...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'13px', fontWeight:600, color:'var(--color-ink)', marginBottom:'6px' }}>
                    <CalendarBlank weight="duotone" size={15} color="var(--color-primary)" />
                    Tanggal Pickup
                  </label>
                  <input type="date" required style={inputStyle} />
                </div>

                {/* Time slot chips — Cal.com style */}
                <div>
                  <label style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'13px', fontWeight:600, color:'var(--color-ink)', marginBottom:'10px' }}>
                    <Clock weight="duotone" size={15} color="var(--color-primary)" />
                    Slot Waktu
                  </label>
                  <div className="layout-2col-slots">
                    {timeSlots.map((slot, i) => (
                      <button
                        key={slot.label}
                        type="button"
                        onClick={() => setSelectedSlot(i)}
                        style={{
                          display:'flex', alignItems:'center', gap:'8px',
                          padding:'10px 14px', borderRadius:'8px',
                          border:`1.5px solid ${selectedSlot === i ? 'var(--color-primary)' : 'var(--color-border-input)'}`,
                          backgroundColor: selectedSlot === i ? 'rgba(255,56,92,0.05)' : '#fff',
                          cursor:'pointer', transition:'all 0.15s ease', textAlign:'left',
                        }}
                      >
                        <span style={{ fontSize:'16px' }}>{slot.icon}</span>
                        <div>
                          <div style={{ fontSize:'13px', fontWeight:600, color: selectedSlot === i ? 'var(--color-primary)' : 'var(--color-ink)' }}>{slot.label}</div>
                          <div style={{ fontSize:'11px', color:'var(--color-muted)' }}>{slot.time}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:'16px', padding:'15px' }}>
                  Jadwalkan Pickup →
                </button>
                <p style={{ textAlign:'center', fontSize:'12px', color:'var(--color-muted)' }}>Bayar setelah laundry selesai • Reschedule gratis</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
