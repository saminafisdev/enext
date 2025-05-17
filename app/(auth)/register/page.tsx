"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from '@/components/ui/use-toast';
import { toast } from "sonner";
import Link from "next/link";
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();
  //   const { toast } = useToast();
  toast.success("success");

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/v1/users/register", data);
      toast.success("Registration successful. Please login now.");
      router.push("/auth/signIn");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(
          err.response.data?.message ||
            "Registration failed. Something went wrong"
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
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Full Name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}

            <Input placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}

            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}

            <Button type="submit" className="w-full">
              Register
            </Button>
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link href="/signIn" className="text-red-600 hover:underline">
                SignIn
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
