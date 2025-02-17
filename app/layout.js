import './globals.css'

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Personal portfolio website showcasing my work and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
