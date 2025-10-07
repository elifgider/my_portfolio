'use client'

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const projects = [
  {
    slug: "ai-ile-kombin-tamamla",
    title: "AI İle Kombin Tamamla",
    description:
      "Kombinimizi tamamlamak için harcanan zamanı azaltmaya yönelik, kendi modelimizi eğiterek geliştirdiğimiz mobil uygulama.",
    tags: ["Webscraping", "Golang", "Fine-tuning", "Flutter"],
    image: "/projects/aikombin.jpg",
  },
  {
    slug: "kps-client",
    title: "Kimlik Doğrulama Sistem Entegrasyonu",
    description:
      "Türkiye Cumhuriyeti Kimlik Paylaşımı Sistemi'nin (KPS) sistemine erişmek için bir istemci sağlar. Bu istemci, KPS API'sine HTTP istekleri gönderir ve yanıtları alır.",
    tags: ["Golang", "API"],
    image: "/projects/kimlik_dogrulama.png",
  },
  {
    slug: "hisse-sorgula",
    title: "Hisse Sorgula",
    description:
      "Hisseler ve katılım endeksi bilgileri için web uygulaması. Favoriler ve basit screener ile hızlı takip.",
    tags: ["Html", "CSS", "Bootstrap", "JavaScript"],
    image: "/hissesorgula.png",
  },
  {
      slug: "book-store",
      title: 'Online Book Store API',
      description: 'PHP ile geliştirilmiş RESTful API; kitapları listeleme, ekleme, güncelleme ve silme işlemlerini destekler.',
      tags: ["PHP", "REST API", "MySQL", "Docker", "Backend"],
      image: "/projects/bookstore-swagger.png"
    }
];

export default function ProjectsIndex() {
  // --- filtreleme state'leri
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  // tüm etiketleri çıkar (unique + alfabetik)
  const allTags = useMemo(
    () =>
      Array.from(new Set(projects.flatMap((p) => p.tags))).sort((a, b) =>
        a.localeCompare(b, "tr")
      ),
    []
  );
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));
      const matchesTags =
        activeTags.length === 0 || activeTags.every((t) => p.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [q, activeTags]);

  const toggleTag = (t: string) =>
    setActiveTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  const clearFilters = () => {
    setQ("");
    setActiveTags([]);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pt-20 md:pt-30 pb-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Projeler</h1>
        <p className="mt-2 text-zinc-600">
          Yeni teknolojileri öğrenirken ya da farklı alanlarda denemeler yaparken geliştirdiğim projeleri burada paylaşıyorum. Bazıları deneysel, bazıları ise günlük hayatta kullandığım araçlar.
          Kaynak kodlarını paylaşamadığım projeler olsa da, fikir ve deneyimlerimi aktarmaktan mutluluk duyarım.
        </p>
      </header>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Proje ara..."
            className="w-full rounded-xl border px-4 py-2.5 outline-none focus:border-zinc-300"
            aria-label="Projelerde ara"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => {
            const on = activeTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  on ? "bg-black text-white border-black" : "bg-white hover:bg-zinc-50"
                }`}
                aria-pressed={on}
              >
                {t}
              </button>
            );
          })}
          {(q || activeTags.length > 0) && (
            <button
              onClick={clearFilters}
              className="rounded-full border px-3 py-1.5 text-sm hover:bg-zinc-50"
            >
              Temizle
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 text-sm text-zinc-500">
        {filtered.length} proje bulundu
        {activeTags.length > 0 && <> • Etiketler: {activeTags.join(", ")}</>}
        {q && <> • Arama: “{q}”</>}
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {filtered.map((p) => (
          <article
            key={p.slug}
            className="group overflow-hidden rounded-2xl border bg-white hover:shadow-lg transition"
          >
            <Link href={`/projects/${p.slug}`} className="block">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-2/5 w-full bg-zinc-100">
                  {p.image && (
                    <div className="relative aspect-[16/9] md:aspect-[16/10] md:h-full">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  )}
                </div>

                <div className="md:w-3/5 w-full p-5 md:p-6">
                  <h2 className="text-xl md:text-2xl font-semibold group-hover:underline">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-zinc-700 leading-7">{p.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="mt-4 inline-block text-sm text-zinc-600 group-hover:underline">
                    Devamını oku →
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border bg-white p-8 text-center">
          <p className="text-zinc-700">
            Sonuç bulunamadı. Aramayı ya da filtreleri değiştirin.
          </p>
        </div>
      )}
    </div>
  );
}