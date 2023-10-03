// 検索するコンポーネント
"use client";
import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export const TweetListSearch = () => {
  const [query, setQuery] = useState(""); // 検索ワードを管理するステート
  const [results, setResults] = useState([]); // 検索結果を管理するステート
  const [showResults, setShowResults] = useState(false); // 検索結果の表示・非表示を管理するステート

  // 検索ボックスの入力値を反映する関数
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

// 検索ボタンを押したときの処理
const handleSearch = () => {
  // セッションストレージからデータを取得
  const contents = JSON.parse(sessionStorage.getItem("contents") || "[]");
  // 入力値が空でないかチェック
  if (query === "") {
    // 空の場合はアラートを出して終了
    alert("検索ワードを入力してください");
    return;
  }
  // 入力値と一致するデータをフィルタリング
  // 名前か投稿内容のどちらかに含まれるものを選択
  const filtered = contents.filter((content) =>
    content.youser.includes(query) || content.text.includes(query) 
  );
  // 結果をステートにセット
  setResults(filtered);
  // 該当するものがなければアラートを出す
  if (filtered.length === 0) {
    alert("検索結果はありません");
  }
  // 検索結果を表示するようにステートを変更
  setShowResults(true);
};

// クリアボタンを押したときの処理
const handleClear = () => {
  // 検索ワードと検索結果を空にする
  setQuery("");
  setResults([]);
  // 検索結果を非表示にするようにステートを変更
  setShowResults(false);
};


  // 削除ボタンを押すと、セッションストレージから削除して、表示からも削除する
  const handleDelete = (index) => {
    const resultsCopy = [...results];
    resultsCopy.splice(index, 1);
    sessionStorage.setItem("results", JSON.stringify(resultsCopy));
    setResults(resultsCopy);
  };

  // セッションストレージにいいねを保存する 
  const handleLike = (index) => {
     const resultsCopy = [...results];
     resultsCopy[index].likes++; 
      sessionStorage.setItem("results", JSON.stringify(resultsCopy)); 
      setResults(resultsCopy); };

  // 検索結果を表示する関数
  const renderResults = () => {
    return (
      <div className="container w-2/5 mt-10 mx-auto p-4">
      {results.map((result, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              
              <div>
                <p className="font-bold text-gray-800">名前：{result.youser}</p>
                <p className="text-gray-600">投稿内容：{result.text}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="animate-bounce h-6 ...">
            <Button
                variant="ghost"
                color="red"
                onClick={() => handleLike(index)}         
              >
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
       width="15pt" height="1244.000000pt" viewBox="0 0 1280.000000 1244.000000"
       preserveAspectRatio="xMidYMid meet">
      <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g transform="translate(0.000000,1244.000000) scale(0.100000,-0.100000)"
      fill="#e91e63" stroke="none">
      <path d="M3595 10494 c-16 -2 -73 -9 -125 -15 -785 -89 -1525 -534 -1950
      -1172 -505 -756 -581 -1802 -203 -2762 234 -592 615 -1136 1223 -1746 440
      -440 761 -713 1790 -1521 723 -568 973 -780 1280 -1088 285 -285 475 -527 591
      -753 24 -48 46 -87 49 -87 3 0 20 29 38 65 150 304 458 666 907 1066 253 225
      441 378 1130 919 900 707 1207 970 1640 1404 468 469 775 866 1023 1321 414
      761 537 1622 342 2391 -112 440 -324 822 -635 1143 -523 540 -1245 841 -2014
      841 -899 0 -1671 -412 -2116 -1130 -112 -182 -234 -457 -288 -651 -21 -74 -37
      -101 -37 -61 0 45 -109 334 -184 487 -367 749 -1011 1208 -1876 1335 -75 11
      -528 22 -585 14z"/>
      </g>
      </svg>
                {results[index].likes}
              </Button>
              </div>
              <Button
              className="bg-red-400 text-white font-bold hover:bg-red-300 hover:text-white"
                variant="ghost"
                color="red"
                onClick={() => handleDelete(index)}
              >
                削除
              </Button>
      
            </div>
          </div>
          
      </div>
      ))}
      </div>
      
      
      );
  };

  return (
    <div className="mt-20">
      <div className="flex items-center justify-center space-x-4">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="検索ワードを入力"
          className="border rounded p-2"
        />
        <Button className="bg-green-700 text-white font-bold hover:bg-green-600" variant="solid" color="blue" onClick={handleSearch}>
          検索
        </Button>
        <Button className="bg-blue-300 text-white font-bold hover:bg-blue-200" variant="solid" color="red" onClick={handleClear}>
          クリア
        </Button>
      </div>
      {showResults && renderResults()}
    </div>
  );
};
