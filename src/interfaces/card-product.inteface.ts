import { StaticImageData } from "next/image";

export interface CardProduct {
  photo: StaticImageData;
  nameProduct: string;
  priceProduct: number;
  descriptionProduct: string;
  linkForWhatsApp: string
}
