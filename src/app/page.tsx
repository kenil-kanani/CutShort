import Link from "next/link";
import shortenUrl from "./serverActions/ShortenUrlAction";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <>

      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="rounded-lg shadow-2xl w-80 sm:w-[500px] md:w-[800px] ">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Cut Short</CardTitle>
              <CardDescription>Your own URL Shortener</CardDescription>
            </CardHeader>
            <CardContent>
              <form method="POST" action={shortenUrl} className="space-y-6">
                <Input type="text" placeholder="Enter Custom Alias" name="originalUrl" />
                <Button type="submit" variant="outline" className="mt-6">Shorten</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <Link href="/urls">
            <Button variant="outline" className="mt-6">View All Shortened URLS</Button>
          </Link>
        </div>
      </div>
    </>
  );
}