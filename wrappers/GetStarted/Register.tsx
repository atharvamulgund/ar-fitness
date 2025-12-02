import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { client } from "@/lib/appwrite";
import { registerFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Account, ID } from "appwrite";
import { Controller, useForm } from "react-hook-form";

interface HandleClickInterface {
  (page: string): string
}

type RegisterInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export function SignupForm({ handleClick, ...props }: { handleClick: HandleClickInterface }) {
    const {
      control,
      handleSubmit,
      formState: { isSubmitting },
    } = useForm<RegisterInputs>({
      mode: "all",
      resolver: zodResolver(registerFormSchema),
      defaultValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
    const account = new Account(client);

    const onSubmit = async (values: RegisterInputs) => {
      console.log(values);
      try {
        const user = await account.create({
          userId: ID.unique(),
          email: values?.email,
          password: values?.password,
        });
        console.log(user);
        
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="password@12345"
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Confirm Password</FieldLabel>
                  <Input id="password" type="password" required {...field} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  Create Account
                </Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account?{" "}
                  <span onClick={() => handleClick("Login")}>Sign in</span>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
