import Wob from "../../../static/img/icons/wob.svg"
import Gob from "../../../static/img/icons/gob.svg";


export default function ServiceCard({
  index,
  titleTop,
  titleBottom,
  img,
  alt,
  link,
}) {
  return (
    <div className="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]">
      <div
        className={`h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] ${
          index === 1
            ? "bg-white"
            : index === 2
            ? "bg-green"
            : "bg-dark text-white"
        }`}>
        <h3 className={`flex flex-col col-span-2 lg:col-span-1`}>
          <span
            className={`w-[fit-content] ${
              index === 1 ? "greenhead" : "whitehead"
            }`}>
            {titleTop}
          </span>
          <span
            className={`w-[fit-content] ${
              index === 1 ? "greenhead" : "whitehead"
            }`}>
            {titleBottom}
          </span>
        </h3>
        <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
          <img
            src={img}
            alt={alt}
            className="h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover"
          />
        </picture>
        <div className="flex items-end">
          <a href={link} className="flex items-center gap-3.5">
            {/* <img src={index === 1 || index === 2 ? Gob : Wob} alt={alt} /> */}
            <span className="hidden sm:block">Service Info</span>
          </a>
        </div>
      </div>
    </div>
  );
}

