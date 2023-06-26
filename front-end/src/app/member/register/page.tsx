'use client';
import Layout from '../../../components/mainLayout'

export default function Register() {
     const handleSubmit = async (event) => {
     const endpoint = 'localhost:5000/api/users/register'
  	event.preventDefault()
	    // Get data from the form.
	    const data = {
	      un: event.target.un.value,
	      email: event.target.email.value,
	      pw: event.target.pw.value,
	      rpw: event.target.rpw.value

		}
	const JSONdata = JSON.stringify(data)
	const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
 
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
    }

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
