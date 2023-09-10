const Pricing = () => {
  return (
    <section className="mt-10 xl:mt-28 px-2 md:px-6">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-[120px] bg-gray-3 px-6 md:px-16 py-12 rounded-40">
        <h1 className="text-white-1 extrabold-28 md:extrabold-48 w-full xl:w-[50%]">
          There are systems that offer nearby listings and <br />
          <span className="text-gray-2">competitive prices</span>
        </h1>

        <article className="flex gap-4 md:gap-12">
          <div className="flex flex-col justify-center gap-3">
            <h1 className="text-white-1 semibold-86">
              99 <span className="text-blue-3">%</span>
            </h1>
            <p className="normal-18 text-gray-2">
              Accurate data based on our system
            </p>
          </div>
          <div className="border-l-2 border-gray-4 h-24 mt-6 md:mt-16" />
          <div className="flex flex-col justify-center gap-3">
            <h1 className="text-white-1 semibold-86">
              540 <span className="text-blue-3">k+</span>
            </h1>
            <p className="normal-18 text-gray-2">
              Users who are actively using the application
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
