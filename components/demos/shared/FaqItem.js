export default function FaqItem({ question, children, open = false }) {
  return (
    <details open={open} className="group border-b border-black/10 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
        {question}
        <span aria-hidden="true" className="text-xl font-normal transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="max-w-2xl pt-3 text-sm leading-7 text-[#68716c]">{children}</div>
    </details>
  );
}
