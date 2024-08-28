export default function Contact() {
  return (
    <>
      <section className="px-5 flex justify-center overflow-hidden lg:block mt-[90px]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-10 mb-20 sm:flex-row">
            <h2 className="greenhead text-center sm:text-left">Contact Us</h2>
            <p className="w-auto text-center sm:text-left sm:w-[580px]">
              Connect with Us: Let's Discuss Your Digital Marketing Needs
            </p>
          </div>
          <div className="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden">
            <form className="bg-white sm:p-6 h-full w-full lg:max-w-lg">
              <div className="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10">
                <div className="flex items-center gap-[14px]">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    className="form-checkbox text-black"
                  />
                  <label className="text-black">Say Hi</label>
                </div>
                <div className="flex items-center gap-[14px]">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox2"
                    className="form-checkbox text-black"
                  />
                  <label className="flex items-center text-black">
                    Get a Quote
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-black mb-2">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-black mb-2">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-black mb-2">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"></textarea>
              </div>

              <button
                type="submit"
                name="submit"
                className="btn-primary w-full">
                Send
              </button>
            </form>
            <picture className="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block">
              <img src="/img/pics/contact-pic.png" alt="decor" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}
