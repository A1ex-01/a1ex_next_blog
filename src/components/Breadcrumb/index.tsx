import Link from "next/link";
import "@/app/assets/var.scss"
export interface ICrumb {
    name: string;
    href: string;
    icon: string;
}
export default function Breadcrumb({ crumbs = [] }: { crumbs: ICrumb[] }) {
    return <div className="flex items-center text-2xl text-main-color">
        {crumbs.map((item, index) => <div key={item.href}><Link href={item.href} style={{ opacity: index === crumbs.length - 1 ? 0.5 : 1 }}>{item.name}</Link>{index !== crumbs.length - 1 && <i className="iconfont icon-mianbaoxie font-bold mx-1"></i>}</div>
        )}
    </div >
}