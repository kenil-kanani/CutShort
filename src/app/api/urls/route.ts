import { urlShortnarService } from "@/services/UrlShortnarService";
import { NextResponse } from "next/server";
import { cache } from "react";

const fetchUrls = cache(async () => {
    const shortnarService = new urlShortnarService();
    const response = await shortnarService.getAllUrls();
    return response;
});

export async function GET() {
    const urls = await fetchUrls();
    const response = NextResponse.json({ urls })
    response.headers.set("Cache-Control", "public, max-age=60, s-maxage=60 stale-while-revalidate=59");
    return response;
}