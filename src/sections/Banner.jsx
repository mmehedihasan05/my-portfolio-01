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
        <div className="pt-16 flex bg-blue-950 rounded-md px-24 h-[80vh] justify-between">
            <div className="space-y-16 flex flex-col justify-center">
                <div className="space-y-4">
                    <p className="text-[#eaeaea] text-3xl">Hey! This is</p>
                    <h3 className="text-highlight text-5xl font-bold">Md. Mehedi Hasan</h3>
                    <p className="text-[#d8d8d8] text-xl">MERN Stack Developer</p>
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
            <div className="">
                <img
                    src="/src/Assets/dp transparent.png"
                    className="h-[100%] w-auto object-bottom object-contain"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;
