import React from "react"
import NextHead from "next/head"

type Props = {}

export const Head = (props: Props) => {
	return (
		<NextHead>
			<title>Javascript and Typescript Utility Functions</title>
			<meta
				name="description"
				content="A collection of javascript and typescript utility functions that will help you to solve small problems while building big frontend applications."
			/>
			<link rel="icon" href="/favicon.png" />
		</NextHead>
	)
}
