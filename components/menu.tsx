import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
	ReactElement,
	JSXElementConstructor,
	ReactFragment,
	ReactPortal,
} from "react";
import Login from "../components/login-card";

export default function Menu(props: { name: string }) {
	return (
		<div className="fixed bg-bottom-black w-60 h-screen">
			<div className="flex flex-col bg-upper-black p-4 drop-shadow-md w-full  justify-center items-center">
				<div className="flex flex-col rounded-full h-28 w-28 bg-white justify-center items-center">
					<img className="w-full p-5" src="vercel.svg" />
				</div>
				<h1 className="text-white text-2xl pt-6 font-medium">{props.name}</h1>
			</div>
			<div className="h-full flex flex-col">
				<button className="justify-center items-center bg-gray-500 h-14 w-full flex flex-row text-white relative">
					<span className="absolute top-0 left-0 bottom-0 flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="pl-5 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
						</svg>
						
					</span>
					<h2 className="flex text-xl justify-center text-white">Dashboard</h2>
				</button>
			</div>
		</div>
	);
}
