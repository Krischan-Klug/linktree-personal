import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <LinkCard
        refLink="https://github.com/Krischan-Klug"
        title="Github"
        refIcon="/github.svg"
      />
    </main>
  );
}
