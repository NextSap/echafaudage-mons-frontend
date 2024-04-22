'use client'

import {QueryClient, QueryClientProvider} from 'react-query'
import {useState} from "react";

// @ts-ignore
export default function Providers({ children, ...props }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}