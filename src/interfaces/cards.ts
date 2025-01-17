export type CardApiRequestQuery = {
  limit: number;
};

export type Card = {
  id: number;
  balance: number;
  cardHolder: string;
  expiryDate: {
    month: number;
    year: number;
  };
  cardNumber: string;
};
