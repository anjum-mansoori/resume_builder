import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import DeveloperTemplate from "../templates/DeveloperTemplate";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import toast from "react-hot-toast";

const PreviewResume = () => {
    const { id } = useParams();
    const [resume, setResume] = useState(null);
    const resumeRef = useRef();

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/resume/${id}`,
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );

                const data = await response.json();
                setResume(data); // resume = data
            } catch (error) {
                console.log(error);
            }
        };

        fetchResume();
    }, [id]);

    if (!resume) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">
                    Loading Resume...
                </h1>
            </div>
        );
    }

    const downloadPDF = async () => {
        const input = resumeRef.current;

        const canvas = await html2canvas(input, {
            scale: 3,
            useCORS: true,
            backgroundColor: "#ffffff",
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(
            imgData,
            "PNG",
            0,
            0,
            imgWidth,
            Math.min(imgHeight, pageHeight)
        );

        pdf.save(`${resume.fullName}-Resume.pdf`);
        toast.success("Resume Downloaded!");
    };


    let SelectedTemplate;

    switch (resume.template) {

        case "modern":
            SelectedTemplate = ModernTemplate;
            break;

        case "professional":
            SelectedTemplate = ProfessionalTemplate;
            break;

        case "minimal":
            SelectedTemplate = MinimalTemplate;
            break;

        case "developer":
            SelectedTemplate = DeveloperTemplate;
            break;

        default:
            SelectedTemplate = ClassicTemplate;
    }

    return (
        <>
            <Navbar />

            <div className="bg-gray-200 min-h-screen py-10">
                <div className="max-w-[794px] mx-auto">
                    <div className="max-w-5xl mx-auto mb-6 flex justify-end">
                        <button
                            onClick={downloadPDF}
                            className=" bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 " >
                            Download PDF
                        </button>
                    </div>

                    <div ref={resumeRef} className="bg-white shadow-xl" >
                        <SelectedTemplate resume={resume} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreviewResume;