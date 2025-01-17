import { VirtualizedList, VirtualizedListFooter } from "@/components/organisms";
import { useFetchMore } from "@/hooks/use-fetch-more";
import { useCallback } from "react";
import { useGetCardsQuery } from "@/features/cards/cards.slice";
import { StyledCardHeader, StyledContainer } from "./credit-cards-card.styles";
import { Link } from "react-router-dom";

export const CreditCardsCard = () => {
  const [limit, setLimit] = useFetchMore(4);

  const { data = [], isFetching, isLoading } = useGetCardsQuery({ limit });

  const handleFetchMore = useCallback(() => {
    setLimit(data.length);
  }, [data.length]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <StyledContainer>
      <StyledCardHeader>
        <h2>My Cards</h2>
        <Link to="/cards">See all</Link>
      </StyledCardHeader>
      <VirtualizedList
        style={{ height: 100 }}
        horizontalDirection
        stateKey="contacts"
        data={data}
        context={{ loading: isFetching }}
        itemContent={(_index, data) => data.cardNumber}
        endReached={handleFetchMore}
        components={{ Footer: VirtualizedListFooter }}
      />
    </StyledContainer>
  );
};
