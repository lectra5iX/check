import React from 'react';
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Check Your Eligibility"
    }
  ],
  image: "https://i.imgur.com/CJC38Tw.png",
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
})

export const metadata: Metadata = {
  title: 'Eligibility Checker',
  description: 'Check your eligibility for the $Frame Earn program',
  openGraph: {
    title: 'Eligibility Checker',
    description: 'Check your eligibility for the $Frame Earn program',
    images: ["https://i.imgur.com/CJC38Tw.png"]
  },
  other: {
    ...frameMetadata,
  },
};

const Page = () => {
  return <div>.</div>;
};

export default Page;
