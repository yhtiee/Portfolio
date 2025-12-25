"use client";

import { Button } from "@/components/ui/button";
import { FileQuestion, LucideIcon } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    actionLink?: string;
    onAction?: () => void;
    icon?: LucideIcon;
}

const EmptyState = ({
    title = "No items found",
    description = "We couldn't find anything matching your criteria. Try adjusting your filters or check back later.",
    actionLabel,
    actionLink,
    onAction,
    icon: Icon = FileQuestion
}: EmptyStateProps) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center border-2 border-dashed border-gray-300 rounded-3xl bg-gray-50/50 animate-in fade-in zoom-in-95 duration-500">
            {/* Icon Container */}
            <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Icon className="w-10 h-10 text-black" />
            </div>
            
            {/* Text Content */}
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-3">
                {title}
            </h3>
            
            <p className="text-gray-500 max-w-md mb-8 text-lg leading-relaxed font-medium">
                {description}
            </p>

            {/* Action Button */}
            {actionLabel && (
                <div className="flex gap-4">
                    {actionLink ? (
                        <Link href={actionLink}>
                            <Button size="lg" className="font-bold border-2 border-black bg-black text-white hover:bg-gray-800 hover:translate-y-[-2px] transition-all shadow-none hover:shadow-lg">
                                {actionLabel}
                            </Button>
                        </Link>
                    ) : (
                        <Button 
                            size="lg"
                            onClick={onAction}
                            className="font-bold border-2 border-black bg-black text-white hover:bg-gray-800 hover:translate-y-[-2px] transition-all shadow-none hover:shadow-lg"
                        >
                            {actionLabel}
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default EmptyState;
