"use client";

import Image from "next/image";
import { getAssetPath } from "@/lib/getAssetPath";
import Link from "next/link";
import { useMemo, useState } from "react";

const base = getAssetPath("/images/demos/fast-food/");

const formats = [
  { id: "solo", name: "Menu Solo", description: "Burger + frites", price: 15.9, includesDrink: false },
  { id: "district", name: "Menu District", description: "Burger + frites + boisson", price: 18.5, includesDrink: true, popular: true },
  { id: "xl", name: "Menu XL", description: "Double burger + grande frite + boisson", price: 21.9, includesDrink: true },
];

const burgers = [
  { id: "original", name: "District Original", description: "Double smash, cheddar, pickles, sauce District", price: 12.9, supplement: 0, image: `${base}burger-1.jpg` },
  { id: "hot", name: "Hot One", description: "Double smash, cheddar, jalapeños, sauce spicy", price: 13.9, supplement: 1, image: `${base}burger-2.jpg` },
  { id: "chicken", name: "Chicken Crunch", description: "Poulet croustillant, coleslaw, sauce maison", price: 12.5, supplement: 0, image: `${base}burger-3.jpg` },
  { id: "veggie", name: "Veggie Melt", description: "Galette végétale, cheddar, pickles, oignons", price: 11.9, supplement: 0, image: `${base}burger-4.jpg` },
];

const fries = [
  { id: "classic", name: "Frites maison", description: "Sel fin, sauce District", price: 4.5, supplement: 0 },
  { id: "cajun", name: "Frites Cajun", description: "Épices fumées, sauce ranch", price: 5, supplement: 0.5 },
  { id: "loaded", name: "Loaded fries", description: "Cheddar, oignons crispy, sauce District", price: 7.5, supplement: 2.5 },
];

const drinks = [
  { id: "cola", name: "Cola", description: "33 cl · bien frais", price: 3, supplement: 0, mark: "CO" },
  { id: "lemonade", name: "Citronnade", description: "Maison · peu sucrée", price: 3.5, supplement: 0.5, mark: "CI" },
  { id: "tea", name: "Thé glacé", description: "Pêche · 33 cl", price: 3, supplement: 0, mark: "TH" },
  { id: "water", name: "Eau pétillante", description: "33 cl", price: 2.5, supplement: 0, mark: "EA" },
];

const categories = [
  { id: "burgers", label: "Burgers", products: burgers },
  { id: "fries", label: "Frites", products: fries },
  { id: "drinks", label: "Boissons", products: drinks },
];

const money = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });

function ChoiceCard({ item, selected, onSelect, type }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group overflow-hidden border-2 text-left transition ${selected ? "border-[#ff4b20] bg-[#ff4b20] text-black" : "border-[#fff4de]/20 bg-[#1b1b18] hover:border-[#ff4b20]"}`}
    >
      {item.image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={getAssetPath(item.image)} alt="" fill sizes="(max-width: 767px) 50vw, 240px" className="object-cover transition duration-300 group-hover:scale-105" />
          <span className={`absolute right-2 top-2 grid size-7 place-items-center border-2 text-sm font-black ${selected ? "border-black bg-black text-[#ff4b20]" : "border-white bg-black/70"}`}>
            {selected ? "✓" : "+"}
          </span>
        </div>
      ) : (
        <div className={`grid h-20 place-items-center border-b-2 text-3xl font-black italic ${selected ? "border-black/20 bg-black text-[#ff4b20]" : "border-white/10 bg-[#252520] text-[#ff4b20]"}`}>
          {type === "drink" ? item.mark : "FRIES"}
        </div>
      )}
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-black uppercase italic leading-tight sm:text-base">{item.name}</h3>
          {item.supplement > 0 ? <span className="shrink-0 text-[.65rem] font-black">+{money.format(item.supplement)}</span> : null}
        </div>
        <p className={`mt-2 text-xs leading-5 ${selected ? "text-black/65" : "text-white/50"}`}>{item.description}</p>
      </div>
    </button>
  );
}

function ProductRow({ product, onAdd, type }) {
  return (
    <article className="flex min-h-28 overflow-hidden border-2 border-black bg-[#fff4de]">
      {product.image ? (
        <div className="relative w-28 shrink-0 sm:w-32">
          <Image src={getAssetPath(product.image)} alt="" fill sizes="128px" className="object-cover" />
        </div>
      ) : (
        <div className="grid w-24 shrink-0 place-items-center bg-black text-xl font-black italic text-[#ff4b20] sm:w-28">
          {type === "drinks" ? product.mark : "FRIES"}
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4 text-black">
        <div>
          <h3 className="font-black uppercase italic leading-tight">{product.name}</h3>
          <p className="mt-1 text-xs leading-5 text-black/55">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <strong>{money.format(product.price)}</strong>
          <button type="button" onClick={onAdd} className="border-2 border-black bg-[#ff4b20] px-3 py-2 text-[.68rem] font-black uppercase transition hover:bg-black hover:text-[#ff4b20]">
            Ajouter +
          </button>
        </div>
      </div>
    </article>
  );
}

function Cart({ lines, onDecrease, onIncrease, onRemove }) {
  const total = useMemo(() => lines.reduce((sum, line) => sum + line.price * line.quantity, 0), [lines]);
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <aside aria-labelledby="cart-title" className="border-2 border-black bg-[#fff4de] text-black lg:sticky lg:top-24">
      <div className="flex items-center justify-between border-b-2 border-black bg-[#ff4b20] p-5">
        <h2 id="cart-title" className="text-2xl font-black uppercase italic">Ton panier</h2>
        <span className="grid size-8 place-items-center bg-black text-sm font-black text-[#ff4b20]" aria-label={`${count} article${count > 1 ? "s" : ""}`}>{count}</span>
      </div>

      {lines.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-4xl font-black italic text-[#ff4b20]">0</p>
          <p className="mt-3 font-black uppercase">Ça sonne creux.</p>
          <p className="mt-2 text-sm leading-6 text-black/55">Compose un menu ou ajoute tes produits préférés.</p>
        </div>
      ) : (
        <ul className="divide-y-2 divide-black/15 px-5">
          {lines.map((line) => (
            <li key={line.sku} className="py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-black uppercase italic leading-tight">{line.name}</h3>
                  {line.details ? <p className="mt-1 text-xs leading-5 text-black/55">{line.details}</p> : null}
                </div>
                <strong className="shrink-0 text-sm">{money.format(line.price * line.quantity)}</strong>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex border-2 border-black" aria-label={`Quantité de ${line.name}`}>
                  <button type="button" onClick={() => onDecrease(line.sku)} className="grid size-8 place-items-center font-black hover:bg-black hover:text-white" aria-label={`Diminuer ${line.name}`}>−</button>
                  <span className="grid size-8 place-items-center border-x-2 border-black text-xs font-black">{line.quantity}</span>
                  <button type="button" onClick={() => onIncrease(line.sku)} className="grid size-8 place-items-center font-black hover:bg-black hover:text-white" aria-label={`Augmenter ${line.name}`}>+</button>
                </div>
                <button type="button" onClick={() => onRemove(line.sku)} className="text-xs font-black uppercase underline decoration-2 underline-offset-4 hover:text-[#e33f19]">
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="border-t-2 border-black p-5">
        <div className="flex items-end justify-between gap-4">
          <span className="text-xs font-black uppercase tracking-[.14em]">Total</span>
          <strong className="text-3xl font-black italic">{money.format(total)}</strong>
        </div>
        <button type="button" disabled={!lines.length} className="mt-5 min-h-14 w-full border-2 border-black bg-[#ff4b20] px-5 text-sm font-black uppercase transition enabled:hover:bg-black enabled:hover:text-[#ff4b20] disabled:cursor-not-allowed disabled:opacity-35">
          Valider le panier
        </button>
        <p className="mt-3 text-center text-[.65rem] font-bold uppercase tracking-wide text-black/45">Paiement au retrait · Paris 10e</p>
      </div>
    </aside>
  );
}

export default function OrderInterface() {
  const [formatId, setFormatId] = useState("district");
  const [burgerId, setBurgerId] = useState(null);
  const [friesId, setFriesId] = useState(null);
  const [drinkId, setDrinkId] = useState(null);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("burgers");

  const format = formats.find((item) => item.id === formatId);
  const burger = burgers.find((item) => item.id === burgerId);
  const friesChoice = fries.find((item) => item.id === friesId);
  const drink = drinks.find((item) => item.id === drinkId);
  const menuComplete = Boolean(burger && friesChoice && (!format.includesDrink || drink));
  const menuPrice = format.price + (burger?.supplement || 0) + (friesChoice?.supplement || 0) + (format.includesDrink ? drink?.supplement || 0 : 0);

  const addLine = (line) => {
    setCart((current) => {
      const existing = current.find((item) => item.sku === line.sku);
      return existing
        ? current.map((item) => item.sku === line.sku ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...line, quantity: 1 }];
    });
  };

  const addMenu = () => {
    if (!menuComplete) return;
    const selectedNames = [burger.name, friesChoice.name, format.includesDrink ? drink.name : null].filter(Boolean);
    addLine({
      sku: `menu-${format.id}-${burger.id}-${friesChoice.id}-${format.includesDrink ? drink.id : "none"}`,
      name: format.name,
      details: selectedNames.join(" · "),
      price: menuPrice,
    });
  };

  const updateQuantity = (sku, delta) => {
    setCart((current) => current
      .map((line) => line.sku === sku ? { ...line, quantity: line.quantity + delta } : line)
      .filter((line) => line.quantity > 0));
  };

  const activeProducts = categories.find((category) => category.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#11110f] text-[#fff4de] selection:bg-[#ff4b20] selection:text-black">
      <header className="border-b-2 border-[#fff4de]/15 bg-[#11110f]">
        <nav aria-label="Navigation principale" className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link href="/demo/smash-district" className="text-xl font-black italic tracking-[-.05em] sm:text-2xl">SMASH DISTRICT</Link>
          <div className="hidden items-center gap-2 text-xs font-black uppercase sm:flex">
            <span className="size-2 bg-[#ff4b20]" />
            Click & collect · 15–20 min
          </div>
          <Link href="/demo/smash-district" className="border-2 border-[#fff4de]/30 px-3 py-2 text-xs font-black uppercase transition hover:border-[#ff4b20] hover:text-[#ff4b20]">Retour</Link>
        </nav>
      </header>

      <main>
        <section className="border-b-2 border-black bg-[#ff4b20] px-5 py-9 text-black sm:px-8 sm:py-12 lg:px-10">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-black uppercase tracking-[.2em]">Commande en ligne · Paris 10e</p>
            <h1 className="mt-3 text-5xl font-black uppercase italic leading-[.86] tracking-[-.065em] sm:text-7xl lg:text-8xl">Compose.<br />Smash. Repeat.</h1>
          </div>
        </section>

        <div className="mx-auto grid max-w-[1440px] gap-7 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:px-10 lg:py-10">
          <div className="min-w-0 space-y-8">
            <section aria-labelledby="builder-title" className="border-2 border-[#fff4de]/20 bg-[#161613] p-4 sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#fff4de]/15 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.18em] text-[#ff4b20]">La formule</p>
                  <h2 id="builder-title" className="mt-2 text-3xl font-black uppercase italic sm:text-4xl">Compose ton menu</h2>
                </div>
                <p className="text-xs font-bold text-white/45">Choisis 1 option à chaque étape.</p>
              </div>

              <fieldset className="mt-6">
                <legend className="mb-3 text-sm font-black uppercase"><span className="mr-2 text-[#ff4b20]">01</span>Ton niveau</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {formats.map((item) => (
                    <button key={item.id} type="button" onClick={() => setFormatId(item.id)} aria-pressed={formatId === item.id} className={`relative min-h-28 border-2 p-4 text-left transition ${formatId === item.id ? "border-[#ff4b20] bg-[#ff4b20] text-black" : "border-[#fff4de]/20 hover:border-[#ff4b20]"}`}>
                      {item.popular ? <span className="absolute right-2 top-2 bg-black px-2 py-1 text-[.55rem] font-black uppercase text-[#ff4b20]">Best seller</span> : null}
                      <strong className="block pr-16 text-lg font-black uppercase italic">{item.name}</strong>
                      <span className={`mt-2 block text-xs ${formatId === item.id ? "text-black/60" : "text-white/45"}`}>{item.description}</span>
                      <span className="mt-3 block font-black">{money.format(item.price)}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="mb-3 text-sm font-black uppercase"><span className="mr-2 text-[#ff4b20]">02</span>Ton burger</legend>
                <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                  {burgers.map((item) => <ChoiceCard key={item.id} item={item} selected={burgerId === item.id} onSelect={() => setBurgerId(item.id)} type="burger" />)}
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="mb-3 text-sm font-black uppercase"><span className="mr-2 text-[#ff4b20]">03</span>Tes frites</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {fries.map((item) => <ChoiceCard key={item.id} item={item} selected={friesId === item.id} onSelect={() => setFriesId(item.id)} type="fries" />)}
                </div>
              </fieldset>

              {format.includesDrink ? (
                <fieldset className="mt-8">
                  <legend className="mb-3 text-sm font-black uppercase"><span className="mr-2 text-[#ff4b20]">04</span>Ta boisson</legend>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {drinks.map((item) => <ChoiceCard key={item.id} item={item} selected={drinkId === item.id} onSelect={() => setDrinkId(item.id)} type="drink" />)}
                  </div>
                </fieldset>
              ) : null}

              <div className="mt-8 flex flex-col gap-4 border-t-2 border-[#fff4de]/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase text-white/45">Ton menu</p>
                  <p className="mt-1 text-2xl font-black italic text-[#ff4b20]">{money.format(menuPrice)}</p>
                </div>
                <button type="button" onClick={addMenu} disabled={!menuComplete} className="min-h-14 border-2 border-[#ff4b20] bg-[#ff4b20] px-6 text-sm font-black uppercase text-black transition enabled:hover:-translate-y-1 enabled:hover:bg-[#fff4de] enabled:hover:border-[#fff4de] disabled:cursor-not-allowed disabled:opacity-35">
                  {menuComplete ? "Ajouter ce menu +" : "Complète ton menu"}
                </button>
              </div>
            </section>

            <section aria-labelledby="catalog-title" className="bg-[#ff4b20] p-4 text-black sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.18em]">Encore faim ?</p>
                  <h2 id="catalog-title" className="mt-2 text-3xl font-black uppercase italic sm:text-4xl">À la carte</h2>
                </div>
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Catégories de produits">
                  {categories.map((category) => (
                    <button key={category.id} type="button" role="tab" aria-selected={activeCategory === category.id} onClick={() => setActiveCategory(category.id)} className={`border-2 border-black px-3 py-2 text-xs font-black uppercase ${activeCategory === category.id ? "bg-black text-[#ff4b20]" : "hover:bg-black hover:text-[#ff4b20]"}`}>
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              <div role="tabpanel" className="mt-5 grid gap-3 md:grid-cols-2">
                {activeProducts.products.map((product) => (
                  <ProductRow key={product.id} product={product} type={activeProducts.id} onAdd={() => addLine({ sku: `${activeProducts.id}-${product.id}`, name: product.name, details: product.description, price: product.price })} />
                ))}
              </div>
            </section>
          </div>

          <Cart
            lines={cart}
            onDecrease={(sku) => updateQuantity(sku, -1)}
            onIncrease={(sku) => updateQuantity(sku, 1)}
            onRemove={(sku) => setCart((current) => current.filter((line) => line.sku !== sku))}
          />
        </div>
      </main>

      <footer className="border-t-2 border-white/15 px-5 py-8 text-xs text-white/45 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-3">
          <b className="text-white">SMASH DISTRICT</b>
          <span>42 rue du Passage · Paris 10e · 11h30 — 23h</span>
        </div>
      </footer>
    </div>
  );
}
