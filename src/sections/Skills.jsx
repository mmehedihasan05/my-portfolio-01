import { Html5Original } from "devicons-react";
import { Css3OriginalWordmark } from "devicons-react";
import { TailwindcssPlain } from "devicons-react";
import { MaterialuiPlain } from "devicons-react";
import { FirebasePlain } from "devicons-react";
import { JavascriptOriginal } from "devicons-react";
import { ExpressOriginal } from "devicons-react";
import { NodejsOriginal } from "devicons-react";
import { MongodbPlainWordmark } from "devicons-react";

const Skills = () => {
    return (
        <div className="bg-white px-4 py-8 shadow-lg space-y-4">
            <h2 className="text-4xl font-semibold  border-l-4 border-[--text-highlight] text-[--text-primary] px-2">
                Skills
            </h2>
            {/* <div className="flex flex-col gap-4 w-[400px] mx-auto">
                <img src="/src/Assets/skills 1.png" alt="" />
                <img src="/src/Assets/skills 2.png" alt="" />
            </div> */}
            <div className="space-y-4 mx-auto w-fit">
                <div className="flex gap-8">
                    <Html5Original size="56" />
                    <Css3OriginalWordmark size="56" />
                    <TailwindcssPlain size="56" />
                    <MaterialuiPlain size="56" />
                    <FirebasePlain size="56" />
                </div>
                <div className="flex gap-8 w-fit mx-auto">
                    <JavascriptOriginal size="56" />
                    <ExpressOriginal size="56" />
                    <NodejsOriginal size="56" />
                    <MongodbPlainWordmark size="56" />
                </div>
            </div>
        </div>
    );
};

export default Skills;
