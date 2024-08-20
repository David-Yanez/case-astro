'use client'
import { Phone } from '@/components/Phone'
import { cn } from '@/lib/utils'
import { COLORS, MODELS } from '@/validators/option-validator'
import { Configuration } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'

export const DesignPreview = ({configuration}: {configuration: Configuration} ) => {
    
    const [showConfetti, setShowconfetti] = useState<boolean>(false)
    useEffect(() => setShowconfetti(true), [])

    const {color, model} = configuration
    const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw

    const {label: modelLabel} = MODELS.options.find(({value}) => value === model)!
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
                Tu estuche de {modelLabel}
            </h3>
        </div>
    </div>
    </>
  )
}
