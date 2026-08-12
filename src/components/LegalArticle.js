export default function LegalArticle({ title, children }) {
  return (
    <div className="py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-ink mb-8">{title}</h1>
        <div className="space-y-6 text-muted leading-relaxed text-[15px]">{children}</div>
      </article>
    </div>
  );
}
