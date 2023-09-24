import Content from "@/components/Content";

export default function Solution() {
  return (
    <section className="container py-12">
      <Content center sideImageSrc="/images/solution_image.png">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-bold text-2xl text-abersoft-blue lg:text-5xl ">
            We help you build the tech solutions of the future.
          </h1>
          <h3>
            When you need help with development or design we are here to create
            the best solutions for you. With over a decade of experience in
            software development.
          </h3>
        </div>
      </Content>
    </section>
  );
}
