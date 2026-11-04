import IconCart from '@/src/assets/icons/icon-cart';
import { CardProduct } from '@/src/interfaces/card-product.inteface';

export function CardProduto(props: CardProduct) {
  return (
    <article className="bg-white-900 flex w-full flex-col items-center justify-between rounded-4xl border-3 border-red-900 transition-all duration-500 ease-in-out hover:scale-105 max-md:h-auto">
      {/* container da imagem  */}
      <div className="relative z-0 h-[50%] w-full p-1 max-md:p-0">
        <img
          src={props.photo.src}
          className="h-full w-full object-cover max-md:rounded-tl-4xl max-md:rounded-tr-4xl"
          alt=""
        />
      </div>

      {/* container das informações do produto  */}
      <div className="gap-025 flex h-[50%] flex-col items-start justify-between p-200 max-md:h-full">
        <h6 className="font-bold">{props.nameProduct}</h6>
        <p className="text-black-500 line-clamp-2 max-md:line-clamp-3 max-md:w-full">
          {props.descriptionProduct}
        </p>
        <span className="text-[1.2rem] font-bold text-red-900">
          R$ {String(props.priceProduct.toString().replace('.', ','))}
        </span>

        {/* container de fazer pedido  */}
        <a href={props.linkForWhatsApp} target="_blank" className="mt-2 w-full">
          <button className="text-white-900 group font-poppins flex w-full cursor-pointer flex-row-reverse items-center justify-center gap-100 rounded-md bg-red-900 p-2 font-medium transition-all duration-500 ease-in-out hover:scale-105 hover:bg-red-700">
            FAZER PEDIDO
            <IconCart className="size-5 text-white transition-all duration-500 ease-in-out group-hover:-rotate-[5deg]" />
          </button>
        </a>
      </div>
    </article>
  );
}
