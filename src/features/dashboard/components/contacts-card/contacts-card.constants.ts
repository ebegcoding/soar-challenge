import { TransactionInput, TransactionType } from "@/interfaces/transactions";
import { z } from "zod";

const Validator = z.object({
  contact: z.string().min(1),
  amount: z
    .string()
    .min(1)
    .refine((val) => {
      return parseInt(val) >= 1;
    }, "Amount should be positive"),
});

export type QuickTransferFormSchema = z.infer<typeof Validator>;

const Default: QuickTransferFormSchema = {
  contact: null as unknown as string,
  amount: "",
};

export const QuickTransferFormData = {
  Default,
  Validator,
  toSubmit: (values: QuickTransferFormSchema): TransactionInput => {
    return {
      amount: parseInt(values.amount),
      title: values.contact,
      type: TransactionType.OTHER,
    };
  },
};
