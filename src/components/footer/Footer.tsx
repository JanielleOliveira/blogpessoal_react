import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (

        
      <div className="flex justify-center bg-slate-900 text-slate-100 border-t border-emerald-500/30 shadow-[0_-2px_10px_rgba(16,185,129,0.2)]">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-semibold text-emerald-400 tracking-wide">
            Console Blog por{" "}
            <span className="text-slate-300">Janielle Oliveira</span> | Copyright: {data}
          </p>

          <p className="text-lg text-slate-400">Conecte-se comigo</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/janielleoliveira/"
              target="_blank"
              className="hover:text-emerald-400 transition-colors duration-200">
              <LinkedinLogoIcon size={42} weight="bold" />
            </a>

            <a href="https://www.instagram.com/jane.olivi/"
              target="_blank"
              className="hover:text-emerald-400 transition-colors duration-200">
              <InstagramLogoIcon size={42} weight="bold" />
            </a>

            <a href="https://github.com/JanielleOliveira"
              target="_blank"
              className="hover:text-emerald-400 transition-colors duration-200">
              <GithubLogoIcon size={42} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Footer;
