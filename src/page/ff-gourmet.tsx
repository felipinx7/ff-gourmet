import { fundoSecaoPrincipal } from '../assets/images';
import Header from '../components/layout/header';

export default function FFGourmet() {
  return (
    <section className="flex p-400 h-auto w-full flex-col items-center justify-center">
      <img
        src={fundoSecaoPrincipal.src}
        alt="imagem da seção pricipal"
        className="pointer-events-none absolute top-0 -z-0 w-full h-screen"
      />
      <section className="z-10 mt-0 flex max-w-[1280px] w-[100%] flex-col items-center justify-center">
        <Header />
      </section>
    </section>
  );
}
