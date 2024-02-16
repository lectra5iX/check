import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Check Your Eligibility"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTJtCjE3HZ7Wi437WZPZ8okWTkqFCcpGv6jCoL7Ub686H/Elig%201.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
})


export const metadata: Metadata = {
  title: 'Eligibility Checker',
  description: 'Check your eligibility for the $Frame Earn program',
  openGraph: {
    title: 'Eligibility Checker',
    description: 'Check your eligibility for the $Frame Earn program',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTJtCjE3HZ7Wi437WZPZ8okWTkqFCcpGv6jCoL7Ub686H/Elig%201.png`]
  },
  other: {
    ...frameMetadata,
  },
};