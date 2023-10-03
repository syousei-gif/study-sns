// タイムラインを表示する画面
"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "../components/ui/button";



export const TweetList = () => {
  const [contents, setContents] = useState([]);

  // セッションストレージから値を取得
  const getContents = async () => {
    const contents = JSON.parse(sessionStorage.getItem("contents") || "[]");
    setContents(contents);
  };

  useEffect(() => {
    getContents();
  }, []);

  // 削除ボタンを押すと、セッションストレージから削除して、表示からも削除する
  const handleDelete = (index) => {
    const contentsCopy = [...contents];
    contentsCopy.splice(index, 1);
    sessionStorage.setItem("contents", JSON.stringify(contentsCopy));
    setContents(contentsCopy);
  };

  // セッションストレージにいいねを保存する 
  const handleLike = (index) => {
     const contentsCopy = [...contents];
      contentsCopy[index].likes++; 
      sessionStorage.setItem("contents", JSON.stringify(contentsCopy)); 
      setContents(contentsCopy); };

 

  // 取得した値を表示
  const renderContents = () => {
    if (contents.length > 0) {
      return (
<div className="container mx-auto p-4">
{contents.map((content, index) => (
  <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center">
        
        <div>
          <p className="font-bold text-gray-800">名前：{content.youser}</p>
          <p className="text-gray-600">投稿内容：{content.text}</p>
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
          {contents[index].likes}
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
} else {
return (
<div className="text-center">
  <p className="text-gray-600">投稿はありません</p>
</div>
);

    }
  };


  return (
    <div className="mt-8 w-2/5 mx-auto">
      {renderContents()}
    </div>
  );
};
