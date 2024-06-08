import { urlShortnarService } from "@/services/UrlShortnarService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { originalUrl } = await req.json();
    const shortnarService = new urlShortnarService();
    const shortUrl = await shortnarService.shortenUrl(originalUrl);
    return NextResponse.json({ shortUrl });
}

export async function GET() {
    const shortnarService = new urlShortnarService();
    const response = await shortnarService.getAllUrls();
    return NextResponse.json({ response });
}