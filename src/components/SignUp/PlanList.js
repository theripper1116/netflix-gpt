const PlanList = () => {
  return (
    <div className="mx-20 my-10">
      <br />
      <p className="text-sm">STEP 2 OF 3</p>
      <p className="text-bold text-4xl">Choose the plan that’s right for you</p>
      <br />
      <br />
      <div className="flex">
        <form className="border-2 w-3/12 rounded-xl cursor-pointer">
          <p className="p-10 bg-netflix-plan-chooser-color text-white font-bold rounded-xl m-5">
            Premium
            <br />
            4k + HDR
          </p>
          <p className="ml-10">
            Monthly Price <br />
            ₹649
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Video and Sound Quality <br />
            Best
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Resolution <br />
            4K (Ultra HD) + HDR
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Supported Devices <br />
            TV, computer, mobile phone, tablet
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Devices your household can watch at the same time <br />4
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10 mb-4">
            Download devices <br />6
          </p>
        </form>
        <form className="border-2 w-3/12 rounded-xl ml-2 cursor-pointer">
          <p className="p-10 bg-netflix-plan-chooser-color text-white font-bold rounded-xl m-5">
            Standard
            <br />
            1080p
          </p>
          <p className="ml-10">
            Monthly Price <br />
            ₹499
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Video and Sound Quality <br />
            Great
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Resolution <br />
            1080p (Full HD)
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Supported Devices <br />
            TV, computer, mobile phone, tablet
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Devices your household can watch at the same time <br />2
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10 mb-4">
            Download devices <br />2
          </p>
        </form>
        <form className="border-2 w-3/12 rounded-xl ml-2 cursor-pointer">
          <p className="p-10 bg-netflix-plan-chooser-color text-white font-bold rounded-xl m-5">
            Basic
            <br />
            720p
          </p>
          <p className="ml-10">
            Monthly Price <br />
            ₹199
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Video and Sound Quality <br />
            Good
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Resolution <br />
            720p (HD)
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Supported Devices <br />
            TV, computer, mobile phone, tablet
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Devices your household can watch at the same time <br />1
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10 mb-4">
            Download devices <br />1
          </p>
        </form>
        <form className="border-2 w-3/12 rounded-xl ml-2 cursor-pointer">
          <p className="p-10 bg-netflix-plan-chooser-color text-white font-bold rounded-xl m-5">
            Mobile
            <br />
            480p
          </p>
          <p className="ml-10">
            Monthly Price <br />
            ₹149
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Video and Sound Quality <br />
            Fair
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Resolution <br />
            480p
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Supported Devices <br />
            Mobile phone, tablet
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10">
            Devices your household can watch at the same time <br />1
          </p>
          <p className="border-2 mb-4 m-5"></p>
          <p className="ml-10 mb-4">
            Download devices <br />1
          </p>
        </form>
      </div>
      <div>
        <p className="text-sm mt-6 opacity-80">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our Terms of Use for more details.
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </p>
      </div>
      <button className="bg-netflix-red text-white px-48 py-6 mt-8 ml-[33%] font-bold text-xl">Next</button>
    </div>
  );
};

export default PlanList;
