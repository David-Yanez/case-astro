'use client'

import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { useUploadThing } from "@/lib/uploadthing"
import { cn } from "@/lib/utils"
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import Dropzone, {FileRejection} from "react-dropzone"

export default function Upload() {
    const {toast} = useToast()
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const [uploadProgrees, setUploadProgress] = useState<number>(0)
    const route = useRouter()

    const {startUpload, isUploading} = useUploadThing("imageUploader", {
        onClientUploadComplete: ([data]) =>{
           // const configId = data.serverData.configId
            const configId = data.serverData.configId
            startTransition(() =>{
                route.push(`/configure/design?id=${configId}`)
            })
        },
        onUploadProgress(p){
            setUploadProgress(p)
        }
    })

    const onDropRejected = (rejectedFile: File[]) => {
        const [file] = rejectedFile
        setIsDragOver(false)
        toast({
            title: `${file.file.type} Archivo no soportado.`,
            description: "Por favor elige solo imagenes de tipo PNG, JPG o JPEG",
            variant: "destructive"
        })
    }
    const onDropAccepted = (acceptedFiles: File[]) => {
        startUpload(acceptedFiles, {configId: undefined})
        setIsDragOver(false)
    }

    //const isUploading = false
    const [isPending, startTransition] = useTransition()

    return (
        <div className={cn("relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", {
            'ring-blue-900/25 bg-blue-900/10': isDragOver,
        })}>
            <div  className="relative flex flex-1 flex-col items-center justify-center w-full">
                <Dropzone onDropRejected={onDropRejected} onDropAccepted={onDropAccepted} accept={{
                    "image/png": [".png"],
                    "image/jpeg": [".jpeg"],
                    "image/jpg": [".jpg"]
                }}
                onDragEnter={() => setIsDragOver(true)}
                onDragLeave={() => setIsDragOver(false)}>
                    {({getRootProps, getInputProps}) => (
                        <div className="h-full w-full flex-1 flex flex-col items-center justify-center" {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragOver ? <MousePointerSquareDashed className="h-6 w-6 text-zonc-500 mb-2"/> : isUploading || isPending ? <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" /> : <Image className="h-6 w-6 text-zinc-500 mb-2"/>}
                            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                                {
                                    isUploading ? 
                                    <div className="flex flex-col items-center">
                                        <p>Cargando...</p>
                                        <Progress value={uploadProgrees} className="mt-2 w-40 h-2 bg-gray-300"/>
                                    </div> 
                                    : isPending ? 
                                    <div className="flex flex-col items-center">
                                        <p>Redireccionando, por favor espera...</p>
                                    </div>
                                    : isDragOver ? 
                                    <p>
                                      <span className="font-semibold">Soltar archivo</span> para subir
                                    </p>
                                    
                                     : <p>
                                     <span className="font-semibold">Clic para subir</span> o arrastra y suelta
                                   </p>
                                }

                            </div>
                            {
                                isPending ? null :(
                                    <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
                                )
                            }
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}