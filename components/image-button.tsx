import Head from 'next/head';
import Link from 'next/link';
import {
	ReactElement,
	JSXElementConstructor,
	ReactFragment,
	ReactPortal,
	useState,
} from "react";
import { isPropertySignature } from 'typescript';

export default function ImageButton(props: { data: string, label: string, onClick: () => void, id: string}) {
	return (
		<button className={"justify-center items-center bg-top-black h-14 w-full flex flex-row text-white relative border-b border-button-border"} onClick={props.onClick}>
			<span className="absolute top-0 left-0 bottom-0 flex justify-center items-center">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-5 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d={props.data}/>
				</svg>
			</span>
			<h2 className="flex text-xl justify-center text-white">{props.label}</h2>
		</button>
    )
}