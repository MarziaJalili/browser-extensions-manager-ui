import Header from "./components/header/Header";
import Extensions from "./components/extensions/Extensions";
import { useState } from "react";

const MyComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className=" font-noto-sans text-Neutral-900 min-h-screen p-4 container mx-auto sm:px-12 max-w-7xl md:py-8">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Extensions darkMode={darkMode} />
    </main>
  );
};

export default MyComponent;
