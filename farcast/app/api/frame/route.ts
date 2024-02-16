import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams
    const id:any = searchParams.get("id")
    const idAsNumber = parseInt(id)

    const nextId = idAsNumber + 1

    if(idAsNumber === 1){
            return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Check Your Eligibility</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTJtCjE3HZ7Wi437WZPZ8okWTkqFCcpGv6jCoL7Ub686H/Elig%201.png" />
        <meta property="fc:frame:button:1" content="Check Eligibility" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
    } else if(idAsNumber === 2) {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>You're Eligible</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTJtCjE3HZ7Wi437WZPZ8okWTkqFCcpGv6jCoL7Ub686H/Elig%202.png" />
        <meta property="fc:frame:button:1" content="You're Eligible" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
    } else {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Not Eligible</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTJtCjE3HZ7Wi437WZPZ8okWTkqFCcpGv6jCoL7Ub686H/Elig%203.png" />
        <meta property="fc:frame:button:1" content="Not Eligible" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
    }
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';