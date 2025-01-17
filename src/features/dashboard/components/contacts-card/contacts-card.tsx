import { DashboardCard } from "../dashboard-card";
import { useFetchMore } from "@/hooks/use-fetch-more";
import { useCallback } from "react";
import { useGetContactsQuery } from "../../dashboard.slice";
import { Button, Input } from "@/components/atoms";
import { IconSend } from "@tabler/icons-react";
import { useCreateOutgoingTransactionMutation } from "@/features/transactions/transactions.slice";
import { FormProvider, useForm } from "react-hook-form";
import {
  QuickTransferFormData,
  QuickTransferFormSchema,
} from "./contacts-card.constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "@/components/forms";
import { ContactSelect } from "./contact-select";
import { StyledForm, StyledInputContainer } from "./contacts-card.styles";
import { useResponsiveValue } from "@/hooks/use-responsive-value";

export const ContactsCard = () => {
  const submitButtonWidth = useResponsiveValue({
    base: "100px",
    mobile: "125px",
  });
  const [limit, setLimit] = useFetchMore(3);

  const form = useForm<QuickTransferFormSchema>({
    resolver: zodResolver(QuickTransferFormData.Validator),
    defaultValues: QuickTransferFormData.Default,
  });

  const [mutation, mutationState] = useCreateOutgoingTransactionMutation();

  const { data = [], isFetching } = useGetContactsQuery({ limit });

  const handleFetchMore = useCallback(() => {
    setLimit(data.length);
  }, [data.length]);

  return (
    <FormProvider {...form}>
      <DashboardCard title="Quick transfer" area="contacts">
        <StyledForm
          onSubmit={form.handleSubmit(async (values) => {
            const body = QuickTransferFormData.toSubmit(values);
            await mutation(body);
            form.reset();
          })}
        >
          <FormItem
            control={form.control}
            name="contact"
            component={ContactSelect}
            data={data}
            loading={isFetching}
            handleFetchMore={handleFetchMore}
          />
          <StyledInputContainer>
            <label htmlFor="amount" id="amount-label">
              Write Amount
            </label>
            <FormItem
              aria-describedby="amount-label"
              control={form.control}
              name="amount"
              placeholder="0.00"
              component={Input}
              type="number"
              min={1}
              rightSectionWidth={submitButtonWidth}
              rightSection={
                <Button
                  style={{ width: submitButtonWidth }}
                  disabled={
                    !form.watch("amount") ||
                    !form.watch("contact") ||
                    mutationState.isLoading
                  }
                  icon={IconSend}
                  type="submit"
                >
                  Send
                </Button>
              }
            />
          </StyledInputContainer>
        </StyledForm>
      </DashboardCard>
    </FormProvider>
  );
};
