import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";


async function fetchUrls() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`, {
        cache: 'force-cache'
    });
    if (!response.ok) {
        throw new Error('Failed to fetch urls');
    }
    return response.json();
}

export default async function UrlList() {
    let urls = [];
    try {
        urls = await fetchUrls();
    } catch (error: any) {
        console.log("Error : ", error)
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                    <h1 className="text-3xl font-bold mg-6 text-center text-gray-700">Error</h1>
                    <p className="text-center text-red-500">Failed to load urls</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">

            <div className="p-10  rounded-lg shadow-2xl max-w-4xl w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">All Short Urls</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Oringinal URL</TableHead>
                            <TableHead> Short URL</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {urls.urls && urls.urls.map((url: { _id: string, originalUrl: string, shortUrl: string }) => {
                            return (
                                <TableRow key={url._id}>
                                    <TableCell>{url.originalUrl}</TableCell>
                                    <TableCell>
                                        <a
                                            href={`/${url.shortUrl}`}
                                            target="_blank"
                                            className="link link-primary text-blue-200"
                                        >
                                            {`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}
                                        </a>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
            <Button variant="outline" className="mt-6">
                <Link href="/"> Go To Home</Link>
            </Button>
        </div>
    )
}