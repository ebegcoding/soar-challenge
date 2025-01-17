import { Card } from "@/interfaces/cards";
import { ReactComponent as CardLogoWhite } from "@/assets/card-logo-white.svg";
import { ReactComponent as CardLogo } from "@/assets/card-logo.svg";
import { ReactComponent as CardChipWhite } from "@/assets/card-chip-white.svg";
import { ReactComponent as CardChip } from "@/assets/card-chip.svg";
import {
  StyledCardBottom,
  StyledCardDetails,
  StyledCardLabel,
  StyledCardTop,
  StyledCardTopHeader,
  StyledCardValue,
  StyledContainer,
} from "./credit-card.styles";

export const CreditCard = ({
  id,
  balance,
  cardHolder,
  cardNumber,
  expiryDate,
}: Card) => {
  const dark = !!(id % 2);

  return (
    <StyledContainer $dark={dark}>
      <StyledCardTop>
        <StyledCardTopHeader>
          <div>
            <StyledCardLabel>Balance</StyledCardLabel>
            <StyledCardValue>
              {Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              }).format(balance)}
            </StyledCardValue>
          </div>
          {dark ? <CardChipWhite /> : <CardChip />}
        </StyledCardTopHeader>
        <StyledCardDetails>
          <div>
            <StyledCardLabel>CARD HOLDER</StyledCardLabel>
            <StyledCardValue>{cardHolder}</StyledCardValue>
          </div>
          <div>
            <StyledCardLabel>VALID THRU</StyledCardLabel>
            <StyledCardValue>
              {String(expiryDate.month).padStart(2, "0")}/{expiryDate.year}
            </StyledCardValue>
          </div>
        </StyledCardDetails>
      </StyledCardTop>
      <StyledCardBottom>
        <StyledCardValue>{cardNumber}</StyledCardValue>
        {dark ? <CardLogoWhite /> : <CardLogo />}
      </StyledCardBottom>
    </StyledContainer>
  );
};
