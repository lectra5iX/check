import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams
    const id:any = searchParams.get("id")
    const idAsNumber = parseInt(id)

    const nextId = idAsNumber + 1
 
    if(idAsNumber === 1){     // NANTI REDIRECT SMART CONTRACT BUAT HOLDER / FOLLOW KRITERIA
            return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Check Your Eligibility</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.imgur.com/CJC38Tw.png" />
        <meta property="fc:frame:button:1" content="Check Eligibility" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`); 
    } else if(idAsNumber === 2) { // KALAU UDAH ELIG DAN HOLD 
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>You're Eligible</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.imgur.com/YaWLh1N.png" />
        <meta property="fc:frame:button:1" content="You're Eligible" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1" />
    </head></html>`);
    } else { // KALAU GA ELIG
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Not Eligible</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://imgur.com/vI5NUq1.png" />
        <meta property="fc:frame:button:1" content="Not Eligible" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
    }
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
