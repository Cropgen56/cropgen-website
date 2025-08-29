export default function FAQ() {
    return (
        <section
            className="relative bg-cover bg-center min-h-[700px]" // Increased height
            style={{ backgroundImage: "url('/assets/image/faq/faq2.png')" }}
        >
            {/* Transparent overlay (lighter now) */}
            <div className="bg-black bg-opacity-10 w-full h-full">
                <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10 text-white">

                    {/* Left Section: Text */}
                    <div className="flex-1">
                        <h1 className="text-5xl font-[700] md:text-[100px] faq-font leading-tight mb-6">
                            Frequently Ask <br /> Questions
                        </h1>
                        <img src="/assets/image/faq/line.png" alt="line"  />
                        <p className=" text-lg md:text-[32px] font-[400] font-[gadugi]  md:leading-[1.2] mt-6 ">
                            Discover answers to the most common questions <br /> about CropGen’s crop
                            monitoring and precision <br /> farming tools.
                        </p>

                        <div className="flex-1 flex flex-col items-start md:items-end mt-20 md:mt-0 ">
                            <div className="flex flex-col justify-end gap-2">
                                <h2 className="text-xl md:text-[30px] font-bold font-[700] faq-font mb-4">
                                How Can we Help you?
                            </h2>
                            <div className="w-full max-w-md flex items-center bg-white rounded-md shadow-lg overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Type in your search"
                                    className="flex-grow px-4 py-3 text-gray-700 outline-none md:w-[600px] w-auto"
                                />
                                <button className="px-4 py-3 bg-green-500 text-white hover:bg-green-600">
                                    🔍
                                </button>
                            </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Section: Search Box */}


                </div>
            </div>

        </section>


    );
}