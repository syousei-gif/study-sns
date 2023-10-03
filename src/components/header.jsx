"use client"
import React from "react"
// import { Icons } from "@/components/ui/icons"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import pic from "../../public/next.svg";







export function Header() {


  const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
      return (
        <li className="border-b-2  border-sky-300 w-3/4 inline-block">
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={`block select-none space-y-1 rounded-md p-3  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      );
    }
  );
  
  ListItem.displayName = "ListItem";
  





  return (
<>
<header class="bg-green-800 text-white">
  
  <div class="container mx-auto flex items-center justify-between p-4">
    

  <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger>
            <button class="nav-button bg-white hover:bg-blue-100 text-black w-12 h-12 flex items-center justify-center">
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 5.5a.5.5 0 01.5-.5h14a.5.5 0 010 1h-14a.5.5 0 01-.5-.5zM2.5 10.5a.5.5 0 01.5-.5h14a.5.5 0 010 1h-14a.5.5 0 01-.5-.5zM2.5 15.5a.5.5 0 01.5-.5h14a.5.5 0 010 1h-14a.5.5 0 01-.5-.5z"/>
  </svg>
</button>
</NavigationMenuTrigger>

          <NavigationMenuContent className="bg-blue-100 text-center py-10 m-auto"> 

   
          <div className="w-ful justify-center flex items-center">
    <div className= "w-9/10 flex text-center">
      <div className="flex justify-center">
  <Image src={pic} alt="sakura" className="w-1/5 mr-3"/> 
  <div className="flex flex-col item-center justify-center">
    <strong>ユーザー名</strong>
    </div>
    </div>
</div>
</div>

 
          
            <ul className="gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] border-solid">
              <ListItem href="/docs" title="Home">
              </ListItem>
              <ListItem href="/docs" title="フォロワー">
              </ListItem>
              <ListItem href="/docs/installation" title="フォロー">
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="設定">
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="ログアウト">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
         
      </NavigationMenuList>
    </NavigationMenu>



    
    <div class="logo">
      <a href="/" class="text-2xl font-bold">大学専用SNS</a>
    </div>
    
    <button class="create-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href="http://localhost:3000/tweet">Create</a>
    </button>
  </div>
</header>
















 
</>
  )
}
