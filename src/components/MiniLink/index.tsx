import Link from "next/link";

export default function MiniLink({ name, icon, href, count }: { name: string, icon: string, href: string, count: number }) {
    return (
        <Link href={href} className="text-[#333] mb-3 rounded-lg bg-[#f1f3f9] flex items-center text-xl h-11 box-border py-2 px-5 hover:opacity-50">
            <em>{icon}</em>
            <span className="ml-2 mr-4">{name}</span>
            <span className="text-main-color">{count}</span>
        </Link>
    )
}