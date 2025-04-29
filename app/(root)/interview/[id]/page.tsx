import React from 'react'
import {getInterviewById} from "@/lib/actions/general.action";
import {redirect} from "next/navigation";
import Image from "next/image";
import {getRandomInterviewCover} from "@/lib/utils";
import DisplayTechIcon from "@/components/DisplayTechIcon";
import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.action";

const Page =async ({params}:RouteParams) => {
    const {id} = await params;
    const interviews = await getInterviewById(id);
    const user = await getCurrentUser();

    if(!interviews) redirect('/')
    return (
       <>
           <div className="flex flex-row gap-4 justify-between">
               <div className="flex flex-row gap-4 items-center max-sm:flex-col">
                   <div className="flex flex-row gap-4 items-center">
                       <Image src={getRandomInterviewCover()} alt="cover-image" width={40} height={40} className="rounded-full object-cover size-[40px]" />
                       <h3 className="capitalize">{interviews.role} Inverview</h3>
                   </div>
                   <DisplayTechIcon techStack={interviews.techstack}/>
               </div>

               <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">{interviews.type}</p>
           </div>
           <Agent
               userName={user?.name}
               type={user?.id}
               interviewId={id}
               type="interview"
               questions={interviews.questions}
               />
       </>
    )
}
export default Page
