import { CardFeedbacks } from '@/src/components/layout/card-feedback';
import { TextFeedbacks } from '@/src/constants/texts-feedbacks';

export function Feedbacks() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-500 py-8 max-lg:flex-col">
      {/* container do textos  */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-poppins w-full gap-100 text-start leading-12 font-bold max-lg:w-full max-md:w-auto max-md:text-[2rem] max-md:leading-9 md:text-left">
          Confira a opinião dos nossos cliente
          <span className="text-red-900"> sobre nós.</span>
        </h2>
        <p className="font-sora text-black-800 w-[80%] text-center leading-5 font-[400] max-lg:w-full max-md:text-left">
          Conheça um pouco do nosso cardápio e descubra os sabores especiais e a experiência em
          nosso restaurante.
        </p>
      </div>

      {/* container dos cards de feedbacks */}
      <div className="carrosel flex h-auto w-full flex-col gap-200 overflow-hidden">
        <div className="flex w-max gap-200 trilho-esquerda">
          {TextFeedbacks.map((card, index) => (
            <CardFeedbacks {...card} key={`original-${index}`} />
          ))}

          {TextFeedbacks.map((card, index) => (
            <div aria-hidden="true" key={`copia-${index}`} className="flex-none">
              <CardFeedbacks {...card} />
            </div>
          ))}
        </div>
        <div className="flex w-max gap-200 trilho-direita">
          {TextFeedbacks.map((card, index) => (
            <CardFeedbacks {...card} key={`direita-original-${index}`} />
          ))}

          {TextFeedbacks.map((card, index) => (
            <div key={`direita-copia-${index}`} className="flex-none">
              <CardFeedbacks {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
