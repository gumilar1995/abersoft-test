import Card from "@/components/Card";
import { summaries } from "@/contants/services";

export default function ServiceSummaries() {
  return (
    <section className="container grid grid-cols-3 py-8">
      {summaries.map((summary, i) => (
        <div key={i} className="flex items-center justify-center">
          <Card imgSrc={summary.imgSrc}>
            <h2 className="font-bold text-3xl text-abersoft-blue">
              {summary.title}
            </h2>
            <p className="font=medium">{summary.description}</p>
          </Card>
        </div>
      ))}
    </section>
  );
}
