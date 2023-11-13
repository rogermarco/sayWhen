// this is some fucked workaround because SSR components can't easily see urls
// this sets custom headers for pages so my dynamic [eventpage] links work correctly

import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  return NextResponse.next({
    request: {
      headers: new Headers({ "x-url": request.url }),
    },
  });
}