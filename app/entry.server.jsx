import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const url = new URL(request.url)

  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )

  responseHeaders.set('Content-Type', 'text/html')
  // responseHeaders.set("Link", `<https://www.recoveryocean.com${url.pathname}>; rel="canonical"`)

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
