import Link from "next/link";
export interface ICrumb {
    name: string;
    href: string;
    icon: string;
}
export default function Breadcrumb({ crumbs = [] }: { crumbs: ICrumb[] }) {
    return <div className="flex">
        {crumbs.map((item, index) => <Link href={item.href}>{item.name}</Link>)}
    </div >
}