import Breadcrumb from '@/components/Breadcrumb'

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
        className="w-[70%] py-10 px-12 rounded-2xl min-h-[100px] mx-auto absolute left-[50%] top-[30vh] translate-x-[-50%] after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:backdrop-blur-[16px] after:z-[-1] z-0 overflow-hidden flex flex-col items-start gap-3"
        style={{
          boxShadow: '0 0 10px var(--main-color)'
        }}
      >
        <Breadcrumb
          crumbs={[
            {
              name: 'home',
              href: '/home',
              icon: '-'
            },
            {
              name: 'tag',
              href: '/tag',
              icon: '-'
            }
          ]}
        />
        <div className="text-5xl bg-main-color text-white px-5 py-2 rounded-xl">{'tag'}</div>
        <div className="content min-h-[100px] rounded-2xl bg-white flex flex-wrap gap-5 w-full p-10">
          {children}
        </div>
      </div>
    </div>
  )
}
