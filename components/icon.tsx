import { FC } from 'react'
import clsx from 'clsx'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { RiPhoneFill } from 'react-icons/ri'

export enum SocialType {
  Facebook = 'facebook',
  Instagram = 'instagram',
}

export enum ContactType {
  Phone = 'phone',
  Email = 'email',
}

type Props = {
  variant: SocialType | ContactType
  className?: string
  color: 'base' | 'carolina-blue'
  size?: 'xs' | 'md' | 'lg' | 'xl' | '2xl'
}

const Icon: FC<Props> = ({ variant, className, size = 'md', color = 'carolina-blue' }: Props) => {
  const classes = clsx('inline-block', className, `text-${color}`, {
    'text-md': size === 'xs',
    'text-2xl': size === 'md',
    'text-3xl': size === 'lg',
    'text-4xl': size === 'xl',
    'text-5xl': size === '2xl',
  })

  return (
    <>
      {variant === SocialType.Instagram && <AiFillInstagram className={classes} />}
      {variant === SocialType.Facebook && <IoLogoFacebook className={classes} />}
      {variant === ContactType.Phone && <RiPhoneFill className={classes} />}
    </>
  )
}

export default Icon
