/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  return {
    status: 200,
    headers: {
      'content-type': 'text/html'
    },
    body: `<div>Hello SvelteKit! The time is ${ new Date().toLocaleTimeString()}</div>`
  };
}