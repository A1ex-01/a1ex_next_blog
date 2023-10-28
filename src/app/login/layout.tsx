
import Breadcrumb from "@/components/Breadcrumb";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-[40%] py-10 px-12 rounded-2xl min-h-[100px] absolute left-[10%] top-[15vh] after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:backdrop-blur-[16px] after:z-[-1] z-0 overflow-hidden flex flex-col items-start gap-3" style={{ boxShadow: '0 0 10px var(--main-color)' }}>
            {children}
        </div>
    )
}