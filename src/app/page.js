import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#02071e] flex flex-col justify-start items-center font-[family-name:var(--font-geist-sans)]">
      <Header pathname={`/`} />
      <div className=" bg-[#02071e]  items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center ">
          <h1 className="text-3xl  text-blue-600 font-bold  text-center mt-10">
            MIHIR ACHARYA
          </h1>
          <h1 className="text-3xl  text-blue-600 font-bold  text-center mt-10">
            Welcome to my portfolio!
          </h1>
        </main>
      </div>
    </div>

  )
}