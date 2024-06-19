import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Phone } from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32
         lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
              <img src="/snake-1.png" className="w-full" />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Tu Imagen en un <span className=" bg-blue-600 px-2 text-white">Personalizado</span> Estuche de Celular</h1>
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
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img src="/users/user-1.png" alt="users" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-2.png" alt="users" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-3.png" alt="users" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-4.jpg" alt="users" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-5.jpg" alt="users" className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100" />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600 "/>
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600 "/>
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600 "/>
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600 "/>
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600 "/>
                  </div>
                  <p><span className=" font-semibold">1.350</span> clientes felices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/your-image.png" alt="image" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" />
              <img src="/line.png" alt="line 1" className="absolute w-20 -left-6 -bottom-6 select-none" />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg"/>
            </div>
          </div>
         </MaxWidthWrapper>
      </section>

    {/** Valor del negocio  */}
      <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-abalance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">Que dicen nuestros <span className="relative px-2">clientes <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-4 text-blue-600'/>  </span> </h2>
          <img src="/snake-2.png" alt="snake" className="w-24 order-0 lg:order-2" />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 ">
            <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                "El estuche se siente duradero y me han dicho que está muy bonito. Tuve el estuche durante dos meses  y <span className="p-0.5 bg-slate-800 text-white">la imagen es súper clara.</span>  El estuche que tenía antes, la imagen comenzó a desvanecerse en un color amarillento después de un par de semanas. Me encanta este estuche."
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <img src="/users/user-1.png" alt="user" className="rounded-full h-12 -w-12 object-cover" />
              <div className="flex flex-col">
                <p className="font-semibold">Jonathan</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stronke-[3px] text-blue-600"  />
                  <p className="text-sm">Compra Verficada</p>
                </div>
              </div>
            </div>
          </div>

          {/** second user review */}

          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 ">
            <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
                <Star className="h-5 w-5 text-blue-600 fill-blue-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                "Por lo general, guardo mi celular en el bolsillo con mis llaves, lo que provocaba rayones en mis estuches. Este, además de un rasguño apenas perceptible en la esquina,<span className="p-0.5 bg-slate-800 text-white"> parece nuevo después de aproximadamente medio año.</span> Me encanta."
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <img src="/users/user-4.jpg" alt="user" className="rounded-full h-12 -w-12 object-cover" />
              <div className="flex flex-col">
                <p className="font-semibold">Carlos</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stronke-[3px] text-blue-600"  />
                  <p className="text-sm">Compra Verficada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="pt-16">
          <Reviews />
      </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center text-abalance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">Sube tu foto y obten <span className="relative px-2 bg-blue-600 text-white">tu propio estuche</span> ahora. 
            </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40 ">
              <img src="/arrow.png" alt="flecha" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 " />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/horse.jpg" alt="imagen caballo" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full" />
              </div>

              <Phone className="w-60" imgSrc="/horse_phone.jpg"/>
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-blue-600 inline mr-1.5"/>
              Material de silicona de alta calidad
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-blue-600 inline mr-1.5"/>
              Resistente a rayones y huellas dactilares
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-blue-600 inline mr-1.5"/>
              Compatible con carga inalámbrica
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-blue-600 inline mr-1.5"/>
              Garantía de 5 años de impresión
            </li>
            <div className="flex justify-center">
              <Link className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8'
              })} href='/configure/upload'>Crea tu estuche ahora <ArrowRight className="h-4 w-4 ml-1.5"/></Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
