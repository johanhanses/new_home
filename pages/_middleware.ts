import { useRouter } from 'next/router'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  console.log(req.page.name)
  if (req.page.name === '/posts/new') {
    if (basicAuth) {
      const auth = basicAuth.split(' ')[1]
      const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

      if (user === process.env.USERNAME && pwd === process.env.PASSWORD) {
        return NextResponse.next()
      }
    }

    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"'
      }
    })
  }
}
