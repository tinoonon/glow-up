import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/downsell")({
  head: () => ({
    meta: [
      { title: "Última Chance — Oferta Especial 50% OFF" },
      { name: "description", content: "Uma última oportunidade com 50% de desconto." },
    ],
  }),
  component: DownsellPage,
});

const IconWhats = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
    <path d="M12 2a10 10 0 0 0-8.6 15.07L2 22l5.07-1.32A10 10 0 1 0 12 2Zm5.3 14.2c-.22.62-1.3 1.2-1.79 1.24-.45.04-1 .2-3.4-.74-2.85-1.13-4.65-4.06-4.8-4.26-.13-.2-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31a1 1 0 0 1 .73-.34h.52c.17 0 .4-.06.62.47.22.55.74 1.9.81 2.04.07.13.11.29.02.47-.09.18-.13.29-.27.45-.13.16-.28.36-.4.49-.13.13-.27.27-.12.53.16.27.71 1.18 1.53 1.91 1.06.95 1.96 1.24 2.23 1.38.27.13.43.11.6-.07.16-.18.69-.81.88-1.08.18-.27.36-.22.6-.13.25.09 1.6.76 1.87.9.27.13.45.2.52.31.07.11.07.65-.16 1.27Z" fill="currentColor"/>
  </svg>
);
const IconLive = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
    <rect x="2" y="6" width="14" height="12" rx="2" fill="currentColor" />
    <path d="M22 7.5 17 11v2l5 3.5v-9Z" fill="currentColor" />
  </svg>
);
const IconMoney = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
    <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm1 17v1a1 1 0 0 1-2 0v-1.05a4 4 0 0 1-3-3.45 1 1 0 0 1 2-.2 2 2 0 0 0 2 1.7c1.1 0 2-.6 2-1.5s-.9-1.3-2.7-1.8c-1.7-.5-3.3-1.2-3.3-3.2A3.5 3.5 0 0 1 11 6.05V5a1 1 0 0 1 2 0v1.06a3.6 3.6 0 0 1 2.85 2.6 1 1 0 0 1-1.95.45A1.7 1.7 0 0 0 12.2 8c-1 0-1.7.5-1.7 1.2 0 .7.7 1 2.4 1.5 2 .6 3.6 1.4 3.6 3.5A3.6 3.6 0 0 1 13 18Z" fill="currentColor"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2 4 5v6c0 5 3.5 9.4 8 11 4.5-1.6 8-6 8-11V5l-8-3Z" fill="currentColor" />
    <path d="m9 12 2 2 4-4" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconFire = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 inline-block">
    <path d="M12 2s4 4 4 8a4 4 0 0 1-1.2 2.9c.7-2.3-1.3-4.4-1.3-4.4s-1.5 2-1.5 4.5A4.5 4.5 0 1 0 5 17c0-3 2-4 2-7 0-2 1-4 2-5 0 2 1 3 3 3-1-2 0-4 0-6Z" fill="currentColor"/>
  </svg>
);

function DownsellPage() {
  const benefits = [
    { Icon: IconWhats, title: "Mentoria Vip Exclusiva no WhatsApp", desc: "Suporte direto comigo e com a equipe — você não fica sozinha." },
    { Icon: IconLive, title: "Lives ao Vivo", desc: "Tire dúvidas em tempo real e veja demonstrações práticas." },
    { Icon: IconMoney, title: "Captação de Clientes", desc: "Estratégias para encher sua agenda e aumentar seu faturamento." },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[Montserrat,sans-serif] relative overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Anton&display=swap" rel="stylesheet" />

      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#e91e63] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#e91e63] opacity-10 blur-[120px]" />

      <div className="relative w-full bg-gradient-to-r from-[#b8050f] via-[#e30613] to-[#b8050f] text-white text-center py-3 px-4 text-xs sm:text-sm font-black tracking-[0.18em] uppercase border-b border-[#ff4757]/40">
        <span className="inline-flex items-center gap-2">
          <IconFire /> Última Chance — 50% de Desconto <IconFire />
        </span>
      </div>

      <main className="relative mx-auto w-full max-w-[620px] px-5 pt-10 pb-8">
        <div className="flex justify-center mb-5">
          <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#e91e63] to-[#c2185b] text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(233,30,99,0.6)]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Espere! Última Oferta
          </span>
        </div>

        <section className="text-center">
          <h1 className="text-[34px] leading-[1.05] sm:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', Montserrat, sans-serif" }}>
            Tudo bem, entendemos…
            <span className="block mt-3 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#ff2e63 0%,#e91e63 40%,#ff7eb6 100%)" }}>
              Que tal pagar apenas a METADE do preço?
            </span>
          </h1>

          <p className="mt-5 text-gray-300 text-base leading-relaxed max-w-[520px] mx-auto">
            Sabemos que cada centavo importa. Por isso preparamos uma <strong className="text-white">oferta final exclusiva</strong> com 50% OFF para você não perder essa oportunidade.
          </p>

          {/* Imagem de conteúdo */}
          <div className="mt-8 flex justify-center">
            <img 
              src="/tKQ3N.jpg" 
              alt="Conteúdo exclusivo" 
              className="w-full max-w-[520px] rounded-2xl shadow-[0_0_40px_rgba(233,30,99,0.3)] border border-[#e91e63]/20"
            />
          </div>

          <div className="mt-8 mx-auto w-24 h-[3px] bg-gradient-to-r from-transparent via-[#e91e63] to-transparent rounded-full" />
        </section>

        <section className="mt-10 grid gap-4">
          {benefits.map(({ Icon, title, desc }, i) => (
            <div key={title} className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#e91e63]/70 via-[#e91e63]/10 to-transparent transition-transform hover:-translate-y-[2px]">
              <div className="flex gap-4 items-start bg-[#0a0a0a] rounded-2xl p-5">
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 rounded-xl bg-[#e91e63] blur-md opacity-50 group-hover:opacity-80 transition" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff2e63] to-[#c2185b] text-white flex items-center justify-center shadow-lg">
                    <Icon />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-[#e91e63] tracking-widest">0{i + 1}</span>
                    <span className="h-px flex-1 bg-[#e91e63]/30" />
                  </div>
                  <h3 className="mt-1 text-white font-black text-lg leading-tight">{title}</h3>
                  <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="relative mt-12">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-block bg-gradient-to-r from-[#e30613] to-[#ff2e63] text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(255,46,99,0.7)] border border-white/10">
              ⚡ 50% OFF — Última Chance
            </span>
          </div>

          <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-[#ff2e63] via-[#e91e63] to-[#7a0d34] shadow-[0_0_50px_rgba(233,30,99,0.45)]">
            <div className="rounded-3xl bg-gradient-to-b from-[#15080d] via-black to-[#15080d] p-7 text-center">
              <p className="uppercase text-xs sm:text-sm tracking-[0.3em] text-gray-400 font-bold">Oferta Final</p>

              <div className="mt-5 flex flex-col items-center gap-2">
                <div className="text-center">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">DE</p>
                  <p className="text-xl text-gray-400 font-bold line-through decoration-[#e30613] decoration-[3px]">R$ 19,90</p>
                </div>
                <div className="text-center">
                  <p className="text-[#e91e63] text-xs uppercase tracking-widest font-black">POR APENAS</p>
                  <p className="text-6xl sm:text-7xl font-black leading-none bg-clip-text text-transparent" style={{ fontFamily: "'Anton', sans-serif", backgroundImage: "linear-gradient(180deg,#ffffff 0%,#ffd6e3 50%,#e91e63 100%)" }}>
                    R$12,90
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-3 font-semibold">💳 Pagamento único — sem mensalidade</p>

              <a
                href="https://pay.lowify.com.br/checkout?product_id=6EsJIB"
                className="group relative block mt-7 w-full overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1aa83a] via-[#22c55e] to-[#1aa83a] animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="relative flex items-center justify-center gap-2 py-5 px-4 text-white font-black uppercase text-base sm:text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  Sim! Quero por R$ 12,90
                  <IconArrow />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#22c55e]/60 group-hover:ring-white/40 transition" />
              </a>

              <ul className="mt-5 grid grid-cols-2 gap-2 text-left">
                {["Acesso imediato", "Suporte VIP", "Lives semanais", "7 dias de garantia"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-gray-300 font-semibold">
                    <span className="w-5 h-5 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center"><IconCheck /></span>
                    {t}
                  </li>
                ))}
              </ul>

              <Link to="/obrigado" className="block mt-6 text-gray-500 hover:text-gray-300 text-xs sm:text-sm underline underline-offset-4 transition">
                Não, prefiro recusar essa última oferta
              </Link>
            </div>
          </div>

          <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
        </section>

        <section className="mt-8 relative rounded-2xl overflow-hidden border border-[#e91e63]/30 bg-gradient-to-br from-[#0d0d0d] to-[#1a0510] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-[#e91e63] blur-xl opacity-50" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#ff2e63] to-[#7a0d34] text-white flex items-center justify-center shadow-xl border-2 border-white/10">
                <IconShield />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#ffb400] mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6L12 2Z" fill="currentColor" />
                  </svg>
                ))}
              </div>
              <h4 className="font-black text-white uppercase text-base sm:text-lg tracking-wider">
                Garantia Incondicional de 7 Dias
              </h4>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Não gostou? Devolvemos 100% do valor. Sem perguntas.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { Icon: IconLock, label: "Checkout", sublabel: "Seguro" },
              { Icon: IconShield, label: "Satisfação", sublabel: "Garantida" },
              { Icon: () => (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6L12 2Z" fill="currentColor" />
                </svg>
              ), label: "+10 mil", sublabel: "Alunas" },
            ].map(({ Icon, label, sublabel }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="text-[#e91e63] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <Icon />
                </span>
                <div className="text-center">
                  <span className="block text-xs sm:text-sm font-black uppercase tracking-wider text-white leading-tight">
                    {label}
                  </span>
                  <span className="block text-xs sm:text-sm font-black uppercase tracking-wider text-white leading-tight">
                    {sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="relative w-full bg-gradient-to-r from-[#b8050f] via-[#e30613] to-[#b8050f] text-white text-center py-4 px-4 text-xs sm:text-sm font-black uppercase tracking-[0.15em] border-t border-[#ff4757]/40">
        <span className="inline-flex items-center gap-2">⏳ Esta é Sua Última Chance — Não Volta Mais</span>
      </div>
    </div>
  );
}
