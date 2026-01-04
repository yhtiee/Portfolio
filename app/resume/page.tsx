"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ResumeDocument from "@/components/resume/Resume";

export default function ResumePage() {


    return (
        <div className="min-h-screen bg-gray-50/50 print:bg-white text-black pt-12 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto mt-14">
                
                {/* Header / Actions */}
                <div className="flex justify-between items-center mb-8 no-print">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-800">Preview Resume</h1>
                    <Button className="gap-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md transition-all">
                        <Download className="w-4 h-4" />
                        <a href="/Utibeabasi-Ekpenyong-Resume.pdf" download className="font-medium">Download PDF</a>
                    </Button>
                </div>

                <ResumeDocument/>
            </div>
        </div>
    );
}