import type { Metadata } from 'next';
import './pokemon.css';

export const metadata: Metadata = {
    title: "Pokemon Song Guesser",
    description: "Pokemon Song Guesser",
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div id="root">{children}</div>
    )
  }