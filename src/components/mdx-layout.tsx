import { changelogsSection } from "@/styles/styles.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`${changelogsSection} bg-[#4c4c4c] backdrop-blur-[20px]`}>
        {children}
      </div>
    </>
  );
}
