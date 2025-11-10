'use client';

import NextError from 'next/error';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <NextError statusCode={undefined as any} />
      </body>
    </html>
  );
}
