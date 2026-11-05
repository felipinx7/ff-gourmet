'use client';

import { CardProduto } from '@/src/components/layout/card-produto';
import { TextProducts } from '@/src/constants/texts-product';

export function Cardapio() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-500 py-8 max-lg:flex-col">

      {/* container do textos  */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-poppins w-full gap-100 text-start leading-12 font-bold max-lg:w-full max-md:w-auto max-md:text-[2rem] max-md:leading-9 md:text-left">
          Conheça um pouco do nosso
          <span className="text-red-900"> cardápio.</span>
        </h2>
        <p className="font-sora text-black-800 w-[80%] text-center leading-5 font-[400] max-lg:w-full max-md:text-left">
          Conheça um pouco do nosso cardápio e descubra os sabores especiais e a experiência em
          nosso restaurante.
        </p>
      </div>

      {/* container dos cards  */}
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-200">
        {TextProducts.map(card => (
          <CardProduto key={card.nameProduct} {...card} />
        ))}
      </div>
    </section>
  );
}
