import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32
         lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="retative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              <img src="/snake-1.png" className="w-full" />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900
            text-5xl md:text-6xl lg:text-7xl">Tu Imagen en un <span className=" bg-blue-600 px-2 text-white">Personalizado</span> Estuche de Celular</h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Captura tus recuerdos favoritos en tu propio 
              <span className="font-semibold"> estuche de celular</span>. AstroCase proteje tus recuerdos y no solo tu celular
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start" >
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-blue-600"/>
                  Alta calidad, material resistente
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-blue-600"/>
                  5 años de garantía de impresión 
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-blue-600"/>
                  Soporta modelos nuevos de iPhone
                </li>

              </div>

            </ul>
          </div>
         </MaxWidthWrapper>
      </section>
    </div>
  );
}
