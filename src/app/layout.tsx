import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Emorro | Dating</title>
                <link rel="icon" type="image/svg+xml" href="/hearts.png" />
             </head>
            <body>
                {children}
            </body>
        </html>
    )
} 