import Image from "next/image";
import Link from "next/link";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { downloadButton, homeSection } from "@/styles/styles.css";
import BlurIn from "@/components/ui/blur-in";
import { FadeText } from "@/components/ui/fade-text";

export default function Home() {
  const downloadLink =
    "https://github.com/AkaneFoundation/Accord/releases/latest";
  const words = `We didn’t steal Apple’s design. We just made it better.`;

  return (
    <>
      <main className={`${homeSection}`}>
        <div className="flex w-[310px] flex-col gap-8">
          <div>
            <BlurIn
              className="text-[64px] font-bold leading-[86px]"
              word="Accord"
            />
            <TextGenerateEffect className="w-auto" words={words} />
          </div>
          <Link href={downloadLink}>
            <FadeText
              className={`${downloadButton} bg-white text-black`}
              text="Download"
              direction="left"
            />
          </Link>
        </div>
        <Image
          src={"/AccordPhone.png"}
          alt={"Accord logo"}
          width={"200"}
          height={"500"}
          quality={100}
          priority={true}
          style={{ height: "auto", width: "auto" }}
        />
      </main>
    </>
  );
}
