import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin, faInstagram, faCodepen} from '@fortawesome/free-brands-svg-icons'; 

export default function Home() {
  return (
    <div className="w-full flex justify-center px-24">
      <div className="grid grid-cols-2 w-full max-w-screen-xl">
        <div className="min-h-screen">
          <div className="sticky top-0 h-screen pt-48 pb-20 flex flex-col justify-between">
            <div>
              <h1 className="text-7xl font-bold tracking-tight text-slate-200">Adrian Morban</h1>
              <h2 className="text-2xl text-slate-400 font-semibold">Full-Stack Developer</h2>
            </div>
            <div className='flex text-slate-200 gap-x-4'>
              <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8' />
              <FontAwesomeIcon icon={faGithub} className='w-8 h-8' />
              <FontAwesomeIcon icon={faCodepen} className='w-8 h-8' />
              <FontAwesomeIcon icon={faXTwitter} className='w-8 h-8' />
              <FontAwesomeIcon icon={faInstagram} className='w-8 h-8' />
            </div>
          </div>
        </div>
        <div className="text-slate-400 flex flex-col gap-4 text-lg">
          <div className="py-48 flex flex-col gap-4">
            <p>Soy un capacitado desarrollador <b>Full-Stack</b> con experiencia en desarrollo web y una
                sólida formación técnica en Ingeniería de Sistemas. Competente en tecnologías como
                Node.js, PHP, Laravel y más, me destaco en la creación de soluciones web adaptadas
                a las diversas necesidades de los clientes.
            </p>
            <p>Mi experiencia incluye el desarrollo de páginas web, plataformas de comercio electrónico y herramientas web, con enfoque en optimización SEO y código de alta calidad.
                Me dedico a entregar resultados que superen las expectativas del cliente.
            </p>
            <p>Mis habilidades interpersonales, incluyendo el liderazgo, la resolución de problemas y
                el trabajo en equipo, complementan mis habilidades técnicas, lo que me convierte en
                un activo valioso en entornos colaborativos. Estoy comprometido a mantenerme actualizado con las tendencias de la industria y contribuir a proyectos innovadores.
            </p>
          </div>
          <div className="py-48 flex flex-col gap-4">
            <p>Soy un capacitado desarrollador <b>Full-Stack</b> con experiencia en desarrollo web y una
                sólida formación técnica en Ingeniería de Sistemas. Competente en tecnologías como
                Node.js, PHP, Laravel y más, me destaco en la creación de soluciones web adaptadas
                a las diversas necesidades de los clientes.
            </p>
            <p>Mi experiencia incluye el desarrollo de páginas web, plataformas de comercio electrónico y herramientas web, con enfoque en optimización SEO y código de alta calidad.
                Me dedico a entregar resultados que superen las expectativas del cliente.
            </p>
            <p>Mis habilidades interpersonales, incluyendo el liderazgo, la resolución de problemas y
                el trabajo en equipo, complementan mis habilidades técnicas, lo que me convierte en
                un activo valioso en entornos colaborativos. Estoy comprometido a mantenerme actualizado con las tendencias de la industria y contribuir a proyectos innovadores.
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
