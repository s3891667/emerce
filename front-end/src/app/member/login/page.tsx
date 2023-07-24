'use client'
import Layout from '../../../components/mainLayout'
import FormLayout from '../../../components/formLayout'
import Link from 'next/link'
import {useState} from 'react'
import axios from 'axios';
export default function Login() {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const endpoint = 'http://localhost:5000/api/users/login';
		const data = {
			email: event.target.email.value,
			pw: event.target.pw.value
		}
		try {
			const response = await axios.post(endpoint, data, {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*',
				},
				withCredentials: true,
			})
			const result = response;
			console.log(result.data);

		}
		catch (error) {
			console.log(error)

		}

	}

	return (
		<>
			<Layout>
				<FormLayout>
					<div className='check overflow-y-auto   lg:mt-[80px]  bg-white lg:h-[35rem] h-96  flex justify-center items-center border rounded-md'>
						<form onSubmit={handleSubmit} method='post'>
							<div className='flex flex-col items-center space-y-5'>
								<div className='text-2xl lg:text-3xl font-medium'>
									<h1>Welcome to Emerce</h1>
								</div>
								<div className='flex flex-col items-center'>
									<input className='border border-slate-300 rounded w-70 lg:w-80 h-10 pl-4' placeholder='Email' name='email' />
								</div>
								<div className='flex flex-col items-center'>
									<input className='border border-slate-300 rounded w-70 lg:w-80 h-10 pl-4' placeholder='Password' name='pw' />
								</div>
								<div className='flex flex-col items-center'>
									<button type='submit'>Sign In</button>
								</div>
								<div>
									<Link href='/'>
										Forgot your password ?
									</Link>
								</div>
							</div>
						</form>
					</div>
				</FormLayout>
			</Layout>
		</>
	)
}
