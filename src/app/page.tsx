'use client'

import Image from "next/image"

export default function Home() {
  
  const projects = [
    {
      title: 'AI İle Kombin Tamamla',
      description: 'Kombinimizi tamamlamak için harcadığımız zamanı minimuma indirmek için kendi modelimizi eğiterek yaptığımız bir mobil app. Çok yakında yayında olacak',
      href: '/projects',
      tags: ['Webscraping','Golang' ,'Fine-tuning','Flutter'],
      image: '/ai_ile_kombin_tamamla.png'
    },
    {
      title: 'Kimlik Doğrulama Sistem Entegrasyonu',
      description:
        "Türkiye Cumhuriyeti Kimlik Paylaşımı Sistemi'nin (KPS) sistemine erişmek için bir istemci sağlar. Bu istemci, KPS API'sine HTTP istekleri gönderir ve yanıtları alır.",
      href: '/projects',
      tags: ["Golang", "API" ,"SOAP"],
      image: "/projects/kimlik_dogrulama.png",
    },
    {
      title: 'Online Book Store API',
      description: 'PHP ile geliştirilmiş RESTful API; kitapları listeleme, ekleme, güncelleme ve silme işlemlerini destekler.',
      href: '/projects',
      tags: ["PHP", "REST API", "MySQL", "Docker", "Backend"],
      image: "/projects/bookstore-swagger.png"
    }
  ]

  const posts = [
    { title: 'SNMP Temelleri ve Pratik İzleme',summary: 'Agent, OID, MIB kavramları ve ağ cihazlarında pratik izleme senaryoları.', href: '/blog/snmp-temelleri-ve-pratik-izleme' ,image:'/snmp.jpeg', author: 'Elif Gider', date: '6 Ekim 2025'},
    { title: 'npm\'de Paket Geliştirme Rehberi',summary: 'Paket yapısı, semver, test ve npm publish akışı.', href: '/blog/npmde-paket-gelistirme-rehberi' ,image:'/npm.jpg', author: 'Elif Gider', date: '5 Ekim 2025'},
    { title: 'Docker ile Uygulama Paketleme', summary: 'Katman mantığı, multi-stage build ve güvenli image pratikleri.', href: '/blog/docker-ile-uygulama-paketleme' ,image:'/docker.jpeg', author: 'Elif Gider', date: '3 Ekim 2025'}
  ]

  const skillItems = [
    { icon: '/icons/golang.svg', label: 'Golang' },
    { icon: '🐳', label: 'Docker' },
    { icon: '🐧', label: 'Linux' },
    { icon: '⚙️', label: 'CI/CD' },
    { icon: '/icons/tailwind.png', label: 'Tailwind' },
    { icon: '🐘', label: 'PostgreSQL' },
    { icon: '🐬', label: 'MySQL' },
    { icon: '⚛️', label: 'React' },
    { icon: '/icons/nextjs.png', label: 'Next.js' },
    { icon: '/icons/nodejs.png', label: 'Node.js' },
  ]


  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center">
        {/* Background with image and gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg.jpg"
            alt="Elif Gider"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0" style={{
            background:
              "radial-gradient(600px 300px at 10% 20%, rgba(59,130,246,0.25), transparent), radial-gradient(500px 300px at 90% 80%, rgba(236,72,153,0.22), transparent)"
          }} />
        </div>

        <div className="mx-auto max-w-6xl px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: intro */}
          <div className="flex flex-col justify-center text-left text-white">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Bilgisayar Mühendisi • Fullstack Developer
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              Merhaba
            </h1>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">Ben Elif Gider</h1>
            <p className="mt-4 text-zinc-200 max-w-xl">
                Web geliştirme ve mikroservis mimarisi alanında çalışıyor, 
                teknolojiyi bir araç olarak görüp her ihtiyaca uygun çözümü üretmeyi 
                hedefliyorum. Hangi teknoloji gerekiyorsa, o teknolojiyle en doğru 
                ve sürdürülebilir sonucu sunmayı ilke edindim. Bu sitede hem 
                projelerime hem de deneyimlerime dair yazılar bulabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/projects" className="rounded-full border border-white/80 text-white px-6 py-2 font-medium hover:bg-white hover:text-black transition">Projelerim</a>
              <a href="/blog" className="rounded-full border border-white/80 text-white px-6 py-2 font-medium hover:bg-white hover:text-black transition">Blog</a>
              <a href="#contact" className="rounded-full border border-white/50 text-white px-6 py-2 font-medium hover:border-white transition">İletişim</a>
            </div>
          </div>

          {/* Right: glass card with quick facts */}
          <div className="relative">
            <div className="backdrop-blur-md/40" />
            <div className="relative rounded-2xl border border-white/25 bg-white/15 p-4 md:p-6 text-white shadow-[0_12px_48px_-12px_rgba(0,0,0,0.6)]">
              <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
              <div className="flex items-center justify-between gap-4 px-2">
                <h2 className="text-base md:text-lg font-semibold tracking-tight">Kodlama Günlüğüm</h2>
                <a href="https://github.com/elifgider" target="_blank" rel="noreferrer" className="text-xs underline underline-offset-4 decoration-white/40 hover:decoration-white">@elifgider</a>
              </div>
              <div className="mt-3 h-px w-full bg-white/10" />
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20 px-2 py-2">
                <img
                  src="https://ghchart.rshah.org/000000/elifgider"
                  alt="GitHub contributions heatmap"
                  width="760"
                  height="260"
                  className="mx-auto h-auto w-[520px] md:w-[680px] lg:w-[740px]"
                />
              </div>
              <div className="mt-3 text-[11px] text-white/70 px-2">Veriler GitHub'dan anlık olarak çekilir.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section className="mx-auto max-w-6xl px-4 py-16">
  <div className="relative overflow-hidden rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-8">
    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
    
    <div className="relative">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-zinc-800">Yetkinlikler</h2>
      <p className="text-zinc-600 mb-8">Sıklıkla kullandığım teknolojiler ve araçlar</p>
      
      <div className="flex flex-wrap gap-3">
        {skillItems.map((s) => (
          <span 
            key={s.label} 
            className="inline-flex items-center gap-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-white/60 transition"
          >
            {s.icon.startsWith('/') ? (
              <img 
                src={s.icon} 
                alt={s.label} 
                className="h-5 w-5"
              />
            ) : (
              <span className="text-lg">{s.icon}</span>
            )}
            {s.label}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PROJECTS PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-8">
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
          
          <div className="relative">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800">Projeler</h2>
                <p className="mt-2 text-zinc-600">Üzerinde çalıştığım bazı çalışmalar</p>
              </div>
              <a href="/projects" className="rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-zinc-800 px-4 py-2 text-sm hover:bg-white/60 transition">Tüm Projeler</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <a key={p.title} href={p.href} className="group relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 hover:shadow-lg transition">
                  <div className="relative aspect-[16/10] bg-zinc-100">
                    {p.image ? (
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-cyan-100 to-pink-100" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-zinc-800">{p.title}</h3>
                      <span className="text-xs text-zinc-600 group-hover:underline">İncele →</span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <span key={t} className="rounded-full bg-white/60 text-zinc-700 px-2 py-0.5 text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-8">
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
          
          <div className="relative">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800">Blog</h2>
                <p className="mt-2 text-zinc-600">Son paylaşımlarımdan başlıklar</p>
              </div>
              <a href="/blog" className="rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-zinc-800 px-4 py-2 text-sm hover:bg-white/60 transition">
                Tüm Yazılar
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <a 
                  key={post.title} 
                  href={post.href} 
                  className="group rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 overflow-hidden hover:bg-white/60 hover:shadow-lg transition"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-zinc-800">{post.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{post.summary}</p>
                    <span className="mt-3 inline-block text-sm text-zinc-600 group-hover:underline">
                      Oku →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
     <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 scroll-mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-800 p-12 text-white">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />
          
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              İletişime geçelim
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Birlikte <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">üretelim</span>
            </h2>
            
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-12">
              Bir proje fikriniz mi var ya da iş birliği yapmak ister misiniz? 
              Aşağıdaki kanallardan bana ulaşabilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:egider20@gmail.com" 
                className="group flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 0 9 7 9-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-zinc-400">Email</div>
                  <div className="font-semibold">egider20@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/elif-gider/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.44V23h-4V8.5z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-zinc-400">LinkedIn</div>
                  <div className="font-semibold">elif-gider</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/elifgider" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-zinc-400">GitHub</div>
                  <div className="font-semibold">elifgider</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}