import { buildAuthMiddleware } from '@propelauth/nextjs/server'

export const middleware = buildAuthMiddleware()

export const config = {
    matcher: [
        // REQUIRED: Match all request paths that start with /api/auth/
        '/api/auth/(.*)',
        // OPTIONAL: Exclude static assets
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
