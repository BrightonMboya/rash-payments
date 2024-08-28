export default function Cases() {
  const cards = [
    {
      index: 0,
      title:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "https://google.com",
    },
    {
      index: 1,
      title:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "https://google.com",
    },
    {
      index: 1,
      title:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "https://google.com",
    },
  ];
  return (
    <>
      <section className="px-5 flex justify-center overflow-hidden lg:block">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-10 mb-20 sm:flex-row">
            <h2 className="greenhead text-center sm:text-left">Case Studies</h2>
            <p className="w-auto text-center sm:text-left sm:w-[580px]">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between rounded-[45px] p-1">
            {cards.map((card) => (
              <div className="rounded-[45px]">
                <div className="flex p-[60px] h-full bg-dark text-white rounded-[45px] m-[1px]">
                  <div className="flex flex-col gap-5">
                    <p>{card.title}</p>
                    <a
                      href={card.link}
                      className="flex items-center gap-[15px]">
                      <span className="text-green">Case Info</span>
                      <picture>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570543C5.86854 -0.157358 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                            fill="#B9FF66"
                          />
                        </svg>
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
