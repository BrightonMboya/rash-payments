import ServiceCard from "./ServiceCard";

export default function Services() {
  const cards = [
    {
      index: 1,
      titleTop: "Search Engine",
      titleBottom: "Optimization",
      img: "/img/pics/card-pic1.png",
      alt: "SEO",
      link: "https://google.com",
    },
    {
      index: 2,
      titleTop: "Pay-per-click",
      titleBottom: "advertising",
      img: "img/pics/card-pic2.png",
      alt: "SEO",
      link: "https://google.com",
    },
    {
      index: 3,
      titleTop: "Social Media",
      titleBottom: "Marketing",
      img: "img/pics/card-pic3.png",
      alt: "SEO",
      link: "https://google.com",
    },
    {
      index: 1,
      titleTop: "Email",
      titleBottom: "Marketing",
      img: "img/pics/card-pic4.png",
      alt: "SEO",
      link: "https://google.com",
    },
    {
      index: 2,
      titleTop: "Content",
      titleBottom: "Creation",
      img: "img/pics/card-pic5.png",
      alt: "SEO",
      link: "https://google.com",
    },
    {
      index: 3,
      titleTop: "Analytics and",
      titleBottom: "Tracking",
      img: "img/pics/card-pic6.png",
      alt: "SEO",
      link: "https://google.com",
    },
  ];
  const description =
    "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include";
  return (
    <>
      <section className="px-5 flex justify-center overflow-hidden lg:block ">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="mt-[140px] mb-5">
            <div className="flex flex-col items-center gap-10 mb-20 sm:flex-row">
              <h2 className="greenhead text-center sm:text-left">Services</h2>
              <p className="w-auto text-center sm:text-left sm:w-[580px]">
                {description}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10">
              {cards.map((card) => (
                <ServiceCard
                  index={card.index}
                  titleTop={card.titleTop}
                  titleBottom={card.titleBottom}
                  img={card.img}
                  alt={card.alt}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
