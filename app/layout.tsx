import type {Metadata} from 'next'
import '../styles/globals.css'
import {ThemeProvider} from "next-themes";
import {Toaster} from "@/components/ui/toaster"
import {ReactNode} from "react";
import Providers from "@/app/providers";

export const metadata: Metadata = {
    title: 'Echafaudage Mons - Devis en ligne',
    description: 'Demande ton devis en ligne - Echafaudage Mons',
}

export default function RootLayout({children}: { children: ReactNode }) {

    return (
        <html lang="fr">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <Providers>{children}</Providers>
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    )
}
