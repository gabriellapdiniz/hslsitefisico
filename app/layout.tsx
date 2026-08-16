import type { Metadata } from "next";
import "./globals.css";
import "./logo.css";

export const metadata: Metadata = {
  title: "HSL Águas Claras | Aprender também pode ser acolhedor",
  description: "Inglês, acompanhamento escolar e psicopedagogia com atendimento personalizado para crianças em Águas Claras.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
