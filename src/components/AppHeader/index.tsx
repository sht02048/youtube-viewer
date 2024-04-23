import SearchForm from "../SearchForm";

export default function AppHeader () {
  return (
    <div
      className="w-screen h-16 fixed bg-slate-500 bg-primary flex items-center px-10 justify-between">
      <span
        className="text-white text-xl">
        Youtube Viewer
      </span>
      <SearchForm />
    </div>
  );
}

