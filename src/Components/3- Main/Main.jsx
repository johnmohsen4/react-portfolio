import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);
    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);
        const newArr1 = myProjects.filter((item) => {
            const ZZZ = item.category.find((myItem) => {
                return myItem === buttonCategory;
            });
            return ZZZ === buttonCategory;
        });
        setArr(newArr1);
    };

    return (
        <main className="flex">
            <section className="left-section flex">
                <button
                    onClick={() => {
                        setcurrentActive("all");
                        setArr(myProjects);
                    }}
                    className={currentActive === "all" ? "active" : null}
                >
                    All Projects
                </button>
                <button
                    onClick={() => {
                        handleClick("css");
                    }}
                    className={currentActive === "css" ? "active" : null}
                >
                    HTML & CSS
                </button>
                <button
                    onClick={() => {
                        handleClick("poster");
                    }}
                    className={currentActive === "poster" ? "active" : null}
                >
                    Posters
                </button>
                <button
                    onClick={() => {
                        handleClick("cover");
                    }}
                    className={currentActive === "cover" ? "active" : null}
                >
                    Covers
                </button>
                <button
                    onClick={() => {
                        handleClick("wallpaper & lockscreen");
                    }}
                    className={
                        currentActive === "wallpaper & lockscreen" ? "active" : null
                    }
                >
                    Wallpapers and Lock Screen
                </button>
                <button
                    onClick={() => {
                        handleClick("retouch");
                    }}
                    className={currentActive === "retouch" ? "active" : null}
                >
                    Retouch
                </button>
            </section>
            <section className="flex right-section">
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{type : "spring",damping: 8, stiffness: 100}}
                                key={item.imgPath} className="card">
                                <img width={280} className="flex" src={item.imgPath} alt="" />
                                <div style={{ width: "270px" }} className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="sub-title">{item.projectParagraph}</p>
                                    <div className="flex icons">
                                        <div style={{ gap: "10px" }} className="flex">
                                            <a className="icon-link"></a>
                                            <a className="icon-github"></a>
                                        </div>
                                        <a className="link flex" href="">
                                            More
                                            <span
                                                style={{ alignSelf: "end" }}
                                                className="icon-long-arrow-right"
                                            ></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </section>
        </main>
    );
};

export default Main;
