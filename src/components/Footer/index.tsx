import { DivBarS, DivContactS, DivDevS, FooterS, UlContactS } from "./Footer.style";
import { FiExternalLink } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin, BsGithub, BsInstagram, BsEnvelopeAtFill } from 'react-icons/bs';

export function Footer() {
    return (
        <FooterS>
            <DivDevS>
                Desenvolvido por:
                <a href="https://my-link-tree-five.vercel.app">
                    Elian Batista
                    <FiExternalLink />
                </a>
            </DivDevS>

            <DivBarS />

            <DivContactS>
                <span>Contato</span>
                <UlContactS>
                    <li><a href="mailto:elian.19batista@gmail.com">
                        <span className="contact-label">elian.19batista@gmail.com</span>
                        <BsEnvelopeAtFill size={26} />
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/elian-batista-beep">
                        <span className="contact-label">Elian Batista</span>
                        <BsLinkedin size={26} />
                    </a></li>
                    <li><a href="https://github.com/Elian-beep">
                        <span className="contact-label">Elian-beep</span>
                        <BsGithub size={26} />
                    </a></li>
                    <li><a href="https://www.instagram.com/e_lianb/">
                        <span className="contact-label">@e_lianb</span>
                        <BsInstagram size={26} />
                    </a></li>
                </UlContactS>
            </DivContactS>
        </FooterS>
    );
}