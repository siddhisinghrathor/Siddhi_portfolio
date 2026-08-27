import doodleBg from "../../assets/images/doodle background.jpg";

export default function GridBackground() {
    return (
        <div className="fixed inset-0 -z-50 w-full h-full bg-black">

            {/* Faded Doodle Background above the grid layer */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${doodleBg})`,
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "repeat",
                    backgroundSize: "1200px",
                    opacity: 0.035,
                    filter: "invert(1)",
                }}
            />
      
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center  bg-orange-500/5  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}
