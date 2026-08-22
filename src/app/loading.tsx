export default function Loading() {
    return (
        <div className="fixed inset-0 bg-cream flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-5">
                {/* Spinning ring in brand colors */}
                <div className="relative w-14 h-14">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/15" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
                    <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-gold animate-spin [animation-duration:0.6s]" />
                </div>
                <span className="font-heading font-bold text-sm tracking-widest uppercase">
                    <span className="text-primary">GREEN</span><span className="text-gold">LIGHT</span>
                </span>
            </div>
        </div>
    );
}
