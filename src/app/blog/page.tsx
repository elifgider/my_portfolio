// src/app/blog/page.tsx
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  author?: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: "snmp-temelleri-ve-pratik-izleme",
    title: "SNMP Temelleri ve Pratik İzleme",
    summary:
      "SNMP (Simple Network Management Protocol), ağ cihazlarının durumunu, trafiğini ve performansını izlememizi sağlayan temel bir protokoldür. Bu yazıda agent, OID, MIB kavramlarını ve SNMP ile port, CPU, bellek gibi metriklerin nasıl takip edildiğini pratik örneklerle inceliyoruz.",
    image: "/snmp.jpeg",
    author: "Elif Gider",
    date: "6 Ekim 2025",
  },
  {
    slug: "npmde-paket-gelistirme-rehberi",
    title: "npm’de Paket Geliştirme Rehberi",
    summary:
      "npm üzerinde kendi paketini oluşturmak ve yayınlamak, modern JavaScript dünyasında paylaşılabilir kod üretmenin en etkili yollarından biridir. Bu yazıda paket yapısı, semver sürümleme, test süreçleri ve npm publish akışını adım adım ele alıyoruz.",
    image: "/npm.jpg",
    author: "Elif Gider",
    date: "5 Ekim 2025",
  },
  {
    slug: "docker-ile-uygulama-paketleme",
    title: "Docker ile Uygulama Paketleme",
    summary:
      "Docker, uygulamaları izole konteynerlerde çalıştırarak taşınabilir ve güvenli hale getirir. Bu yazıda katman mantığı, multi-stage build yaklaşımı, image boyutunu küçültme ipuçları ve güvenli Dockerfile pratikleri hakkında detaylı bilgiler bulabilirsiniz.",
    image: "/docker.jpeg",
    author: "Elif Gider",
    date: "3 Ekim 2025",
  },
];

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-28 pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Blog Yazılarım</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((b) => (
          <Link
            key={b.slug}
            href={`/blog/${b.slug}`}
            className="rounded-2xl border bg-white p-6 hover:shadow-md transition"
          >
            {b.image && (
              <img
                src={b.image}
                alt={b.title}
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
            )}
            <h2 className="text-xl font-semibold">{b.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 line-clamp-4">
              {b.summary}
            </p>

            <div className="mt-3 flex items-center justify-between text-sm text-zinc-500">
              <span>{b.author}</span>
              <span>{b.date}</span>
            </div>

            <div className="mt-3 text-sm text-blue-600 font-medium hover:underline">
              devamını oku →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}