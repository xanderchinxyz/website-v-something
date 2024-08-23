import Navbar from "@/components/Navbar";

export default function Work() {

    return (
        <main className="md:p-10 p-4 md:flex flex-col md:flex-row md:justify-center h-screen w-full">
            <Navbar/>
            <div className="md:overflow-y-scroll flex flex-col items-center space-y-8 pt-4 md:w-[70%]">
                <h3 className="font-bold text-2xl">Work</h3>
                <div className="w-[85%]">
                    <h3 className="font-bold text-lg">Machine Learning Consultant @ Condominum Authority of Ontario</h3>
                    <p className="text-sm italic mb-1">May 2024 - Present</p>
                    <p className="mb-1 text-sm">
                        Enhancing categorization of survey responses and qualitative feedback analysis with natural language processing 
                        and text embeddings using Python.
                    </p>
                    <div className="flex flex-wrap mb-4 items-center">
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Python</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>NLP</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Text Embeddings</div>
                    </div>
                </div>

                <div className="w-[85%]">
                    <h3 className="font-bold text-lg">Undergraduate Researcher @ Diller Microrobotics Lab</h3>
                    <p className="text-sm italic mb-1">May 2024 - Present</p>
                    <p className="mb-1 text-sm">
                        Received an NSERC Award to do research under the supervision of Prof. Eric Diller where I am currently working on 
                        designing instruments to enable bimanual magnetic control of microrobotic tools for surgery.
                    </p>
                    <div className="flex flex-wrap mb-4 items-center">
                        <div className={"bg-color-3 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>3D Printing (Resin and PLA)</div>
                        <div className={"bg-color-3 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>CAD (SolidWorks)</div>
                    </div>
                </div>

                <div className="w-[85%]">
                    <h3 className="font-bold text-lg">Undergraduate Researcher @ Free Appropriate Sustainable Technology Lab</h3>
                    <p className="text-sm italic mb-1">Nov 2022 - Apr 2024</p>
                    <p className="mb-1 text-sm">
                        <ul className="list-disc pl-6">
                            <li>
                                Designed a wireless protocol and web user interface aptly named <a href="https://github.com/FHafting/BREAD-Local-Software" className="underline">Butter 🡵</a> for an open-source data acquisition and automation device called BREAD.
                            </li>
                            <li>
                                Received a USRI Award for the Summer of 2023. Designed an <a href="https://osf.io/erbyp/" className="underline">open-source packing algorithm 🡵</a> to tile 
                                as many building-integrated photovoltaics (BIPV) as possible on any arbitrarily shaped object or building. 
                                This involved the use of complex packing algorithms, computational geometry, Python, and Blender.
                            </li>
                            <li>
                                Researched and developed a cheaper Recyclebot extruder that converts plastic pellets into 3D printer filament under the supervision of Dr. Joshua Pearce.
                            </li>
                        </ul>
                    </p>
                    <div className="flex flex-wrap mb-4 items-center">
                        <div className={"bg-color-1 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>ESP32</div>
                        <div className={"bg-color-1 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Stepper Motors</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>C++</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Python</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Wi-Fi Protocols</div>
                        <div className={"bg-color-3 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>CAD</div>
                        <div className={"bg-color-3 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>3D Printing</div>
                        <div className={"bg-color-3 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Blender</div>
                    </div>
                </div>

                <div className="w-[85%]">
                    <h3 className="font-bold text-lg">Data Analyst Intern @ Condominum Authority of Ontario</h3>
                    <p className="text-sm italic mb-1">Jun 2023 - Aug 2023 | Dec 2023 - Jan 2024</p>
                    <p className="mb-1 text-sm">
                        Wrote Python scripts to classify survey responses by modifying the BERT LLM text classifier using TensorFlow,
                        performed data cleaning and extraction of survey responses using Python and Pandas,
                        and created interactive maps and statistics of all Condominium Corporations in Ontario using Python, Pandas, Matplotlib and Excel.
                    </p>
                    <div className="flex flex-wrap mb-4 items-center">
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Python</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>LLMs</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Excel</div>
                    </div>
                </div>

                <div className="w-[85%]">
                    <h3 className="font-bold text-lg">Research Assistant @ University Health Network</h3>
                    <p className="text-sm italic mb-1">Jun 2021 - Sep 2022</p>
                    <p className="mb-1 text-sm">
                        Designed and built a <a href="https://youtu.be/I03g0Dz7DDU" target="_blank" className="underline">wireless voice-controlled 3D-printed syringe pump 🡵</a> for developing 
                        countries in collaboration with an anesthesiologist. Made the hardware, coded the 
                        microprocessor controller, and developed the mobile app with React Native
                    </p>
                    <div className="flex flex-wrap mb-4 items-center">
                        <div className={"bg-color-1 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>ESP32</div>
                        <div className={"bg-color-1 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Stepper Motors</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>C++</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>React Native</div>
                        <div className={"bg-color-2 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>Speech To Text</div>
                        <div className={"bg-color-3 text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>3D Printing</div>
                    </div>
                </div>
            </div>
        </main>
    )
}