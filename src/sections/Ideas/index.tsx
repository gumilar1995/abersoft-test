import Content from "@/components/Content";

export default function Ideas() {
  return (
    <section className="container py-8">
      <Content center sideImageSrc="/images/jelly_bear_svg.png">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-bold text-5xl text-abersoft-blue">
            We make your ideas become{" "}
            <span className="text-abersoft-text">reality.</span>
          </h1>
          <h3>
            Whether or not you are an established company or a new start up, we
            will create the solution you need.
          </h3>
        </div>
      </Content>
    </section>
  );
}
