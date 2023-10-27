export const formatPrice = (price: number) => {
    return "R$ " + price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
      });
};