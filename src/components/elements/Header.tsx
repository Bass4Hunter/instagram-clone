import "@fontsource/oleo-script";

export default function Header() {
  return (
    <header className="py-3 border-b-2">
      <div className="max-w-200 mx-auto flex justify-center items-center px-4">
        <h1
          className="text-3xl text-blue-600"
          style={{ fontFamily: "Oleo Script" }}
        >
          Mintagram
        </h1>
      </div>
    </header>
  );
}
