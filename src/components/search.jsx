"use client"
import React, { useState } from "react";
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"


export const Search = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // 入力データが空でないかチェックする
    if (query!="") {
      // コンソールに検索内容を出力する
      console.log("検索ワード: " + query)
      // 入力データをクリアする
      setQuery("");
    }
  };

  return (
      <div className="w-3/4 mx-auto mt-5">
    <form className="flex justify-center">
    <Input
    className="w-3/4"
      type="text"
      placeholder="検索ワードを入力してください"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
    <Button className="1/4" type="submit" onClick={handleSearch}>
      検索
    </Button>
  </form>
  </div>
  );
};


  // フォームの送信をハンドルする関数
  const handleSubmit = (e) => {
    e.preventDefault();
    // 入力データが空でないかチェックする
    if (name && text) {
      // 新しい投稿を追加する
      addPost({ name, text });
      // 入力データをクリアする
      setName("");
      setText("");
    }
  };