import { ReactNode, FC } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
  block?: boolean
  big?: boolean
}

// export const Button = styled.Button(({ block, big }: Props) => [
//   tw`border-0`,
//   tw`leading-none text-white`,
//   tw`transition-colors duration-300 bg-carolina-blue hover:bg-carolina-blue-light`,
//   block && tw`block w-full`,
//   big && tw`p-5 font-bold uppercase`,
//   !big && tw`py-2.5 px-5`,
// ])

export const Button: FC<Props> = ({ children, className }: Props) => {
  const styles = clsx(
    className,
    `border-0
    text-white text-sm leading-none
    bg-carolina-blue hover:bg-carolina-blue-light transition-colors duration-300
    w-full py-3
    outline-none focus:outline-clear
    `
  )

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  )
}
