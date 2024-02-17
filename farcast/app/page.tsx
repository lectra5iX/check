import React from 'react';
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Hi Spacer! Next, please!",
    }
  ],
  image: "https://i.imgur.com/5XXBjb1.png",
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
})

export const metadata: Metadata = {
  title: 'Eligibility Checker',
  description: 'Check your eligibility for the $SPACER Earn program',
  openGraph: {
    title: 'Eligibility Checker',
    description: 'Check your eligibility for the $SPACER Earn program',
    images: ["https://i.imgur.com/5XXBjb1.png"]
  },
  other: {
    ...frameMetadata,
  },
};

const Page = () => {
  return <div>.</div>;
};

export default Page;
