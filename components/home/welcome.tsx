"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "@/context/SessionContext";
import Link from "next/link";
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Welcome() {
  const { user, logout } = useSession();

  if (!user) {
    return (
      <Card className="w-[350px] mx-auto mt-10">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please log in to see your profile.</p>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className=" bg-gray-100 flex items-center justify-center" id="welcome">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Home
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="text-muted-foreground">{user.email}</p>
          <Button onClick={logout} variant="outline">
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
