 "use client";

 import { ReactNode, useState } from "react";
 import {
   QueryClient,
   QueryClientProvider,
 } from "@tanstack/react-query";
 import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 import { I18nextProvider } from "react-i18next";
 import { i18n } from "../i18n/i18n";

 type ProvidersProps = {
   children: ReactNode;
 };

 export function Providers({ children }: ProvidersProps) {
   const [queryClient] = useState(
     () =>
       new QueryClient({
         defaultOptions: {
           queries: {
             retry: 1,
             refetchOnWindowFocus: false,
           },
         },
       }),
   );

   return (
     <I18nextProvider i18n={i18n}>
       <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
     </I18nextProvider>
   );
 }




