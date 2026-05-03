import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigada pela sua compra!" },
      { name: "description", content: "Sua compra foi confirmada com sucesso." },
    ],
  }),
  component: ThankYouPage,
});

const IconCheck = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor"/>
    <path d="m3 7 9 6 9-6" stroke="#000" strokeWidth="1.8" fill="none"/>
  </svg>
);
const IconWhats = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2a10 10 0 0 0-8.6 15.07L2 22l5.07-1.32A10 10 0 1 0 12 2Z" fill="currentColor"/>
  </svg>
);
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M4 4h7v16H4zM13 4h7v16h-7z" fill="currentColor"/>
  </svg>
);

function ThankYouPage() {
  const steps = [
    { Icon: IconMail, title: "Confira seu e-mail", desc: "Enviamos os dados de acesso e o recibo da sua compra." },
    { Icon: IconWhats, title: "Entre na Mentoria Vip Exclusiva", desc: "O link do WhatsApp foi enviado junto com seu acesso." },
    { Icon: IconBook, title: "Comece a estudar", desc: "Acesse a plataforma e libere seu primeiro módulo agora." },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[Montserrat,sans-serif] relative overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Anton&display=swap" rel="stylesheet" />

      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#22c55e] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#e91e63] opacity-15 blur-[120px]" />

      <div className="relative w-full bg-gradient-to-r from-[#0e7a2b] via-[#1aa83a] to-[#0e7a2b] text-white text-center py-3 px-4 text-xs sm:text-sm font-black tracking-[0.18em] uppercase border-b border-[#22c55e]/40">
        ✅ Compra Confirmada com Sucesso
      </div>

      <main className="relative mx-auto w-full max-w-[620px] px-5 pt-12 pb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#22c55e] blur-2xl opacity-60 animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#22c55e] to-[#0e7a2b] text-white flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.6)] border-4 border-white/10">
              <IconCheck />
            </div>
          </div>
        </div>

        <section className="text-center">
          <h1 className="text-[34px] leading-[1.05] sm:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', Montserrat, sans-serif" }}>
            Parabéns!
            <span className="block mt-3 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#22c55e 0%,#86efac 50%,#22c55e 100%)" }}>
              Sua compra foi aprovada
            </span>
          </h1>

          <p className="mt-5 text-gray-300 text-base leading-relaxed max-w-[520px] mx-auto">
            Que bom ter você com a gente! Você acabou de dar um <strong className="text-white">passo enorme</strong> rumo à sua transformação profissional no mundo das tranças. 💖
          </p>

          <div className="mt-8 mx-auto w-24 h-[3px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent rounded-full" />
        </section>

        <section className="mt-10">
          <h2 className="text-center text-xs font-black uppercase tracking-[0.3em] text-[#e91e63] mb-5">
            Próximos Passos
          </h2>
          <div className="grid gap-4">
            {steps.map(({ Icon, title, desc }, i) => (
              <div key={title} className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#22c55e]/60 via-[#22c55e]/10 to-transparent">
                <div className="flex gap-4 items-start bg-[#0a0a0a] rounded-2xl p-5">
                  <div className="shrink-0 relative">
                    <div className="absolute inset-0 rounded-xl bg-[#22c55e] blur-md opacity-50" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#0e7a2b] text-white flex items-center justify-center shadow-lg">
                      <Icon />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-[#22c55e] tracking-widest">PASSO 0{i + 1}</span>
                      <span className="h-px flex-1 bg-[#22c55e]/30" />
                    </div>
                    <h3 className="mt-1 text-white font-black text-lg leading-tight">{title}</h3>
                    <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 relative rounded-3xl p-[2px] bg-gradient-to-b from-[#22c55e] via-[#1aa83a] to-[#0e7a2b] shadow-[0_0_40px_rgba(34,197,94,0.35)]">
          <div className="rounded-3xl bg-gradient-to-b from-[#0a1f10] via-black to-[#0a1f10] p-7 text-center">
            <p className="uppercase text-xs tracking-[0.3em] text-[#22c55e] font-black">Acesso Liberado</p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase text-white" style={{ fontFamily: "'Anton', sans-serif" }}>
              Tudo pronto para começar!
            </h3>
            <p className="text-gray-400 text-sm mt-3">
              Em até 5 minutos você receberá tudo no e-mail cadastrado. Caso não encontre, verifique a caixa de spam ou promoções.
            </p>

            <a href="mailto:" className="group relative block mt-6 w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1aa83a] via-[#22c55e] to-[#1aa83a]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              <div className="relative flex items-center justify-center gap-2 py-5 px-4 text-white font-black uppercase text-base tracking-wide">
                Acessar Meu E-mail
              </div>
            </a>
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-gray-500">
          Precisa de ajuda? Fale com nosso suporte pelo WhatsApp.
        </p>
      </main>

      <div className="relative w-full bg-gradient-to-r from-[#0e7a2b] via-[#1aa83a] to-[#0e7a2b] text-white text-center py-4 px-4 text-xs sm:text-sm font-black uppercase tracking-[0.15em] border-t border-[#22c55e]/40">
        💚 Bem-vinda à nossa família de profissionais
      </div>
    </div>
  );
}
