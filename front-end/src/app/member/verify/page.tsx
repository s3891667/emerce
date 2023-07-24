'use client'
import Layout from '../../../components/mainLayout'
import FormLayout from '../../../components/formLayout'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import axios from 'axios';

export default function Verify() {
	const router = useRouter();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const endpoint = 'http://localhost:5000/api/users/verify';
		const loginLink = ' http://localhost:3000/member/login/';

		try {
			const response = await axios.post(endpoint, event.target.vericode.value, {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*',
				},
				withCredentials: true,
			})
			const result = response;
			if (response.status != 200) {
				router.push(loginLink);
			}
			else {
				router.push('?error')
			}

		}
		catch (error) {
			console.log(error)

		}
	}
	return (<>
		<Layout>
			<FormLayout>
				<form onSubmit={handleSubmit}>
					<input type='number' name='vericode' placeholder='Please enter OTP code'></input>
					<button type='submit' />
				</form>
			</FormLayout>


		</Layout>
	</>)
}
