import IconStar from '@/src/assets/icons/icon-star';
import { CardFeedback } from '@/src/interfaces/card-feedback.interface';

export function CardFeedbacks(props: CardFeedback) {
  return (
    <article className="bg-white-900 flex h-auto w-[450px] max-md:w-[350px] flex-none flex-col items-start justify-between gap-200 border-2 border-red-900 p-8 py-5 rounded-2xl">
      {/* containenr das estrelas  */}
      <div className="justiy-center gap-050 flex items-center">
        {Array.from({ length: props.numberStar }).map((_, index) => (
          <IconStar key={index} className="size-5 text-[#FFCC00]" />
        ))}
      </div>

      {/* descrição do cliente  */}
      <p className="font-medium line-clamp-3">{props.descriptionFeedbakc}</p>

      <hr className="border-2 w-full border-red-900" />

      <div className="flex items-center justify-center gap-100">
        <img src={props.photoAvatar.src} className="w-[40px]" alt="" />
        <p>{props.namePeople}</p>
      </div>
    </article>
  );
}
