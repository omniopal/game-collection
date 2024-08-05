import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
    title: "Jacob's Games",
    description: "My Mario Game Collection",
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
        <body>
            <div id="root">{children}</div>
        </body>
        </html>

    )
  }