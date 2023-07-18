"use client";
import React from 'react'
export default function formLayout({children}) {
	return (

		<>

			<div className="   absolute lg:h-[35rem] h-96 w-80 flex flex-col lg:w-2/5   place-content-center  lg:container inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
				{children}
			</div>

		</>


	)



}
