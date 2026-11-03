import { fundoSecaoPrincipal } from '../assets/images';
import Header from '../components/layout/header';
import Hero from './section/hero';

export default function FFGourmet() {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center p-400">
      <img
        src={fundoSecaoPrincipal.src}
        alt="imagem da seção pricipal"
        className="pointer-events-none absolute top-0 -z-0 h-screen w-full"
        />
      <section className="z-10 mt-0 flex w-[100%] max-w-[1280px] flex-col items-center justify-center">
        <Header />
        <Hero />
      </section>
    </section>
  );
}
