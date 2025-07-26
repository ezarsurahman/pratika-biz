
"use client"
import { useState } from "react"
import { CardMission } from "../components/CardMission"
import { VisionMission } from "./constant"


export const VisionMissionSection = () => {
    const [hoverId,setHoverId] = useState<string>("")
    const mouseOver = (id:string) => {
        console.log(id)
        setHoverId(id)
    }

    const mouseLeave= (id:string) => {
        setHoverId("")
    }

    return (
        <div className="grid grid-rows-3 gap-4 md:grid-rows-none md:h-[41.875rem] md:grid-cols-3 md:gap-[3.8rem] mx-[16px] md:mx-4 justify-center items-center h-full">
            <CardMission 
                id="1"
                title={VisionMission[0].title}
                list={VisionMission[0].items}
                onmouseover={mouseOver}
                onmouseleave={mouseLeave}
                image={VisionMission[0].image}
                bg="#044B7F"
                className={`blur-[2px] md:blur-none ${hoverId == "2" || hoverId == "3" ? "md:blur-[2px]": 
                    hoverId == "1" ? "blur-none" : ""}`}

            />
            <CardMission 
                id="2"
                title={VisionMission[1].title}
                list={VisionMission[1].items}
                onmouseover={mouseOver}
                onmouseleave={mouseLeave}
                image={VisionMission[1].image}
                bg="#CCE7F7"
                className={`blur-[2px] md:blur-none ${hoverId == "1" || hoverId == "3" ? "md:blur-[2px]": 
                    hoverId == "2" ? "blur-none" : ""}`}

            />
            <CardMission 
                id="3"
                title={VisionMission[2].title}
                list={VisionMission[2].items}
                onmouseover={mouseOver}
                onmouseleave={mouseLeave}
                image={VisionMission[2].image}
                bg="#044B7F"
                className={`blur-[2px] md:blur-none ${hoverId == "2" || hoverId == "1" ? "md:blur-[2px]": 
                    hoverId == "3" ? "blur-none" : ""}`}

            />
        </div>
    )
}