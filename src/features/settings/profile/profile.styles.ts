import { sprinkles } from "@/theme/sprinkles";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > button[type="submit"] {
    margin-left: auto;
    min-width: 190px;
  }

  @media screen and ${sprinkles.smallerThan("mobile")} {
    gap: 16px;

    > button[type="submit"] {
      margin-left: 0;
    }
  }
`;

export const StyledFormInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 22px;

  @media screen and ${sprinkles.smallerThan("mobile")} {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`;
