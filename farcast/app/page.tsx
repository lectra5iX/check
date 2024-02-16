import React from 'react';
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Check Your Eligibility"
    }
  ],
  image: "https://cdn.discordapp.com/attachments/1050082795629842462/1208033742929662013/Elig1.png?ex=65e1d018&is=65cf5b18&hm=af14db7049acfe5b52b5424bc135bff256eed5e09f965307c1a5b395dce1259c&",
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
})

export const metadata: Metadata = {
  title: 'Eligibility Checker',
  description: 'Check your eligibility for the $Frame Earn program',
  openGraph: {
    title: 'Eligibility Checker',
    description: 'Check your eligibility for the $Frame Earn program',
    images: ["https://cdn.discordapp.com/attachments/1050082795629842462/1208033742929662013/Elig1.png?ex=65e1d018&is=65cf5b18&hm=af14db7049acfe5b52b5424bc135bff256eed5e09f965307c1a5b395dce1259c&"]
  },
  other: {
    ...frameMetadata,
  },
};

const Page = () => {
  return <div>.</div>;
};

export default Page;
