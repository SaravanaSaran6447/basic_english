"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
  q1: z.string().min(1, "Security Question 1 is required"),
  a1: z.string().min(1, "Answer is required"),
  q2: z.string().min(1, "Security Question 2 is required"),
  a2: z.string().min(1, "Answer is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { users, addUser } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      q1: "Security Question 1: Your first pet's name?",
      q2: "Security Question 2: Your childhood hero?",
    }
  });

  const onSubmit = (data: SignupForm) => {
    setIsLoading(true);
    setTimeout(() => {
      if (users[data.username]) {
        toast.error("Username already exists");
        setIsLoading(false);
        return;
      }
      
      addUser({
        username: data.username,
        password: data.password,
        q1: data.q1,
        a1: data.a1.toLowerCase(),
        q2: data.q2,
        a2: data.a2.toLowerCase(),
        progress: { testScores: [] }
      });
      
      toast.success("Signup successful! Please login.");
      router.push("/login");
    }, 500);
  };

  return (
    <div className="max-h-[70vh] overflow-y-auto pr-2">
      <p className="text-center text-muted-foreground mb-6">Create an account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" {...register("username")} />
          {errors.username && <p className="text-xs text-destructive">{errors.username.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>}
        </div>
        
        <div className="p-4 bg-muted/50 rounded-lg space-y-4 border">
          <p className="text-sm font-semibold">Security Questions (For Password Reset)</p>
          <div className="space-y-2">
            <Label>Security Question 1: Your first pet's name?</Label>
            <input type="hidden" {...register("q1")} />
            <Input {...register("a1")} placeholder="Answer 1" />
            {errors.a1 && <p className="text-xs text-destructive">{errors.a1.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Security Question 2: Your childhood hero?</Label>
            <input type="hidden" {...register("q2")} />
            <Input {...register("a2")} placeholder="Answer 2" />
            {errors.a2 && <p className="text-xs text-destructive">{errors.a2.message}</p>}
          </div>
        </div>

        <Button type="submit" className="w-full mt-6" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </Button>
        <div className="text-center text-sm mt-4">
          <Link href="/login" className="text-primary hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
}
