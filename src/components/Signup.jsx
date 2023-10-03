// ユーザー登録コンポーネント
"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  // オブジェクトを定義
  const userInfo = {
    username: username,
    password: password,
  };

  
  const Router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

 


    if(password !== repassword){  
      alert("パスワードが一致しません");
      return;
    }if(username === "" || password === "" || repassword === ""){
      alert("ユーザー名またはパスワードが入力されていません");
      return;
    }else{
    // セッションストレージから既存の配列を取得
    const oldUserInfo = JSON.parse(sessionStorage.getItem("userInfo") || "[]");
    // 既存の配列に新しいオブジェクトを追加
    const newUserInfo = [...oldUserInfo, userInfo];
    // 配列をJSON形式に変換してセッションストレージに保存
    sessionStorage.setItem("userInfo", JSON.stringify(newUserInfo));
 // ユーザー登録成功
 alert("ユーザー登録成功");
 // ログインページに遷移
 Router.push("/");
    }
  };


  return (
    <section className="flex items-center justify-center min-h-screen">
    <Card className="">
         <CardHeader className="text-center">
           <CardTitle>大学専用SNS</CardTitle>
           <CardDescription>新規登録をして始めよう！</CardDescription>
         </CardHeader>
         <CardContent>
           <form>
             <div className="grid w-full items-center gap-4">
               <div className="flex flex-col space-y-1.5">
                 <Label htmlFor="name">ユーザー名を入力してください。</Label>
                 <Input type="text" id="name" placeholder="ユーザー名" value={username} onChange={(e) => setUsername(e.target.value)}/>
                 <Label htmlFor="name">パスワードを入力してください。</Label>
                 <Input id="name" type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
                 <Label htmlFor="name">確認のためもう一度パスワードを入力してください。</Label>
                 <Input id="name" type="password" placeholder="確認用パスワード" value={repassword} onChange={(e) => setRePassword(e.target.value)} />
               </div>
             </div>
           </form>
         </CardContent>
         <CardFooter className="flex flex-col">
       <Button onClick={handleSubmit} asChild className="mt-3 px-20 bg-red-400 hover:bg-red-300">
         <Link href="">新規登録</Link>
       </Button>
       <Button asChild className="mt-8 px-20 bg-lime-400 hover:bg-lime-200"> 
         <Link href="/">ログインページに戻る</Link>
       </Button>
         </CardFooter>
       </Card>
       </section>
  );
};
