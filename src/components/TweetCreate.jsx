// ToDoリストを登録する画面
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TweetCreat = () => {
  const router = useRouter();
  const [youser, setYouser] = useState("");
  const [text, setText] = useState("");
  

  // オブジェクトを定義
  const content = {
    youser: youser,
    text: text,
    likes:0
  };


  const handleHome = () => {
    router.push("/home");
  };

 
 const handleSubmit = async (e) => {
    e.preventDefault();
    // youserとtextの値が空かどうかをチェック
    if (youser === "" || text === "") {
      // 空だったらアラートを出す
      window.alert("名前と投稿内容を入力してください");
    } else {
      // 空でなかったら元の処理を続ける
      // セッションストレージから既存の配列を取得
      const oldContents = JSON.parse(sessionStorage.getItem("contents") || "[]");
      // 既存の配列に新しいオブジェクトを追加
      const newContents = [...oldContents, content];
      // 配列をJSON形式に変換してセッションストレージに保存
      sessionStorage.setItem("contents", JSON.stringify(newContents));
      router.push("/home");
    }
  };


  return (
<div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
  <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold text-center text-gray-800">投稿フォーム</h1>
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">名前</label>
      <input
        type="text"
        placeholder="名前を入力してください"
        onChange={(e) => setYouser(e.target.value)}
        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">投稿内容</label>
      <input
        type="text"
        placeholder="投稿内容を入力してください"
        onChange={(e) => setText(e.target.value)}
        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <button
        onClick={handleHome}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        ホームに戻る
      </button>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        投稿
      </button>
    </div>

  </div>
</div>


  );
};
