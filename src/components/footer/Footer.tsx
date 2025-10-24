import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-orange-200 text-yellow-950">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal por Janielle Oliveira | Copyright: {data}
                        </p>
                    <p className='text-lg'>Redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogoIcon size={48} weight='bold' />
                        <InstagramLogoIcon size={48} weight='bold' />
                        <FacebookLogoIcon size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer