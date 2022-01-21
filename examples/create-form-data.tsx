import React, { useState } from "react"
import { createFormData } from "utils"

interface Data {
	email: string
	password: string
	image: File
	hobbies: string[]
}
const apiUrl = ""

export const CreateFormDataExample = () => {
	const [email, setEmail] = useState("codeemash@gmail.com")
	const [password, setPassword] = useState("abc123")
	const [image, setImage] = useState<File>()
	const [hobbies, setHobbies] = useState<string[]>(["running", "singing"])

	async function submitForm() {
		if (!image) return alert("upload an image")
		if (!apiUrl) return alert("set a api url")

		const formData = createFormData<Data>({ email, password, image, hobbies })

		const data = await (
			await fetch(apiUrl, {
				method: "POST",
				body: formData,
			})
		).json()

		console.log(data)
	}

	return (
		<div className="flex flex-col gap-4">
			<input type="file" onChange={(e) => setImage(e.target.files?.[0])} />
			<button
				onClick={submitForm}
				className="bg-blue-400 text-white py-2 rounded-lg"
			>
				Submit Form
			</button>
		</div>
	)
}
