const Social = ({ children, href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className=" text-blue-500 flex items-center gap-5 rounded-md transition-all hover:bg-blue-200 p-2 dark:text-pink-500 dark:hover:bg-pink-200"
    >
      {icon}
      {children}
    </a>
  )
}

export default Social
