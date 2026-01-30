import { cn } from "@/lib/utils";

export default function GridBackground() {
    return (
        <div className="fixed inset-0 -z-50 w-full h-full bg-black">
            {/* The Grid */}
            <div
                className={cn(
                    "absolute inset-0 pointer-events-none",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]",
                    
                )}
            />

      
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center  bg-orange-500/5  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}
