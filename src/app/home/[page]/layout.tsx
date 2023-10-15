import Link from "next/link";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <div className="h-[145px] bg-white/90 w-full flex flex-col items-center justify-center box-border border-t-8 border-solid border-main-color">
                <p>[a1ex的博客]</p>
                <div>[主页由<Link href={'https://developer.hitokoto.cn/'} className="text-main-color" target="_blank">一言</Link>提供]</div>
                <Link href={'https://beian.miit.gov.cn/'} className="text-main-color" target="_blank">[赣ICP备2022002397号]</Link>
            </div>
        </div>
    )
}