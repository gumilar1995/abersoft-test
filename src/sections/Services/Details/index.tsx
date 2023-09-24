import Card from "@/components/Card";
import { details } from "@/contants/services";

export default function ServiceDetails() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
      {details.map((detail, i) => (
        <div key={i} className="flex items-center justify-center">
          <Card size="medium">
            <h2 className="font-bold text-3xl text-abersoft-blue">
              {detail.title}
            </h2>
            <p className="font-bold">{detail.subtitle}</p>
            <p className="font=medium">{detail.description}</p>
          </Card>
        </div>
      ))}
    </section>
  );
}
