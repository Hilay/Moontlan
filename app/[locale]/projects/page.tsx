// 'use client'
// import React from 'react'
// import Image from 'next/image';
// import { AiFillLeftCircle } from "react-icons/ai";
// import TitleImg from '@/public/TitleImage.webp'
// import { useTranslations } from 'next-intl';
// import Me from "@/public/Me.jpg";
// import { redirect } from 'next/navigation';

// const page = () => {
//     const t = useTranslations("Projects");
//   return (
//     <div className="grid grid-cols-3 max-w-5xl px-6 pb-40 pt-20 gap-6 flex-grow">
//         <section id='title' className='col-span-3'>
//             <div className="flex flex-col justify-center items-center h-64 relative gap-y-8">
//                 <Image src={TitleImg} className='object-cover h-full absolute inset-0 rounded-3xl' alt={''}></Image>
//                 <AiFillLeftCircle href='/' className='z-10 inset-0 absolute ml-10 mt-10 hover:scale-125 duration-500'size={40} onClick={() => {redirect('/')}}/>
//                 <Image className='z-10 w-20 rounded-full' src={Me} alt={''}></Image>
//                 <p className='z-10 w-full text-center px-28'>{t("description")}</p>
//             </div>
//         </section>
//         <section id='home' className='col-span-1 bg-white'></section>
//     </div>
//   )
// }

// export default page



import React from "react";
export default function Home() {
  return (
    <iframe src="https://drive.google.com/file/d/1oXygIdZYYzPy6Dd0UjE3tEPI3o4Wvu-v/preview" className="w-screen h-screen"></iframe>
  );
}