'use client'
import { FormEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


const Form = ({ transformURL2Code }: { transformURL2Code: (url: string) => void }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const url = e.currentTarget.elements.namedItem("url") as HTMLInputElement
        console.log(url.value)
        transformURL2Code(url.value)
    }

    return (
        <form onSubmit={handleSubmit}
            className="flex flex-col gap-4">
            <Label htmlFor="url">Add image URL</Label>
            <Input name="url" id="url" type="url" placeholder="https://your-screenshot/image.jpg"></Input>
            <Button>Generate code from image</Button>
        </form>
    )
}

export default Form