import Header from "@/components/Header";

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#02071e] flex flex-col justify-start items-center font-[family-name:var(--font-geist-sans)]">
            <Header />
            <div className=" bg-[#02071e]  items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <h1 className="text-3xl  text-blue-600 font-bold  text-center mt-10">
                        Projects Page
                    </h1>
                </main>
            </div>
        </div>

    )
}