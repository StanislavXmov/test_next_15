import { WysiwygProvider } from "@/widgets/wysiwyg/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WysiwygProvider>{children}</WysiwygProvider>;
}
