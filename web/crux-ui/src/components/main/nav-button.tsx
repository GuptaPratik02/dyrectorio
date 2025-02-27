import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavButtonProps {
  children: React.ReactNode
  href: string
  target?: string
  passHref?: boolean
  icon?: JSX.Element
}

const NavButton = (props: NavButtonProps) => {
  const { children, href, target, passHref, icon } = props

  const router = useRouter()

  const active = router.pathname.startsWith(href)

  return (
    <>
      <div className={clsx('pl-8 py-2', active ? 'bg-dark w-full' : null)}>
        <Link href={href} passHref={passHref} target={target}>
          <div className="flex flex-row">
            <div className="flex items-center mr-2 text-bright text-sm font-semibold">{icon}</div>
            {children}
          </div>
        </Link>
      </div>

      <div className={clsx('w-1 py-2', active ? 'bg-dyo-turquoise opacity-50' : null)}>&nbsp;</div>
    </>
  )
}

export default NavButton
