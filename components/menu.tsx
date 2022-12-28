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
				<button className="justify-center items-center bg-red-200 h-14 w-full flex flex-row text-white relative">
					<span className="absolute top-0 left-0 bottom-0 flex justify-center items-center">
						<img src="thirteen.svg" className="h-10 p-3" />
					</span>
					<h2 className="flex text-xl justify-center text-white">Dashboard</h2>
				</button>
			</div>
		</div>
	);
}
