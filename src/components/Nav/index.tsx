import Link from "next/link";

const config = [
    {
        name: "首页",
        icon: "",
        path: '/home/1'
    },
    {
        name: "归档",
        icon: "",
        path: '/archive'
    },
    {
        name: "关于",
        icon: "",
        path: '/about'

    },
    {
        name: "分类",
        icon: "",
        path: '/category'
    },
    {
        name: "标签",
        icon: "",
        path: '/tag'
    },
    {
        name: "友链",
        icon: "",
        path: '/friend'
    },
    {
        name: "登录",
        icon: "",
        path: '/login'
    },
];
export default function Nav() {
    return <div className="w-[1240px] flex justify-between h-16">
        <div className=" flex justify-center items-center">a1ex`s blog</div>
        <div className="flex h-full">
            {config.map((item) => (
                <Link href={item.path} key={item.name} className="px-4 hover:bg-slate-500 h-full flex justify-center items-center hover:text-cyan-400">
                    {item.name}
                </Link>
            ))}
        </div>
    </div>
}