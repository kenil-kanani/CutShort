import Url, { IUrl } from "@/models/Url";
import connectDB from "@/config/db";

export default class UrlRepository {
    private urlModel;
    constructor() {
        connectDB();
        this.urlModel = Url;
    }

    async getUrlById(id: string): Promise<IUrl | null> {
        return this.urlModel.findById(id).lean();
    }

    async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
        return this.urlModel.findOne({ shortUrl }).lean();
    }

    async getUrlByOriginalUrl(originalUrl: string): Promise<IUrl | null> {
        return this.urlModel.findOne({ originalUrl }).lean();
    }

    async getAllUrls(): Promise<IUrl[]> {
        return this.urlModel.find().lean();
    }

    async deleteUrl(id: string): Promise<IUrl | null> {
        return this.urlModel.findByIdAndDelete(id).lean();
    }

    async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl> {
        return this.urlModel.create({ originalUrl, shortUrl });
    }
}