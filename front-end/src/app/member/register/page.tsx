'use client';
import Layout from '../../../components/mainLayout'
import axios from 'axios';

export default function Register() {
    const handleSubmit = async (event) => {
  event.preventDefault();

  const endpoint = 'http://localhost:5000/api/users/register'; // Update the endpoint URL

  // Get data from the form.
  const data = {
    un: event.target.un.value,
    email: event.target.email.value,
    pw: event.target.pw.value,
    rpw: event.target.rpw.value,
  };
  console.log(data)

  try {
    // Send the form data to the server using Axios.
    const response = await axios.post(endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      withCredentials: true,
    });

    // Get the response data from the server.
    const result = response.data;
    alert(`Is this your full name: ${result.data}`);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

  return (
	  <>
	  <Layout>
		  <form onSubmit={handleSubmit} method='post'>
		  <label htmlFor='un'>User name</label>
		  <input type='text' id='un' name='un'/>

		  <label htmlFor='email'>Email</label>
		  <input type='email' id='email' name='email'/>

		  <label htmlFor='pw'>Password</label>
		  <input type='password' id='pw' name='pw'/>

		  <label htmlFor='rpw'>Re-password</label>
		  <input type='password' id='rpw' name='rpw'/>

		  <button type="submit">Submit</button>

		  </form>

	  </Layout>
	  </>
  )
}
