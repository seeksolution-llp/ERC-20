import dynamic from "next/dynamic";
import Image from "next/image";
const HomePage = dynamic(() => import('@/components/HomePage'), { ssr: false })

export default function Home() {
  return (
    <HomePage />
  );
}
