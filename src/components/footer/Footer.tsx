import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-orange-200 text-yellow-950">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            A Garota do Blog por Janielle Oliveira | Copyright: {data}
                        </p>
                    <p className='text-lg'>Redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/janielleoliveira/">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>

                        <a href="https://www.instagram.com/jane.olivi/">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>

                        <a href="https://github.com/JanielleOliveira">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer