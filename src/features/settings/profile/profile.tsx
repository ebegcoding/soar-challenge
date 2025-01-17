import invariant from "tiny-invariant";
import { useGetProfileQuery, useUpdateProfileMutation } from "./profile.slice";
import { FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "@/components/forms";
import { Button, DateInput, Input } from "@/components/atoms";
import { ProfileFormData, ProfileFormSchema } from "./profile.constants";
import { useExtendedForm } from "@/hooks/use-extended-form";
import {
  StyledForm,
  StyledFormInputs,
  StyledFormInputsContainer,
} from "./profile.styles";
import { ImageInput } from "@/components/molecules";
import { useResponsiveValue } from "@/hooks/use-responsive-value";

export const Profile = () => {
  const avatarSize = useResponsiveValue({ base: "100px", tablet: "90px" });
  const { data, isFetching } = useGetProfileQuery();

  const [updateMutation, updateMutationState] = useUpdateProfileMutation();

  // query is fetched in home route, so data should never be undefined
  invariant(data);

  const form = useExtendedForm<ProfileFormSchema>({
    resolver: zodResolver(ProfileFormData.Validator),
    defaultValues: ProfileFormData.toDefault(data),
    updateOnDefaultValuesChange: true,
  });

  return (
    <FormProvider {...form}>
      <StyledForm
        onSubmit={form.handleSubmit(async (values) => {
          const body = ProfileFormData.toSubmit(values, form.isDirty);
          await updateMutation(body);
        })}
      >
        <FormItem
          control={form.control}
          name="avatar"
          component={ImageInput}
          size={avatarSize}
        />
        <StyledFormInputsContainer>
          <StyledFormInputs>
            <FormItem
              control={form.control}
              name="name"
              label="Your name"
              component={Input}
            />
            <FormItem
              control={form.control}
              name="username"
              label="User Name"
              component={Input}
            />
            <FormItem
              control={form.control}
              name="email"
              label="Email"
              component={Input}
            />
            <FormItem
              control={form.control}
              name="password"
              label="Password"
              component={Input}
              type="password"
            />
            <FormItem
              control={form.control}
              name="dob"
              label="Date of Birth"
              component={DateInput}
              max={new Date().toISOString().split("T")[0]}
            />
            <FormItem
              control={form.control}
              name="address"
              label="Present address"
              component={Input}
            />
            <FormItem
              control={form.control}
              name="permanentAddress"
              label="Permanent address"
              component={Input}
            />
            <FormItem
              control={form.control}
              name="city"
              label="City"
              component={Input}
            />
            <FormItem
              control={form.control}
              name="postalCode"
              label="Postal Code"
              component={Input}
            />
            <FormItem
              control={form.control}
              name="country"
              label="Country"
              component={Input}
            />
          </StyledFormInputs>
          <Button
            type="submit"
            disabled={
              updateMutationState.isLoading ||
              isFetching ||
              !form.formState.isDirty
            }
          >
            Save
          </Button>
        </StyledFormInputsContainer>
      </StyledForm>
    </FormProvider>
  );
};
