"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";
import { loginUser } from "@/lib/api";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await loginUser(data);
      const { token } = response.data;

      localStorage.setItem("token", token);
      toast.success("Login successful. Redirecting...");

      router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(
          err.response.data?.message || "Login failed. Something went wrong."
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Email" {...register("email" as const)} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}

            <Input
              type="password"
              placeholder="Password"
              {...register("password" as const)}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}

            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <p className="text-center mt-4 text-sm">
              Don’t have an account?{" "}
              <Link href="/register" className="text-red-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
