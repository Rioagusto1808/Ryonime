import React from 'react'
export { default } from "next-auth/middleware"
export const config = {matcher : ["/users/:path*"]}
