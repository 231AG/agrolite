import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-secondary mb-4 heading-display">
          404
        </h1>
        <p className="text-muted text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
