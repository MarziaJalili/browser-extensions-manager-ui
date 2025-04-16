import Search from "./Search";
import ExtensionCards from "./ExtensionCards";

const Extensions = () => {
  return (
    <article className="text-Neutral-900 flex flex-col gap-5 mt-8 items-center">
      <section className="w-full flex max-md:flex-col gap-5 items-center text-lg justify-between container mx-auto">
        <h1 className="font-bold text-3xl">Extensions List</h1>
        <div className="flex gap-4 items-center justify-between">
          <button className="text-white border-transparent bg-Red-700 rounded-full cursor-pointe0 shadow-lg shadow-Neutral-200 pt-1 pb-1.5 px-5 border-1">
            All
          </button>
          <button className="rounded-full cursor-pointer bg-white border-Neutral-200 shadow-lg shadow-Neutral-200 pt-1 pb-1.5 px-5 border-1">
            Active
          </button>
          <button className="rounded-full cursor-pointer bg-white border-Neutral-200 shadow-lg shadow-Neutral-200 pt-1 pb-1.5 px-5 border-1">
            Inactive
          </button>
        </div>
      </section>

      <div className="flex flex-col w-full  items-center gap-5 lg:container mx-auto">
        <Search />
        <ExtensionCards />
      </div>
    </article>
  );
};

export default Extensions;
