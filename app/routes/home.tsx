import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
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
  {resumes.length >0 && (
  <div className="resume-section flex flex-wrap justify-center  gap-10 w-full ">
{ resumes.map((resume)=> (
  <ResumeCard key={resume.id} resume={resume} />
))}
</div>
)}
</section>
 </main>
}
