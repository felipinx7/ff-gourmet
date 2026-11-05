import { fundoSecaoPrincipal } from '../assets/images';
import Header from '../components/layout/header';
import { Cardapio } from './section/cardapio';
import { Feedbacks } from './section/feedbacks';
import Hero from './section/hero';

export default function FFGourmet() {
  return (
    <section className="relative h-auto w-full">
      <img
        src={fundoSecaoPrincipal.src}
        alt="imagem da seção pricipal"
        className="pointer-events-none absolute top-0 -z-0 h-full w-full object-cover"
      />
      <section className="flex h-auto w-full flex-col items-center justify-center p-400">
        <section className="z-10 mt-0 flex w-[100%] max-w-[1280px] flex-col items-center justify-center">
          <Header />
          <Hero />
          <Cardapio/>
          <Feedbacks/>
        </section>
      </section>
    </section>
  );
}
