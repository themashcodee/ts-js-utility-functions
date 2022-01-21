type FormField<T> = {
	[Property in keyof T]: T[Property] extends File
		? [T[Property], string] | T[Property]
		: T[Property] extends string[]
		? string[]
		: string
}

export function createFormData<T>(data: FormField<T>): FormData {
	const formData = new FormData()
	for (let key in data) {
		const value = data[key]
		if (value instanceof File) formData.append(key, value)
		if (typeof value === "string") formData.append(key, value)
		if (Array.isArray(value)) {
			value[0] instanceof File
				? formData.append(key, value[0], value[1])
				: value.forEach((val) => formData.append(key, val))
		}
	}
	return formData
}
