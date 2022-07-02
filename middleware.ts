import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/posts/new',
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === process.env.USERNAME && pwd === process.env.PASSWORD) {
      return NextResponse.next()
    }
  }

  return NextResponse.next({
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
