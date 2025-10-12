import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import { useCallback } from "react";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESUME-ANALYSER" },
    { name: "description", content: "Smart feedback for your Dream Job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
<section className="main-section">
  <div className="page-heading">
    <h1>Track Your Applications & Resume Ratings</h1>
    <h2>Check AI-powered feedback and get your Application REVIEWED.</h2>
  </div>
</section>
{resumes.length >0 && (
  <div className="resume-section">
{ resumes.map((resume)=> (
  <ResumeCard key={resume.id} resume={resume} />
))}
</div>
)}


  </main>
}
