import { countries } from "@/data/mockData";

const CountriesGrid = () => (
  <section className="py-10">
    <div className="container">
      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
        Browse by Country
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {countries.map((c) => (
          <button
            key={c.code}
            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
          >
            <span className="text-2xl">{c.flag}</span>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-full text-center">
              {c.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default CountriesGrid;
