import { StaticImageData } from 'next/image';

export interface CardFeedback {
  numberStar: number;
  descriptionFeedbakc: string;
  photoAvatar: StaticImageData;
  namePeople: string;
}
