"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

// Zod schemas
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const signupSchema = userSchema.extend({
  name: z.string().min(2),
});

type User = z.infer<typeof userSchema>;
export type SignupUser = z.infer<typeof signupSchema>;

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      if (isLogin) {
        await login(data as User);
      } else {
        await signup(data as SignupUser);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const login = async (data: User) => {
    const result = userSchema.safeParse(data);
    if (!result.success) {
      throw new Error(result.error.issues[0].message);
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: User) => u.email === data.email && u.password === data.password
    );
    if (!user) {
      throw new Error("Invalid email or password");
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    router.push("/home");
    alert("Logged in successfully!");
  };

  const signup = async (data: SignupUser) => {
    const result = signupSchema.safeParse(data);
    if (!result.success) {
      throw new Error(result.error.issues[0].message);
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: User) => u.email === data.email)) {
      throw new Error("Email already exists");
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(data));
    alert("Signed up successfully!");
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
        <CardDescription>
          {isLogin ? "Enter your credentials to login" : "Create a new account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          variant="link"
          className="w-full"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </Button>
      </CardFooter>
    </Card>
  );
}
