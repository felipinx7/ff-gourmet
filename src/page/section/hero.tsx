import IconArrowRight from '@/src/assets/icons/icon-arrow-right';
import IconStar from '@/src/assets/icons/icon-star';
import IconWhatsApp from '@/src/assets/icons/icon-whatsapp';
import { bonecosTresD, pessoaSatisfeitas } from '@/src/assets/images';

export default function Hero() {
  return (
    <section className="flex w-full items-center justify-between py-8 max-lg:flex-col-reverse">
      <div className="flex flex-col max-md:w-full gap-200">
        {/* container de clientes satisfeitos  */}
        <div className="flex items-center justify-center gap-100">
          <img src={pessoaSatisfeitas.src} className="w-[110px]" alt="" />
          <div className="gap-025 flex w-full flex-col justify-start">
            <p className="font-sora caption font-normal text-red-900">+ 450 Clientes Satisfeitos</p>
            <div className="gap-025 flex items-center justify-start">
              {Array.from({ length: 5 }).map((_, index) => (
                <IconStar key={index} className="size-4 text-red-900" />
              ))}
            </div>
          </div>
        </div>

        {/* container do textos  */}
        <div className="flex flex-col items-start justify-start gap-100">
          <h1 className="font-poppins w-[70%] max-md:text-[2rem] max-md:w-auto max-md:leading-9 max-lg:w-full gap-100 leading-12 font-bold">
            Carinho que se sente em cada
            <span className="text-red-900"> detalhe.</span>
          </h1>
          <p className="font-sora text-black-800 max-lg:w-full caption w-[60%] leading-5 font-[400]">
            Receitas de família, ingredientes escolhidos a dedo e o gosto da cozinha de casa. Venha
            se sentar com a gente ou peça pelo WhatsApp.
          </p>

        </div>

          {/* container dos botões  */}
          <div className="flex w-full flex-row max-md:flex-col items-center justify-start gap-200">
            <button className="font-poppins text-white-900 relative flex w-[40%] max-md:w-full cursor-pointer items-center justify-center rounded-full bg-red-900 p-4 py-4 font-bold">
              Ver Cardápio
              <div className="bg-white-900 absolute right-2 flex h-10 w-10 items-center justify-center rounded-full">
                <IconArrowRight className="size-6 text-red-900" />
              </div>
            </button>

            <button className="bg-white-900 font-poppins flex w-[40%] max-md:w-full cursor-pointer items-center justify-center gap-150 rounded-full border-2 border-red-900 p-3 font-bold text-red-900">
              <IconWhatsApp className="size-6 text-red-900" />
              WhatsApp
            </button>
          </div>
      </div>

      {/* container de imagem */}
      <img src={bonecosTresD.src} className="w-[700px] max-md:w-[500px]" alt="" />
    </section>
  );
}
