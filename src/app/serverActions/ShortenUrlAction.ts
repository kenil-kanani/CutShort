'use server'

import { urlShortnarService } from "@/services/UrlShortnarService";
import { revalidatePath } from "next/cache";

const shortenURL = async (formData: FormData) => {
    const originalUrl: string = formData.get('originalUrl') as string;
    const shortenerService = new urlShortnarService();
    await shortenerService.shortenUrl(originalUrl);
    revalidatePath('/urls');
}

export default shortenURL