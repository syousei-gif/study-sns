// ログインコンポーネント
"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const Router = useRouter();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const userInfo = await sessionStorage.getItem("userInfo");
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("ユーザー名またはパスワードが入力されていません");
      return;
    }

    const isAuthenticated = await userInfo.some((user) => {
      return user.username === username && user.password === password;
    });

    if (isAuthenticated) {
      alert("ログイン成功");
      Router.push("/home");
    } else {
      alert("ユーザーネームとパスワードが一致しません");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <Card className="">
        <CardHeader className="text-center">
          <CardTitle>大学専用SNS</CardTitle>
          <CardDescription>ログイン、または新規登録をして始めよう！</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">ユーザー名を入力してください。</Label>
                <Input id="name" placeholder="ユーザー名" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Label htmlFor="name">パスワードを入力してください。</Label>
                <Input id="name" type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button onClick={handleSubmit} asChild className="px-20 bg-lime-400 hover:bg-lime-200">
            <Link href="">ログイン</Link>
          </Button>
          <Button asChild className="mt-10 px-20 bg-red-400 hover:bg-red-300">
            <Link href="/new">新規登録</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
