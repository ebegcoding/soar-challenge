import { Avatar } from "@/components/atoms";
import { VirtualizedList, VirtualizedListFooter } from "@/components/organisms";
import { Contact } from "@/features/dashboard/dashboard.types";
import { useResponsiveValue } from "@/hooks/use-responsive-value";
import { useUncontrolled } from "@/hooks/use-uncontrolled";
import { useCallback } from "react";
import { StyledContact, StyledContactName } from "./contact-select.styles";

export const ContactSelect = ({
  value,
  defaultValue,
  onChange,
  data,
  loading,
  handleFetchMore,
}: {
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value?: string | null) => void;
  data: Contact[];
  loading: boolean;
  handleFetchMore: () => void;
}) => {
  const { avatar, gap, height } = useResponsiveValue({
    base: {
      avatar: "50px",
      gap: "20px",
      height: "93px",
    },
    mobile: {
      avatar: "70px",
      gap: "28px",
      height: "127px",
    },
  });

  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    onChange,
    finalValue: null,
  });

  const itemContent = useCallback(
    (_index: number, data: Contact) => {
      const active = data.name === _value;

      return (
        <StyledContact
          type="button"
          aria-selected={active}
          onClick={() => {
            handleChange(data.name);
          }}
        >
          <Avatar size={avatar} src={data.avatar} username={data.name} />
          <div>
            <StyledContactName>{data.name}</StyledContactName>
            {data.position}
          </div>
        </StyledContact>
      );
    },
    [_value, avatar]
  );

  return (
    <VirtualizedList
      style={{ height }}
      gap={gap}
      horizontalDirection
      stateKey="contacts"
      data={data}
      context={{ loading }}
      itemContent={itemContent}
      endReached={handleFetchMore}
      components={{ Footer: VirtualizedListFooter }}
    />
  );
};
