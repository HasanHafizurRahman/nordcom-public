import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <h1>This is The Nordcom Ecommerce Public Panel</h1>
      <p>API base url get from env '{process.env.API_BASE_URL}'</p>
    </main>
  );
}
