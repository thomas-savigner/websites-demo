export default function DemoFooter({ brand = "Atelier Démo", note = "Collection interne — entreprises fictives" }) {
  return (
    <footer className="border-t border-black/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[#68716c] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-[#18221d]">{brand}</p>
        <p>{note}</p>
      </div>
    </footer>
  );
}
