import {
  CreditCard,
  VirtualizedList,
  VirtualizedListFooter,
} from "@/components/organisms";
import { useFetchMore } from "@/hooks/use-fetch-more";
import { useCallback } from "react";
import { useGetCardsQuery } from "@/features/cards/cards.slice";
import { StyledCardHeader, StyledContainer } from "./credit-cards-card.styles";
import { Link } from "react-router-dom";
import { useResponsiveValue } from "@/hooks/use-responsive-value";

export const CreditCardsCard = () => {
  const height = useResponsiveValue({ base: "200px", mobile: "235px" });
  const [limit, setLimit] = useFetchMore(4);

  const { data = [], isFetching } = useGetCardsQuery({ limit });

  const handleFetchMore = useCallback(() => {
    setLimit(data.length);
  }, [data.length]);

  return (
    <StyledContainer>
      <StyledCardHeader>
        <h2>My Cards</h2>
        <Link to="/cards">See all</Link>
      </StyledCardHeader>
      <VirtualizedList
        gap="30px"
        style={{ height }}
        horizontalDirection
        stateKey="contacts"
        data={data}
        context={{ loading: isFetching }}
        itemContent={(_index, data) => <CreditCard {...data} />}
        endReached={handleFetchMore}
        components={{ Footer: VirtualizedListFooter }}
      />
    </StyledContainer>
  );
};
