"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const base = "/images/demos/dashboard/";

const navItems = [
  ["overview", "Vue d’ensemble"], ["clients", "Clients"], ["projects", "Projets"],
  ["tasks", "Tâches"], ["billing", "Facturation"], ["team", "Équipe"], ["reports", "Rapports"],
];

const projects = [
  ["Refonte e-commerce", "Maison Alba", "18 août", "8 400 €", "En cours"],
  ["Portail partenaire", "Altis Groupe", "24 août", "12 600 €", "En revue"],
  ["Application planning", "Atelier 17", "4 septembre", "16 200 €", "En cours"],
  ["Audit digital", "Nova Conseil", "11 août", "2 400 €", "À valider"],
];

function Icon({ name, className = "h-[18px] w-[18px]" }) {
  const paths = {
    overview: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    clients: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    projects: <><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 4V2m8 2V2M3 9h18"/></>,
    tasks: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
    billing: <><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M7 7h10M7 12h10M7 17h6"/></>,
    team: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    reports: <><path d="M4 20V10m6 10V4m6 16v-7m6 7H2"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-2.83 2.83-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21h-4v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06-2.83-2.83.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3v-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06 2.83-2.83.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3h4v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06 2.83 2.83-.06.06A1.65 1.65 0 0 0 19.4 9c.12.6.64 1.02 1.25 1H21v4h-.35c-.61 0-1.13.42-1.25 1Z"/></>,
    help: <><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 1 1 4.65 2.5c-1.1.7-1.75 1.2-1.75 2.5m0 4h.01"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current`} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Sidebar({ open, onClose }) {
  return <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#102c4c] text-white transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
    <div className="flex h-[74px] items-center justify-between border-b border-white/10 px-6"><div className="flex items-center gap-3 text-xl font-bold tracking-[-.04em]"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#3379f6] text-sm">O</span>OpsFlow</div><button onClick={onClose} className="text-2xl text-white/60 lg:hidden" aria-label="Fermer le menu">×</button></div>
    <nav aria-label="Navigation de l’application" className="flex-1 px-3 py-6"><p className="px-3 text-[10px] font-bold uppercase tracking-[.16em] text-white/35">Espace de travail</p><div className="mt-3 space-y-1">{navItems.map(([icon,label],index)=><button key={label} className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${index===0?"bg-white/12 font-semibold text-white":"text-white/58 hover:bg-white/[.07] hover:text-white"}`}><Icon name={icon}/><span>{label}</span>{index===2&&<span className="ml-auto rounded-full bg-[#3379f6] px-2 py-0.5 text-[10px] text-white">18</span>}<span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded bg-[#071d35] px-2 py-1 text-xs shadow-lg group-hover:lg:block">Ouvrir {label.toLowerCase()}</span></button>)}</div></nav>
    <div className="border-t border-white/10 p-3">{[["settings","Paramètres"],["help","Aide"]].map(([icon,label])=><button key={label} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/55 transition hover:bg-white/[.07] hover:text-white"><Icon name={icon}/>{label}</button>)}<div className="mt-3 flex items-center gap-3 rounded-xl bg-white/[.07] p-3"><Image src={`${base}avatar-1.jpg`} alt="Thomas Martin" width={36} height={36} className="h-9 w-9 rounded-full object-cover"/><div className="min-w-0"><p className="truncate text-xs font-semibold">Thomas Martin</p><p className="truncate text-[10px] text-white/40">Administrateur</p></div></div></div>
  </aside>;
}

function KpiCard({ label, value, note, positive = false, icon }) {
  return <article className="rounded-xl border border-[#dfe5ec] bg-white p-5 shadow-[0_1px_2px_rgba(16,44,76,.03)]"><div className="flex items-start justify-between"><div><p className="text-sm text-[#6b7888]">{label}</p><strong className="mt-3 block text-3xl font-semibold tracking-[-.04em] text-[#102c4c]">{value}</strong></div><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#eef4ff] text-[#3379f6]"><Icon name={icon}/></span></div><p className={`mt-4 text-xs font-medium ${positive?"text-[#15966c]":"text-[#6b7888]"}`}>{positive&&"↗ "}{note}</p></article>;
}

export default function OpsFlowDashboard() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [modalOpen,setModalOpen]=useState(false);
  const [userOpen,setUserOpen]=useState(false);
  const [period,setPeriod]=useState("30 derniers jours");
  const [tasks,setTasks]=useState([false,true,false,true]);
  const [created,setCreated]=useState(false);
  const toggleTask=(index)=>setTasks(current=>current.map((value,i)=>i===index?!value:value));
  const submitProject=(event)=>{event.preventDefault();setModalOpen(false);setCreated(true);setTimeout(()=>setCreated(false),3000);};

  return <div className="min-h-screen bg-[#f5f7fa] text-[#24354a] selection:bg-[#bfd7ff]">
    <Sidebar open={menuOpen} onClose={()=>setMenuOpen(false)}/>
    {menuOpen&&<button aria-label="Fermer le menu" onClick={()=>setMenuOpen(false)} className="fixed inset-0 z-40 bg-[#071d35]/40 backdrop-blur-sm lg:hidden"/>}

    <div className="lg:pl-64">
      <header className="sticky top-0 z-30 flex h-[74px] items-center justify-between border-b border-[#dfe5ec] bg-white/95 px-4 backdrop-blur-xl sm:px-7">
        <div className="flex items-center gap-3"><button onClick={()=>setMenuOpen(true)} className="grid h-10 w-10 place-items-center rounded-lg border border-[#dfe5ec] lg:hidden" aria-label="Ouvrir le menu"><span className="space-y-1"><i className="block h-px w-4 bg-current"/><i className="block h-px w-4 bg-current"/><i className="block h-px w-4 bg-current"/></span></button><div className="relative hidden md:block"><Icon name="search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8995a3]"/><input aria-label="Rechercher" placeholder="Rechercher un client, un projet…" className="h-10 w-72 rounded-lg border border-[#dfe5ec] bg-[#f8fafc] pl-10 pr-4 text-sm outline-none transition focus:border-[#8db2f7] focus:bg-white"/></div></div>
        <div className="flex items-center gap-2"><button className="group relative grid h-10 w-10 place-items-center rounded-lg border border-[#dfe5ec] text-[#5b6a7b] transition hover:bg-[#f5f7fa]" aria-label="Notifications"><Icon name="bell"/><span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-[#f15f64]"/><span className="pointer-events-none absolute right-0 top-12 hidden whitespace-nowrap rounded bg-[#102c4c] px-2 py-1 text-xs text-white group-hover:block">3 notifications</span></button><div className="relative"><button onClick={()=>setUserOpen(!userOpen)} className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-[#f5f7fa]"><Image src={`${base}avatar-1.jpg`} alt="Thomas Martin" width={34} height={34} className="h-[34px] w-[34px] rounded-full object-cover"/><span className="hidden text-left sm:block"><b className="block text-xs">Thomas Martin</b><span className="block text-[10px] text-[#8995a3]">Administrateur</span></span><span className="text-xs text-[#8995a3]">⌄</span></button>{userOpen&&<div className="absolute right-0 top-12 w-48 rounded-lg border border-[#dfe5ec] bg-white p-2 text-sm shadow-xl"><button className="w-full rounded-md px-3 py-2 text-left hover:bg-[#f5f7fa]">Mon profil</button><button className="w-full rounded-md px-3 py-2 text-left hover:bg-[#f5f7fa]">Préférences</button><Link href="/demo" className="block border-t border-[#e7ebf0] px-3 py-2 text-[#6b7888]">Quitter la démo</Link></div>}</div></div>
      </header>

      <main className="mx-auto max-w-[1550px] p-4 sm:p-7 lg:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-2xl font-semibold tracking-[-.03em] text-[#102c4c] sm:text-3xl">Bonjour Thomas</h1><p className="mt-1 text-sm text-[#738092]">Voici ce qui se passe aujourd’hui.</p></div><div className="flex gap-2"><button onClick={()=>setPeriod(period==="30 derniers jours"?"90 derniers jours":"30 derniers jours")} className="rounded-lg border border-[#d9e0e8] bg-white px-4 py-2.5 text-xs font-medium text-[#526175] transition hover:border-[#9fb4cb]">◷&nbsp; {period}⌄</button><button onClick={()=>setModalOpen(true)} className="rounded-lg bg-[#286fe8] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#185bc7]">＋ Nouveau projet</button></div></div>

        <section aria-label="Indicateurs clés" className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><KpiCard label="Chiffre d’affaires" value="48 240 €" note="+8,4 %" positive icon="billing"/><KpiCard label="Projets actifs" value="18" note="+3 ce mois" positive icon="projects"/><KpiCard label="Tâches ouvertes" value="34" note="12 prioritaires" icon="tasks"/><KpiCard label="Conversion" value="32,8 %" note="+4,1 %" positive icon="reports"/></section>

        <section className="mt-4 grid gap-4 xl:grid-cols-[1.65fr_.85fr]">
          <article className="rounded-xl border border-[#dfe5ec] bg-white p-5 shadow-[0_1px_2px_rgba(16,44,76,.03)] sm:p-6"><div className="flex items-start justify-between"><div><h2 className="font-semibold text-[#102c4c]">Activité commerciale</h2><p className="mt-1 text-xs text-[#8995a3]">Chiffre d’affaires mensuel, en milliers d’euros</p></div><span className="rounded-md bg-[#e9f8f2] px-2.5 py-1 text-xs font-semibold text-[#15966c]">+8,4 %</span></div><div className="mt-7 h-[255px] w-full"><svg viewBox="0 0 700 255" className="h-full w-full overflow-visible" role="img" aria-label="Graphique du chiffre d’affaires de mars à août"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3379f6" stopOpacity=".22"/><stop offset="1" stopColor="#3379f6" stopOpacity="0"/></linearGradient></defs>{[35,85,135,185,235].map(y=><line key={y} x1="45" x2="680" y1={y} y2={y} stroke="#e8edf2" strokeWidth="1"/>)}<path d="M55 190 C110 180 135 155 175 165 S260 183 295 145 S370 122 415 105 S500 92 535 69 S610 54 665 42 L665 235 L55 235Z" fill="url(#area)"/><path d="M55 190 C110 180 135 155 175 165 S260 183 295 145 S370 122 415 105 S500 92 535 69 S610 54 665 42" fill="none" stroke="#3379f6" strokeWidth="4" strokeLinecap="round"/><path d="M55 174 C140 155 210 150 295 132 S455 98 535 78 S610 61 665 54" fill="none" stroke="#9fb1c5" strokeWidth="2" strokeDasharray="6 6"/>{[[55,190],[175,165],[295,145],[415,105],[535,69],[665,42]].map(([x,y])=><circle key={x} cx={x} cy={y} r="5" fill="white" stroke="#3379f6" strokeWidth="3"/>)}{["Mars","Avril","Mai","Juin","Juillet","Août"].map((m,i)=><text key={m} x={[55,175,295,415,535,665][i]} y="252" textAnchor="middle" fontSize="11" fill="#8995a3">{m}</text>)}</svg></div><div className="mt-3 flex gap-5 text-xs text-[#738092]"><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#3379f6]"/>CA</span><span className="flex items-center gap-2"><i className="h-0 w-4 border-t border-dashed border-[#9fb1c5]"/>Objectif</span></div></article>
          <article className="rounded-xl border border-[#dfe5ec] bg-white p-5 shadow-[0_1px_2px_rgba(16,44,76,.03)] sm:p-6"><h2 className="font-semibold text-[#102c4c]">Répartition des projets</h2><p className="mt-1 text-xs text-[#8995a3]">18 projets actifs</p><div className="mx-auto mt-8 grid h-40 w-40 place-items-center rounded-full" style={{background:"conic-gradient(#3379f6 0 35%, #6f9cf2 35% 65%, #72ccb0 65% 85%, #c5d1dd 85% 100%)"}}><div className="grid h-[104px] w-[104px] place-items-center rounded-full bg-white text-center"><span><b className="block text-2xl text-[#102c4c]">18</b><small className="text-[#8995a3]">projets</small></span></div></div><div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-xs">{[["#3379f6","Conseil","35 %"],["#6f9cf2","Développement","30 %"],["#72ccb0","Maintenance","20 %"],["#c5d1dd","Audit","15 %"]].map(([c,l,v])=><div key={l} className="flex items-center gap-2"><i className="h-2 w-2 rounded-full" style={{background:c}}/><span className="text-[#6b7888]">{l}</span><b className="ml-auto text-[#34455a]">{v}</b></div>)}</div></article>
        </section>

        <section className="mt-4 grid gap-4 xl:grid-cols-[1.65fr_.85fr]">
          <article className="overflow-hidden rounded-xl border border-[#dfe5ec] bg-white shadow-[0_1px_2px_rgba(16,44,76,.03)]"><div className="flex items-center justify-between p-5 sm:px-6"><div><h2 className="font-semibold text-[#102c4c]">Projets récents</h2><p className="mt-1 text-xs text-[#8995a3]">Dernières mises à jour</p></div><button className="text-xs font-semibold text-[#286fe8]">Voir tous les projets →</button></div><div className="overflow-x-auto"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-[#f8fafc] text-[10px] uppercase tracking-[.08em] text-[#8995a3]"><tr>{["Projet","Client","Échéance","Budget","Statut"].map(h=><th key={h} className="border-y border-[#e8edf2] px-6 py-3 font-semibold">{h}</th>)}</tr></thead><tbody>{projects.map(([name,client,date,budget,status],index)=><tr key={name} className="group border-b border-[#edf0f4] transition hover:bg-[#f6f9ff]"><td className="px-6 py-4"><div className="flex items-center gap-3"><span className={`grid h-8 w-8 place-items-center rounded-md text-xs font-bold ${index%2?"bg-[#e9f8f2] text-[#15966c]":"bg-[#eef4ff] text-[#3379f6]"}`}>{name[0]}</span><b className="font-medium text-[#26394f]">{name}</b></div></td><td className="px-6 py-4 text-[#6b7888]">{client}</td><td className="px-6 py-4 text-[#6b7888]">{date}</td><td className="px-6 py-4 font-medium">{budget}</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${status==="En cours"?"bg-[#eaf1ff] text-[#286fe8]":status==="En revue"?"bg-[#fff5dd] text-[#ad7411]":"bg-[#f2edff] text-[#7655bd]"}`}>{status}</span></td></tr>)}</tbody></table></div></article>
          <article className="rounded-xl border border-[#dfe5ec] bg-white p-5 shadow-[0_1px_2px_rgba(16,44,76,.03)] sm:p-6"><div className="flex justify-between"><h2 className="font-semibold text-[#102c4c]">Activité récente</h2><button className="text-[#8995a3]">•••</button></div><div className="mt-6 space-y-5">{[["09:42","Camille a terminé “Maquette dashboard”",2],["09:18","Nouveau commentaire sur “Portail partenaire”",3],["Hier","Facture #2026-048 réglée",4],["Hier","Nouveau projet créé : “Application planning”",1]].map(([time,text,avatar],index)=><div key={text} className="relative flex gap-3">{index<3&&<span className="absolute left-[15px] top-8 h-8 w-px bg-[#e0e6ec]"/>}<Image src={`${base}avatar-${avatar}.jpg`} alt="" width={30} height={30} className="relative h-[30px] w-[30px] shrink-0 rounded-full object-cover"/><div><p className="text-xs leading-5 text-[#4e5f72]">{text}</p><time className="text-[10px] text-[#9aa5b2]">{time}</time></div></div>)}</div></article>
        </section>

        <section className="mt-4 grid gap-4 xl:grid-cols-[1.65fr_.85fr]">
          
          <article className="rounded-xl border border-[#dfe5ec] bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><h2 className="font-semibold text-[#102c4c]">Mes tâches</h2><span className="text-xs text-[#8995a3]">{tasks.filter(Boolean).length}/4 terminées</span></div><div className="mt-4 space-y-1">{["Valider la maquette client","Préparer la réunion hebdomadaire","Relancer Maison Alba","Finaliser le rapport mensuel"].map((task,index)=><label key={task} className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 text-sm transition hover:bg-[#f5f7fa]"><input type="checkbox" checked={tasks[index]} onChange={()=>toggleTask(index)} className="h-4 w-4 accent-[#286fe8]"/><span className={tasks[index]?"text-[#98a2ae] line-through":"text-[#45566a]"}>{task}</span></label>)}</div></article>
        </section>
        <article className="relative isolate overflow-hidden rounded-xl bg-[#102c4c] p-6 text-white shadow-[0_1px_2px_rgba(16,44,76,.08)] sm:p-8">
            <div aria-hidden="true" className="absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full bg-[#3379f6]/35 blur-3xl" />
            <div aria-hidden="true" className="absolute bottom-0 right-10 -z-10 h-24 w-48 rounded-t-full border border-white/10 border-b-0" />
            <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#8db2f7]">Prochaine étape</p>
            <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="max-w-xl text-2xl font-semibold tracking-[-.035em] sm:text-3xl">Un nouveau projet en vue&nbsp;?</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">Centralisez son équipe, son budget et ses échéances dès le premier jour.</p>
              </div>
              <button onClick={()=>setModalOpen(true)} className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#102c4c] transition hover:-translate-y-0.5 hover:bg-[#eef4ff]">
                Créer un projet <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </article>
      </main>
    </div>

    {modalOpen && <div className="fixed inset-0 z-[70] grid place-items-center bg-[#071d35]/45 p-4 backdrop-blur-sm" onMouseDown={(event)=>event.target===event.currentTarget&&setModalOpen(false)}><div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-7"><div className="flex items-start justify-between"><div><h2 id="modal-title" className="text-xl font-semibold text-[#102c4c]">Créer un nouveau projet</h2><p className="mt-1 text-sm text-[#7c8998]">Ajoutez les premières informations du projet.</p></div><button onClick={()=>setModalOpen(false)} className="grid h-8 w-8 place-items-center rounded-md bg-[#f1f4f7] text-xl text-[#718092]" aria-label="Fermer">×</button></div><form onSubmit={submitProject} className="mt-6 space-y-4"><label className="block text-xs font-medium text-[#526175]">Nom du projet<input required placeholder="Ex. Refonte du site" className="mt-2 h-11 w-full rounded-lg border border-[#d9e0e8] px-3 text-sm outline-none focus:border-[#7aa5f6]"/></label><label className="block text-xs font-medium text-[#526175]">Client<input required placeholder="Nom du client" className="mt-2 h-11 w-full rounded-lg border border-[#d9e0e8] px-3 text-sm outline-none focus:border-[#7aa5f6]"/></label><div className="grid grid-cols-2 gap-3"><label className="block text-xs font-medium text-[#526175]">Échéance<input type="date" className="mt-2 h-11 w-full rounded-lg border border-[#d9e0e8] px-3 text-sm outline-none focus:border-[#7aa5f6]"/></label><label className="block text-xs font-medium text-[#526175]">Budget<input type="number" placeholder="0 €" className="mt-2 h-11 w-full rounded-lg border border-[#d9e0e8] px-3 text-sm outline-none focus:border-[#7aa5f6]"/></label></div><div className="flex justify-end gap-2 pt-3"><button type="button" onClick={()=>setModalOpen(false)} className="rounded-lg border border-[#d9e0e8] px-4 py-2.5 text-sm">Annuler</button><button type="submit" className="rounded-lg bg-[#286fe8] px-4 py-2.5 text-sm font-semibold text-white">Créer le projet</button></div></form></div></div>}

    {created && <div role="status" className="fixed bottom-5 right-5 z-[80] rounded-lg bg-[#102c4c] px-5 py-3 text-sm font-medium text-white shadow-xl">✓ Projet créé avec succès</div>}
  </div>;
}
