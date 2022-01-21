import type { NextPage } from "next"
import { Favicon, Head } from "components"

const Home: NextPage = () => {
	return (
		<>
			<Head />
			<section className="flex flex-col p-8 h-screen w-full justify-center items-center gap-8">
				<Favicon className="w-48 h-48" />
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-gray-800 text-4xl text-center max-w-lg">
						A vast collection of Javascript and Typescript utility functions.
					</h1>
					<button className="bg-red-400 py-2 px-4 max-w-max rounded-lg text-white">
						<a href="https://github.com/themashcodee/ts-js-utility-functions">
							{"Let's Go"}
						</a>
					</button>
				</div>
			</section>
		</>
	)
}

export default Home
