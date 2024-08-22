'use client'
import { Phone } from '@/components/Phone'
import { Button } from '@/components/ui/button'
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { cn, formatPrice } from '@/lib/utils'
import { COLORS, MODELS } from '@/validators/option-validator'
import { Configuration } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Check } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'
import { createCheckoutSession } from './actions'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { title } from 'process'

export const DesignPreview = ({configuration}: {configuration: Configuration} ) => {
  
  const router = useRouter()
  const {toast} = useToast()

    const [showConfetti, setShowconfetti] = useState<boolean>(false)
    useEffect(() => setShowconfetti(true), [])

    const {color, model, finish, material} = configuration
    const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw

    const {label: modelLabel} = MODELS.options.find(({value}) => value === model)!
  
    let totalPrice = BASE_PRICE
    if(material === 'polycarbonate')
        totalPrice += PRODUCT_PRICES.material.polycarbonate
    if (finish === 'textured') 
        totalPrice += PRODUCT_PRICES.finish.textured
  
      const {mutate: createPaymentSession} = useMutation({
        mutationKey: ["get-checkout-session"],
        mutationFn: createCheckoutSession,
        onSuccess: ({url}) =>{
          if(url) router.push(url)
            else throw new Error('No se puede recuperar el link de pago')
        },
        onError: () =>{
          toast({
            title: 'Algo salió mal',
            description: 'Hubo un error de nuestra parte. Por favor inténtalo de nuevo',
            variant: 'destructive'
          })
        }
    }) 

    return (
    <>
    <div 
    aria-hidden='true'
    className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
        <Confetti active={showConfetti} 
        config={{elementCount: 200, spread: 90}}/>
    </div>

    <div className='mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12'>
        <div className='md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2'>
            <Phone imgSrc={configuration.croppedImageUrl!} 
            className={cn(`bg-${tw}`)}/>
        </div>

        <div className='mt-6 sm:col-span-9 sm:mt-0 md:row-end-1'>
            <h3 className='text-3xl font-bold tracking-tight text-gray-900'>
                Tu estuche de   {modelLabel}
            </h3>
            <div className='mt-3 flex items-center gap-1.5 text-base'>
                <Check className='h-4 w-4 text-green-500' />
                Listo para enviar 
            </div>
        </div>
        <div className='sm:col-span-12 md:col-span-9 text-base'>
            <div className='grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10'>
                <div>
                    <p className='font-medium text-zinc-950'>Ventajas</p>
                    <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                        <li>Compatible con carga inalámbrica</li>
                        <li>Absorción de impactos TPU</li>
                        <li>Embalaje hecho con materiales reciclados</li>
                        <li>Garantía de impresión de 5 años</li>
                    </ol>
                </div>
                <div>
                    <p className='font-medium text-zinc-950'>Materiales</p>
                    <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                        <li>Material duradero y de alta calidad</li>
                        <li>Recubrimiento resistente a rayones y huellas dactilares</li>
                    </ol>
                </div>
            </div>


          <div className='mt-8'>
            <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
              <div className='flow-root text-sm'>
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>Precio base</p>
                  <p className='font-medium text-gray-900'>
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {finish === 'textured' ? (
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Textura final</p>
                    <p className='font-medium text-gray-900'>
                      {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                    </p>
                  </div>
                ) : null}

                {material === 'polycarbonate' ? (
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Material de policarbonato suave</p>
                    <p className='font-medium text-gray-900'>
                      {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                    </p>
                  </div>
                ) : null}

                <div className='my-2 h-px bg-gray-200' />

                <div className='flex items-center justify-between py-2'>
                  <p className='font-semibold text-gray-900'>Total del pedido</p>
                  <p className='font-semibold text-gray-900'>
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8 flex justify-end pb-12'>
              <Button
              isLoading={true}
               onClick={() => createPaymentSession({configId: configuration.id})}
                className='px-4 sm:px-6 lg:px-8'>
                Verificar<ArrowRight className='h-4 w-4 ml-1.5 inline' />
              </Button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
