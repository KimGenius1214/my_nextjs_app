 "use client";

 import { useQuery } from "@tanstack/react-query";
 import { apiGet } from "../apiClient";

 type ExampleData = {
   message: string;
 };

 async function fetchExample(): Promise<ExampleData> {
   // 예시: /api/example 엔드포인트를 호출
   return apiGet<ExampleData>("/api/example");
 }

 export function useExampleQuery() {
   return useQuery({
     queryKey: ["example"],
     queryFn: fetchExample,
   });
 }




