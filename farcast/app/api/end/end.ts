// pages/api/end.ts or pages/api/end/index.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.json({ message: "You're eligible" });
}
