export default function Hero() {
  return (
    <>
      <section className="px-5 flex justify-center overflow-hidden lg:block">
        <div className="w-full max-w-[1280px] mx-auto">
          <section id="home">
            <div className="grid grid-cols-1 grid-template md:grid-cols-2 md:grid-rows-1 mt-[135px]">
              <div className="flex flex-col w-full lg:w-[66.5%]">
                <h1
                  className="text-[2.7rem]"
                  style={{
                    fontSize: "2.7rem",
                  }}>
                  Navigating the digital landscape for success
                </h1>
              </div>
              <picture className="row-span-1 md:row-span-3">
                <img
                  src="/img/hero-pic.png"
                  alt="Hero Ilustration"
                  loading="eager"
                />
              </picture>
              <div className="w-full lg:w-[66.5%]">
                <p className="my-[35px]">
                  Our digital marketing agency helps businesses grow and succeed
                  online through a range of services including SEO, PPC, social
                  media marketing, and content creation.
                </p>
                <button className="btn-primary w-full md:w-auto">
                  Book a consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
