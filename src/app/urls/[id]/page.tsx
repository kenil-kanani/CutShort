
import { urlShortnarService } from "@/services/UrlShortnarService";
import { redirect } from "next/navigation";

async function fetchOriginalUrl(url: string) {
    try {
        const urlService = new urlShortnarService();
        const response = await urlService.getUrlsByShortUrl(url);
        return response?.originalUrl;
    } catch (error) {
        console.log("Error: ", error)
    }
}

export default async function urlRedirect({ params }: { params: { id: string } }) {
    const original = await fetchOriginalUrl(`urls/${params.id}`);
    if (original)
        redirect(original);
    redirect('/404');
}