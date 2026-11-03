import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, FileText, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { transparencyDocuments } from "@/data/transparency-documents";

export const metadata: Metadata = {
  title: "Transparency | Izra Smile Foundation",
  description:
    "Official transparency and accountability documents for Izra Smile Foundation, including legal registrations and public records.",
};

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main id="main-content">
        <section className="overflow-hidden bg-[#071827] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-orange-300">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Trust & Accountability
              </p>

              <h1 className="mt-8 font-display text-5xl leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5rem]">
                Transparency You Can Verify.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                We believe trust is earned through openness. Browse our legal registrations, tax
                certifications, and audit documents — all in one place.
              </p>
            </div>
          </div>
        </section>

        <section id="documents" className="bg-slate-50/70 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-sky-700">
                Our Documents
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-[-0.05em] text-slate-900 sm:text-5xl">
                Our Documents
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Access our official records, certifications, and reports.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {transparencyDocuments.map((document) => (
                <article
                  key={document.id}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_52px_rgba(14,63,104,0.12)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-800">
                      {document.category}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      {document.fileType}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                    {document.title}
                  </h3>

                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{document.description}</p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={document.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${document.title} in a new tab`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                    >
                      View Document
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>

                    <Link
                      href={document.fileUrl}
                      download={document.fileName}
                      aria-label={`Download ${document.title} PDF`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:text-sky-800"
                    >
                      Download PDF
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
