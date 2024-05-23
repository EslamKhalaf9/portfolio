import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Let&apos;s work together
        </CardTitle>
        <CardDescription>
          Fill out the form below and I will get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="john@example.com" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea className="min-h-[100px]" id="message" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}