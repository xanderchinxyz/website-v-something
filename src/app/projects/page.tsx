import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Projects() {

    const projects_fav = [
        {
            title: "Voice Assistant Camera Wearable",
            description: `
                Turn any glasses into AI-powered smart glasses with a voice assistant using a local multimodal large language model, 
                Groq with RAG, and VOSK speech recognition model.
            `,
            href: "https://github.com/xanderchinxyz/Voice-Assistant-Camera-Wearable",
            tags: [
                {color: "bg-color-1", tag: "XIAO ESP32 S3"},
                {color: "bg-color-1", tag: "THT Soldering"},
                {color: "bg-color-2", tag: "Python"},
                {color: "bg-color-2", tag: "Bluetooth Low Energy"},
                {color: "bg-color-2", tag: "Speech To Text"},
                {color: "bg-color-2", tag: "LLMs"},
                {color: "bg-color-3", tag: "3D Printing"},
                {color: "bg-color-3", tag: "CAD"},
            ],
            image: "/voice-assistant-camera-wearable.png",
        },
        {
            title: "LED Wall Part 2",
            description: `
                Optimized my custom protocol by transitioning to assembly which can now display the camera output 
                from a computer and allow screen sharing and drawing. This is also facilitated through several 
                Processing sketches and UART communication at 2 million bits per second. 
                I also stuck ping pong balls on top as diffusers.
            `,
            href: "https://youtu.be/1C1XGq-2Q_g",
            tags: [
                {color: "bg-color-1", tag: "Arduino"},
                {color: "bg-color-1", tag: "Logic Analyzer Device"},
                {color: "bg-color-2", tag: "Assembly"},
                {color: "bg-color-2", tag: "Processing (Java)"},
                {color: "bg-color-2", tag: "UART Protocol"},
                {color: "bg-color-3", tag: "Ping Pong Balls!"},
            ],
            image: "/led-wall-2.jpg",
        },
        {
            title: "LED Wall Part 1",
            description: `
                Built a lightweight LED Wall with 768 pixels and designed the PCBs to be modular, lightweight and cheap as possible. 
                Created custom register level parallel bit-banging protocols for the nescessary speed to program the LEDs with 
                an ATmega328P MCU without using a library. Made use of the Flash storage to display pictures, GIFs and cool patterns.
            `,
            href: "https://youtu.be/KatHkq3PDNg",
            tags: [
                {color: "bg-color-1", tag: "Arduino"},
                {color: "bg-color-2", tag: "C++"},
                {color: "bg-color-2", tag: "Low Level Register Manipulation"},
                {color: "bg-color-3", tag: "PCB Design"},
            ],
            image: "/led-wall-1.jpg",
        },
        {
            title: "EEG and EMG Headset",
            description: `
                Built a 2 channel electroencephalography (EEG) and electromyography (EMG) reader to "mind control" devices. Designed a PCB to amplify cognitive signals and attenuate noise, soldered SMT components, and wrote a Processing sketch to further filter the signal with an FFT algorithm and display the output.
            `,
            href: "https://youtu.be/Dr2lxEIa05U",
            tags: [
                {color: "bg-color-1", tag: "ESP32"},
                {color: "bg-color-1", tag: "Op-Amps"},
                {color: "bg-color-1", tag: "SMT Soldering"},
                {color: "bg-color-2", tag: "C++"},
                {color: "bg-color-2", tag: "Processing (Java)"},
                {color: "bg-color-2", tag: "FFT"},
                {color: "bg-color-3", tag: "PCB Design (SMT)"},
            ],
            image: "/emg-eeg.jpg",
        },
        {
            title: "4-bit Breadboard Computer Part 2",
            description: `
                The final custom 4-bit computer build from 1980's era TTL Integrated Circuits, coded in specific machine language. It executes 16 
                lines of code, capable of loading, adding, subtracting, storing, and reading memory, as well as
                a go-to command and conditional if zero commands.
            `,
            href: "https://youtu.be/fg3poC2dT2o",
            tags: [
                {color: "bg-color-1", tag: "Computer Architecture"},
                {color: "bg-color-1", tag: "TTL Integrated Circuits"},
                {color: "bg-color-1", tag: "Analog Circuits"},
                {color: "bg-color-2", tag: "Custom Machine Code"},
            ],
            image: "/led-wall-2.jpg",
        },
        {
            title: "4-bit Breadboard Computer Part 1",
            description: `
                The beginning of a 4-bit breadboard computer. The first part goes over the custom "Chumpanese" code to
                program the computer, the adjustable clock circuit, and the counter circuit to keep track and execute the 
                current instruction.
            `,
            href: "https://youtu.be/b5qDwCN9Q2c",
            tags: [
                {color: "bg-color-1", tag: "Computer Architecture"},
                {color: "bg-color-1", tag: "TTL Integrated Circuits"},
                {color: "bg-color-1", tag: "Analog Circuits"},
                {color: "bg-color-2", tag: "Custom Machine Code"},
            ],
            image: "/led-wall-2.jpg",
        },
        {
            title: "IR Nixie Clock",
            description: `
                A 4-digit nixie tube clock with alarm, timer, date, and temperature features controlled with an infrared remote. Programmed in C++ on a standalone ATmega328 IC. Designed a custom PCB in EAGLE and laser-cut acrylic in Adobe Illustrator.
            `,
            href: "https://youtu.be/nEOyhyJHx2M",
            tags: [
                {color: "bg-color-1", tag: "Arduino"},
                {color: "bg-color-1", tag: "Boost Converter"},
                {color: "bg-color-1", tag: "Infrared"},
                {color: "bg-color-1", tag: "THT Soldering"},
                {color: "bg-color-2", tag: "C++"},
                {color: "bg-color-3", tag: "PCB Design"},
            ],
            image: "/ir-nixie.jpg",
        },
        {
            title: "LiDAR Measurement Device",
            description: `
                A device that measures distance and models the surrounding room using LiDAR, servo motors, and an ESP32 programmed in C++.
                I also coded a Processing program in Java to display a 3D point cloud, perform measurements, and control the ESP32 with 
                Bluetooth.
            `,
            href: "https://youtu.be/frzUmAhQT3E",
            tags: [
                {color: "bg-color-1", tag: "ESP32"},
                {color: "bg-color-1", tag: "LiDAR"},
                {color: "bg-color-1", tag: "Servo Motors"},
                {color: "bg-color-2", tag: "C++"},
                {color: "bg-color-2", tag: "Processing (Java)"},
                {color: "bg-color-2", tag: "Bluetooth"},
                {color: "bg-color-3", tag: "PCB Design"},
            ],
            image: "/ir-nixie.jpg",
        },
    ]

    const projects_other = [
        {
            title: "LED Wall V2",
            description: `
                Updated the previous Ping Pong LED Wall design to be a smaller and more modular IoT version with 3D printed clip on pieces, solderable connector PCBs, 
                and cool effects that can be controlled over Wi-Fi.
            `,
            href: "https://www.youtube.com/shorts/KHpbzdd8Qas",
            tags: [
                {color: "bg-color-1", tag: "ESP32"},
                {color: "bg-color-3", tag: "PCB Design"},
                {color: "bg-color-3", tag: "3D Printing"},
                {color: "bg-color-3", tag: "CAD"},
            ],
            image: "/voice-assistant-camera-wearable.png",
        },
    ]


    return (
        <main className="md:p-10 p-4 md:flex flex-col md:flex-row md:justify-center h-screen w-full">
            <Navbar/>
            <div className="md:overflow-y-scroll flex flex-col items-center space-y-8 pt-4 md:w-[70%] w-[100%]">
                <h3 className="font-bold text-2xl">Favourite Projects</h3>
                {projects_fav.map((project, index) => (
                    <div className="w-[85%] sm:flex sm:space-x-6">
                        <div>
                            <h3 className="font-bold sm:text-lg text-base mb-2 underline"><a href={project.href} target="_blank">{project.title} 🡵</a></h3>
                            <p className="mb-1 text-sm">{project.description}</p>
                            <div className="flex flex-wrap mb-4 items-center">
                                {project.tags.map((tag, i) => (
                                    <div className={tag.color + " text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>{tag.tag}</div>
                                ))}
                            </div>
                        </div>
                        <Image src={project.image} height={0} width={0} alt="" style={{ width: 'auto', height: '110px', borderRadius: '10px'}} sizes="100vw"></Image>
                    </div>
                ))}
                <hr className="border-gray-400 my-4 w-[80%]"/>
                <h3 className="font-bold text-2xl">Other Projects</h3>
                {projects_other.map((project, index) => (
                    <div className="w-[85%] sm:flex sm:space-x-6">
                        <div>
                            <h3 className="font-bold text-lg mb-2 underline"><a href={project.href} target="_blank">{project.title} 🡵</a></h3>
                            <p className="mb-1 text-sm">{project.description}</p>
                            <div className="flex flex-wrap mb-4 items-center">
                                {project.tags.map((tag, i) => (
                                    <div className={tag.color + " text-white py-1 px-[10px] my-1 mr-1 font-bold text-[12px] rounded-full"}>{tag.tag}</div>
                                ))}
                            </div>
                        </div>
                        {/* <Image src={project.image} height={0} width={0} alt="voice-assistant-camera-wearable" style={{ width: 'auto', height: '110px', borderRadius: '10px'}} sizes="100vw"></Image> */}
                    </div>
                ))}
            </div>
        </main>
    )
}