// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  try {
    const mod = await import(`@/projects/${slug}.mdx`);
    const MDX = mod.default;
    const meta = mod.metadata || {};

    return (
      <div className="min-h-screen bg-zinc-50">
        {/* İçerik konteyneri */}
        <div className="mx-auto max-w-4xl px-4 pt-28 pb-16">
          {/* Geri dön butonu */}
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
              aria-label="Projelere dön"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Projelere Dön
            </Link>
          </div>
          {/* Kapak görseli */}
          {meta.image && (
            <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
              <div className="aspect-[16/9]">
                <Image
                  src={meta.image}
                  alt={meta.title || slug}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          )}

          {/* Başlık + açıklama + etiketler */}
          <header className="mt-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              {meta.title ?? slug}
            </h1>

            {meta.description && (
              <p className="mt-3 text-zinc-600 text-lg leading-relaxed">
                {meta.description}
              </p>
            )}

            {Array.isArray(meta.tags) && meta.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {meta.tags.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* MDX içerik */}
          <article className="prose prose-zinc max-w-none mt-8">
            <MDX />
          </article>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}