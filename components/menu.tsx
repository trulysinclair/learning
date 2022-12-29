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
import ImageButton from "../components/image-button";

const music_icon: string = "M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z";
const pc_icon: string = "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25";

export default function Menu(props: { name: string }) {
	return (
		<div className="fixed bg-bottom-black w-60 h-screen">
			<div className="flex flex-col bg-upper-black p-4 drop-shadow-md w-full  justify-center items-center">
				<div className="flex flex-col rounded-full h-28 w-28 bg-white justify-center items-center">
					<Image className="w-full p-5" src="vercel.svg" alt='profile picture' />
				</div>
				<h1 className="text-white text-2xl pt-6 font-medium">{props.name}</h1>
			</div>
			<div className="h-full flex flex-col">
				<ImageButton  label="Dashboard" data={pc_icon} onClick={function() {}}/>
				<ImageButton label="Rap/HipHop" data={music_icon} onClick={function() {}} />
				<ImageButton label="Country" data={music_icon} onClick={function() {console.log("It worked")}} />
			</div>
		</div>
	);
}
