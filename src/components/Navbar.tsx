import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { getRedirectStatusCodeFromError } from "next/dist/client/components/redirect"

export const Navbar = async () => {
    const { getUser} = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b dorder-zinc-200">
                <Link href="/" className=" flex z-40 font-semibold">
                     <span className="text-blue-600">Astro</span>case
                </Link>
                <div className="h-full flex items-center space-x-4">
                    {
                        user ? (
                            <>
                                <Link href="/api/auth/logout" className={buttonVariants({
                                    size: 'sm', variant: 'ghost'
                                })}>
                                    Cerrar sesión
                                </Link>
                               {isAdmin ?
                                 <Link href="/api/auth/logout" className={buttonVariants({
                                    size: 'sm', variant: 'ghost'
                                })}>
                                    Dashboard ✨
                                </Link> : null
                                 } 
                                 <Link href="/configure/upload" className={buttonVariants({
                                    size: 'sm',
                                    className: 'hidden sm:flex items-center gap-1'
                                })}>
                                    Crear case
                                    <ArrowRight  className="ml-1.5 h-5 w-5"/>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/api/auth/register" className={buttonVariants({
                                    size: 'sm', variant: 'ghost'
                                })}>
                                    Registrar
                                </Link>
                        
                                 <Link href="/api/auth/login" className={buttonVariants({
                                    size: 'sm', variant: 'ghost'
                                   
                                })}>
                                    Iniciar sesión
                                    
                                </Link>
                                <div className="h-8 w-px bg-zinc-200 hidden sm:block"/>

                                <Link href="/configure/upload" className={buttonVariants({
                                    size: 'sm',
                                    className: 'hidden sm:flex items-center gap-1'
                                })}>
                                    Crear case
                                    <ArrowRight  className="ml-1.5 h-5 w-5"/>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}
