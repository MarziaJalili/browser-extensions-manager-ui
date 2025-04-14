import Header from "./components/header/Header";
import Extensions from "./components/extensions/Extensions";

const MyComponent = () => {
  return (
    <main className="text-Neutral-900 min-h-screen p-4 container mx-auto max-w-7xl md:py-8">
      <Header />
      <Extensions />
    </main>
  );
};

export default MyComponent;
