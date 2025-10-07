import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; 

  try {
    const mod = await import(`@/blog/${slug}.mdx`);
    const MDX = mod.default;
    const meta = mod.metadata || {};

    return (
      <div className="min-h-screen bg-zinc-50">
        <div className="mx-auto max-w-4xl px-4 pt-28 pb-16">
          {/* geri dön */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900"
              aria-label="Bloglara dön"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Bloglara Dön
            </Link>
          </div>

          {/* kapak görsel  */}
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

          {/* içerik */}
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