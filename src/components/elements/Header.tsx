import "@fontsource/oleo-script";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-3">
      <div className="max-w-200 mx-auto flex justify-center items-center px-4">
        <h1 className="text-3xl" style={{ fontFamily: "Oleo Script" }}>
          Mintagram
        </h1>
      </div>
    </header>
  );
}
