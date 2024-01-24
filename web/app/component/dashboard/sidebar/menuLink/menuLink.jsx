import React from 'react';
import Link from 'next/link';

const MenuLink = ({item}) => {
  return (
    <Link href={item.path} className="flex p-5">
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink;
