import './globals.css'

export const metadata = {
  title: 'Hope Bridge',
  description: 'Connecting Hearts, Building Hope',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <base href="/HopeBridge-/" />
      </head>
      <body>{children}</body>
    </html>
  )
}
