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
        <meta property="fc:frame:image" content="https://cdn.discordapp.com/attachments/1050082795629842462/1208033742929662013/Elig1.png?ex=65e1d018&is=65cf5b18&hm=af14db7049acfe5b52b5424bc135bff256eed5e09f965307c1a5b395dce1259c" />
        <meta property="fc:frame:button:1" content="Check Eligibility" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
    } else if(idAsNumber === 2) {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>You're Eligible</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://cdn.discordapp.com/attachments/1050082795629842462/1208033743185510410/Elig2.png?ex=65e1d018&is=65cf5b18&hm=4a7b398261e94d9d536c0f502f195b82842f436923a753fb580e2fcb791aa0ef" />
        <meta property="fc:frame:button:1" content="You're Eligible" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
    } else {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Not Eligible</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://cdn.discordapp.com/attachments/1050082795629842462/1208033743445696532/Elig3.png?ex=65e1d018&is=65cf5b18&hm=ce0b546a6d7579c9b84ed44dee790843a1dbfbf936e1ae7c8c9fa55bc49cc50f" />
        <meta property="fc:frame:button:1" content="Not Eligible" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
    }
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
