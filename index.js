

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

const htmlContent = `
  <html>
    
    <head>
      <title>Test Worker</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        </body>
        </html>
        `;

async function handleRequest(request) {
  return new Response(htmlContent, {
    headers: { 'content-type': 'text/html' },
  })
}

/* 

The code you provided is a basic example of a Cloudflare Worker script. It demonstrates how to handle a fetch event, which is triggered when a user requests a resource from your website.

The first line of the code uses the addEventListener method to register an event listener for the 'fetch' event. This event listener is a JavaScript arrow function that takes an event as its parameter. When a fetch event is detected, this function calls the handleRequest function passing the event.request as an argument.

The handleRequest function is an asynchronous function that returns a new Response object. The Response object is created using the constructor new Response() and it takes two arguments, the first is the body of the response and the second is an object containing the headers of the response. In this example, the body of the response is a plain text string "Hello worker!" and the headers object contains a content-type of "text/plain".

When this code is executed, the function handleRequest will be called whenever a user requests a resource from the website. The function will generate a new Response object containing the text "Hello worker!" and a header with a content-type of "text/plain". As the function is asynchronous, it will not block the execution of the script, allowing other operations to run in parallel.

It's important to note that this is a very simple example and in real-world usage, the handleRequest function can be more complex, handling different types of requests and responses, and making use of the many features that Cloudflare Workers provides, such as caching, routing, and modifying the content of a website before it is delivered to the user.

*/
