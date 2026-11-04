import { batataFrita } from '../assets/images';
import { CardProduct } from '../interfaces/card-product.inteface';
import { FazerPedido } from '../utils/function-fazer-pedido';

export const TextProducts: CardProduct[] = [
  {
    photo: batataFrita,
    nameProduct: 'Batata Frita',
    priceProduct: 12.95,
    descriptionProduct: 'Batatas douradas e crocantes por fora, macias por dentro.',
    linkForWhatsApp: FazerPedido('Batata Frita'),
  },
  {
    photo: batataFrita,
    nameProduct: 'Hambúrguer Clássico',
    priceProduct: 24.59,
    descriptionProduct: 'Pão macio, carne suculenta e queijo derretido.',
    linkForWhatsApp: FazerPedido('Hambúrguer Clássico'),
  },
  {
    photo: batataFrita,
    nameProduct: 'Coxinha Crocante',
    priceProduct: 9.95,
    descriptionProduct: 'Recheio de frango cremoso em massa frita perfeita.',
    linkForWhatsApp: FazerPedido('Coxinha Crocante'),
  },
  {
    photo: batataFrita,
    nameProduct: 'Pastel de Queijo',
    priceProduct: 11.25,
    descriptionProduct: 'Massa folhada e recheio derretido de queijo coalho.',
    linkForWhatsApp: FazerPedido('Pastel de Queijo'),
  },
  {
    photo: batataFrita,
    nameProduct: 'X-Bacon',
    priceProduct: 28.9,
    descriptionProduct: 'Hambúrguer suculento com bacon crocante, queijo e molho especial.',
    linkForWhatsApp: FazerPedido('X-Bacon'),
  },
  {
    photo: batataFrita,
    nameProduct: 'Pizza de Calabresa',
    priceProduct: 35.75,
    descriptionProduct: 'Massa artesanal com calabresa, queijo e molho saboroso.',
    linkForWhatsApp: FazerPedido('Pizza de Calabresa'),
  },
  {
    photo: batataFrita,
    nameProduct: 'Refrigerante Lata',
    priceProduct: 7.5,
    descriptionProduct: 'Geladinho para acompanhar seu pedido com sabor refrescante.',
    linkForWhatsApp: FazerPedido('Refrigerante Lata'),
  },
  {
    photo: batataFrita,
    nameProduct: 'Açaí',
    priceProduct: 18.9,
    descriptionProduct: 'Sobremesa cremosa e refrescante, perfeita para qualquer ocasião.',
    linkForWhatsApp: FazerPedido('Açaí'),
  },
];
