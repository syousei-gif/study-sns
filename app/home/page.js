// "use client"
import React from "react"
import {Header} from "@/components/header"
import {TweetList} from "@/components/TweetList"
import {TweetListSearch} from "@/components/TweetListSearch"






export default function Home() {
  


 
  return (
    <>
<Header/>

<main className="">
  <TweetListSearch/>

<div>
  <h1 className="text-4xl font-bold text-center mt-20 border-b-8 border-green-600 ... w-1/4 mx-auto">
    タイムライン
    </h1>
    </div>

 <TweetList/>


    
  
  

    


 
    </main>
    </>
  )
}