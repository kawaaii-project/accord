import MdxLayout from "@/components/mdx-layout";

export default function ChangelogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MdxLayout>{children}</MdxLayout>
    </>
  );
}
