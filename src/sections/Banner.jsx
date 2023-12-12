const Banner = () => {
    const handleResumeDownload = () => {
        console.log("clicked");
        const pdfUrl = "/src/Assets/resume.pdf";

        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };
    return (
        <div
            className="pt-8 bg-blue-950 rounded-md px-24 
       grid grid-cols-2 gap-x-4 h-fit justify-items-end"
        >
            <div className=" space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                    <p className="text-[#eaeaea] text-3xl">Hey! This is</p>
                    <h3 className="text-highlight text-5xl font-bold">Md. Mehedi Hasan</h3>
                    <p className="text-[#d8d8d8] text-xl">MERN Stack Developer</p>
                    <p className="text-[#b2b2b2]">
                        Aspiring MERN Stack Developer with a background in accounting, skilled in
                        crafting efficient code and collaborative teamwork. Passionate about merging
                        finance and technology. I seek dynamic roles to contribute to innovative
                        projects. I aspire to enhance my expertise through ongoing learning.
                    </p>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            handleResumeDownload();
                        }}
                    >
                        Download Resume
                    </button>
                </div>
            </div>

            <img
                src="/src/Assets/dp transparent.png"
                className="h-[80vh] w-auto object-contain object-bottom"
                alt=""
            />
        </div>
    );
};

export default Banner;
