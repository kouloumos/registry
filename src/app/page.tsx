import Link from "next/link";
import { getTranscriptList } from "@/utils";

export default function Home() {
  const firstLetterRegex = /(^\w{1})|(\s+\w{1})/g;
  const { list } = getTranscriptList();

  return (
    <main className='bg-white'>
      <div className='p-8'>
        <div>
          <div className='flex flex-col gap-4 p-6 cursor-pointer border border-[#cecece] rounded-[0.5px] w-fit'>
            {list.map((list) => (
              <Link key={list} href={`transcript/${list}`} className='border border-[#cecece] p-6 bg-[#fffcf9] text-[#4d4d4d] hover:bg-transparent'>
                {list
                  .split("-")
                  .map((text) => text.replace(firstLetterRegex, (text) => text.toUpperCase()))
                  .join(" ")}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <section></section>
    </main>
  );
}
