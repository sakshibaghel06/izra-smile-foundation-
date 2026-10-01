import { Reveal } from "@/components/Reveal";

export function ImpactSection() {
  return (
    <section id="impact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Our impact</p>
            <h2 className="text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Impact is more than numbers.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <p className="rounded-[1.7rem] border border-white/10 bg-white/5 p-7 text-base leading-7 text-slate-200 backdrop-blur-sm">
            Verified impact figures have not been provided.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
