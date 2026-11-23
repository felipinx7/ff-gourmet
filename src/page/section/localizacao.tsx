import IconArrowRight from '@/src/assets/icons/icon-arrow-right';
import IconInstagram from '@/src/assets/icons/icon-instagram';
import IconWhatsApp from '@/src/assets/icons/icon-whatsapp';
import { fotoSectionLocalizacao } from '@/src/assets/images';

export function Localizacao() {
  return (
    <section className="flex w-full items-center justify-center p-6">
      <article className="flex w-auto items-center rounded-3xl bg-red-900 max-lg:flex-col">
        {/* container de textos  */}
        <div className="flex w-[50%] flex-col items-start justify-start gap-200 p-6 max-lg:w-full">
          <h5 className="text-white-900 text-3xl leading-8 font-bold max-md:text-[1.6rem]">
            Confira aonde ficamos <br /> localizados.
          </h5>
          <p className="font-sora text-white-900 w-[80%] max-md:text-[0.9rem] max-md:w-full">
            Conheça um pouco do nosso cardápio e descubra os sabores especiais e a experiência em
            nosso restaurante.
          </p>

          {/* container rede sociais  */}
          <div className="gap-050 flex flex-col items-start justify-start">
            {/* instagram */}
            <h6 className="caption text-white-900 flex items-center justify-center gap-100">
              <IconInstagram className="size-4" />
              ff.gourmet_
            </h6>

            {/* whatsapp */}
            <h6 className="caption text-white-900 flex items-center justify-center gap-100">
              <IconWhatsApp className="size-4" />
              (21) 99406-1101
            </h6>
          </div>

          {/* botão de chamar no whatsApp */}
          <button className="bg-white-900 hover:bg-black-100 flex w-auto cursor-pointer items-center gap-200 rounded-full px-4 py-3 font-bold text-red-900 transition-all duration-500 ease-in-out">
            Chamar no WhatsApp
            <div className="text-white-900 rounded-full bg-red-900 p-2">
              <IconArrowRight className="size-4" />
            </div>
          </button>
        </div>

        {/* containe de imagem */}
        <div className="w-[50%] rounded-tr-lg rounded-br-lg p-4 max-lg:w-full">
          <img
            src={fotoSectionLocalizacao.src}
            className="w-full object-contain max-lg:rounded-lg max-lg:contain-none"
            alt=""
          />
        </div>
      </article>
    </section>
  );
}
