import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Iframe from "react-iframe";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
const Projects = () => {
    return (
        <div className="bg-white px-4 py-8 shadow-lg space-y-4">
            <h2 className="text-4xl font-semibold  border-l-4 border-[--text-highlight] text-[--text-primary] px-2">
                Projects
            </h2>

            <div className="space-y-4 ">
                <Tabs>
                    <TabList>
                        <Tab>TechNest</Tab>
                        <Tab>AssetFlow</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-2 gap-16">
                            <div className=" ml-12 shadow-lg">
                                <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src="/src/Assets/Technest (1).png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/src/Assets/Technest (2).png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/src/Assets/Technest (3).png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/src/Assets/Technest (4).png" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl text-highlight font-semibold">TechNest</h2>
                                <div className="flex gap-4">
                                    <a
                                        className="border-b border-[--text-secondary] hover:border-[--text-highlight] text-secondary hover:font-medium hover:text-[--text-highlight]"
                                        href="https://technest-blog.web.app/"
                                    >
                                        Live Site
                                    </a>
                                    <a
                                        className="border-b border-[--text-secondary] hover:border-[--text-highlight] text-secondary hover:font-medium hover:text-[--text-highlight]"
                                        href="https://github.com/mmehedihasan05/TechNest-Blog-Client"
                                    >
                                        Github - Client Side
                                    </a>
                                    <a
                                        className="border-b border-[--text-secondary] hover:border-[--text-highlight] text-secondary hover:font-medium hover:text-[--text-highlight]"
                                        href="https://github.com/mmehedihasan05/TechNest-Blog-Server"
                                    >
                                        Github - Server Side
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold">Technologies: </span>
                                    React, Express, MongoDB, Tailwind.
                                </div>
                                <div>
                                    <span className="font-semibold">Features: </span>

                                    <ul className="list-disc list-inside space-y-4">
                                        <li className="pl-8">
                                            Secure access and personalized features through JWT
                                            authentication.
                                        </li>
                                        <li className="pl-8">
                                            Utilized user preferences to recommend personalized blog
                                            posts, enhancing user engagement and satisfaction.
                                        </li>
                                        <li className="pl-8">
                                            Enhanced user experience by implementing infinite scroll
                                            using Tanstack Query, ensuring seamless and efficient
                                            content navigation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-2 gap-16">
                            <div className=" ml-12 shadow-lg">
                                <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src="/src/Assets/Assetflow (1).png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/src/Assets/Assetflow (2).png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/src/Assets/Assetflow (3).png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/src/Assets/Assetflow (4).png" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl text-highlight font-semibold">AssetFlow</h2>
                                <div className="flex gap-4">
                                    <a
                                        className="border-b border-[--text-secondary] hover:border-[--text-highlight] text-secondary hover:font-medium hover:text-[--text-highlight]"
                                        href="https://a12-assetflow.web.app/"
                                    >
                                        Live Site
                                    </a>
                                    <a
                                        className="border-b border-[--text-secondary] hover:border-[--text-highlight] text-secondary hover:font-medium hover:text-[--text-highlight]"
                                        href="https://github.com/mmehedihasan05/AssetFlow-Client"
                                    >
                                        Github - Client Side
                                    </a>
                                    <a
                                        className="border-b border-[--text-secondary] hover:border-[--text-highlight] text-secondary hover:font-medium hover:text-[--text-highlight]"
                                        href="https://github.com/mmehedihasan05/AssetFlow-Server"
                                    >
                                        Github - Server Side
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold">Technologies: </span>
                                    React, Express, MongoDB, Tailwind, MUI
                                </div>
                                <div>
                                    <span className="font-semibold">Features: </span>

                                    <ul className="list-disc list-inside space-y-4">
                                        <li className="pl-8">
                                            Implementation of JWT authentication ensures secure
                                            access to the platform.
                                        </li>
                                        <li className="pl-8">
                                            Streamlined asset requests and approvals for efficient
                                            management.
                                        </li>
                                        <li className="pl-8">
                                            Utilized Tailwind and Material UI in the React and
                                            Express app for a user-friendly design .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Projects;
