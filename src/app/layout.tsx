import type { Metadata } from 'next'
import './globals.css'
import NavBar from "../ui/molecules/NavBar";

export const metadata: Metadata = {
  title: 'F*Choir',
  description: 'causing a racket // singing together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <title>F*Choir</title>
      <link rel="stylesheet" href={"https://indestructibletype.com/fonts/Jost.css"} type="text/css" charSet="utf-8" />
    </head>
      <body className={'text-black font-jost bg-pink'}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
