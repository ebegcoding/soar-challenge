import { z } from "zod";
import { Profile } from "./profile.types";
import { IsDirty } from "@/hooks/use-is-dirty";

const Validator = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^.*(?=.{8,})((?=.*\d)+)((?=.*[A-z]){1}).*$/,
      "The new password must contain at least: 8 characters, one number and one letter"
    ),
  dob: z
    .string()
    .min(1)
    .refine((value) => {
      return (
        Date.parse(value) <
        new Date().setFullYear(new Date().getFullYear() - 18)
      );
    }, "You should be at least 18 years old"),
  address: z.string().min(1),
  permanentAddress: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),
  country: z.string().min(1),
  avatar: z.string().min(1),
});

export type ProfileFormSchema = z.infer<typeof Validator>;

const Default: ProfileFormSchema = {
  name: "",
  username: "",
  email: "",
  password: "",
  dob: "",
  address: "",
  permanentAddress: "",
  city: "",
  postalCode: "",
  country: "",
  avatar: "",
};

export const ProfileFormData = {
  Default,
  Validator,
  toDefault: ({ dob, ...data }: Profile): ProfileFormSchema => ({
    ...Default,
    ...data,
    dob: dob.split("T")[0],
  }),
  toSubmit: (
    values: ProfileFormSchema,
    isDirty: IsDirty<ProfileFormSchema>
  ): Profile => {
    const body = {} as Profile;
    for (const key in values) {
      const _key = key as keyof ProfileFormSchema;
      if (isDirty(_key)) {
        body[_key] = values[_key];
      }
    }

    if (body.dob) {
      body.dob = new Date(body.dob).toISOString();
    }

    return body;
  },
};
