import data from "../data";

export default function Testimonial() {
  return (
    <div className="w-full h-auto  bg-mygreen">
      <h2 className="text-center text-4xl  text-myblack font-semibold pt-5"><span className="text-mywhite">T</span>estimonials</h2>

      <div className="flex px-5 py-20  overflow-x-scroll scroll ">
        {data.testimonialData.map((t) => (
          <div className="flex-none carousel-item w-[250px] h-auto p-5 mx-3 bg-mygray  rounded-sm">
            <div className="flex justify-between my-2">
              <div>
                <img
                  alt="useravatar"
                  src={t.img}
                  className="w-[50px] h-[50px] rounded-md"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-myorange">{t.name}</h3>
              </div>
            </div>
            <p className="text-white ">{t.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
