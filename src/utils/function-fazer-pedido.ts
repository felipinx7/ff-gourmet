const numeroTelefone = '5588993255962';

export const FazerPedido = (nomeProduto: string) => {
  const mensagem = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(`Olá! Quero pedir: ${nomeProduto}`)}`;
  return mensagem;
};
