import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>This is The Nordcom Ecommerce Public Panel</h1>
      <p>API base url get from env '{process.env.API_BASE_URL}'</p>
    </main>
  );
}
