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

const resetSchema = z.object({
  username: z.string().min(1, "Username is required"),
  a1: z.string().min(1, "Answer 1 is required"),
  a2: z.string().min(1, "Answer 2 is required"),
  password: z.string().min(6, "New password must be at least 6 characters"),
});

type ResetForm = z.infer<typeof resetSchema>;

export default function ResetPage() {
  const router = useRouter();
  const { users, updateUser } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetForm>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = (data: ResetForm) => {
    setIsLoading(true);
    setTimeout(() => {
      const user = users[data.username];
      if (user && user.a1 === data.a1.toLowerCase() && user.a2 === data.a2.toLowerCase()) {
        updateUser(data.username, { password: data.password });
        toast.success("Password reset successful! Please login.");
        router.push("/login");
      } else {
        toast.error("Invalid details or answers.");
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div>
      <p className="text-center text-muted-foreground mb-6">Reset Password</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" {...register("username")} />
          {errors.username && <p className="text-xs text-destructive">{errors.username.message}</p>}
        </div>
        <div className="p-4 bg-muted/50 rounded-lg space-y-4 border">
          <div className="space-y-2">
            <Label>Security Question 1: Your first pet's name?</Label>
            <Input {...register("a1")} placeholder="Answer 1" />
            {errors.a1 && <p className="text-xs text-destructive">{errors.a1.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Security Question 2: Your childhood hero?</Label>
            <Input {...register("a2")} placeholder="Answer 2" />
            {errors.a2 && <p className="text-xs text-destructive">{errors.a2.message}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">New Password</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full mt-6" disabled={isLoading}>
          {isLoading ? "Resetting..." : "Reset Password"}
        </Button>
        <div className="text-center text-sm mt-4">
          <Link href="/login" className="text-primary hover:underline">
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
}
