const SkillBanner = ({ children, title, main = false }) => {
  const baseClassName =
    'relative px-4 pb-6 pt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-center mb-10'
  const fullClassName = main
    ? `${baseClassName} border border-zinc-300 dark:border-gray-500 rounded-lg`
    : baseClassName

  return (
    <div className={fullClassName}>
      <h3 className="absolute top-[-0.75rem] left-3 main-text-color bg-white dark:bg-black px-2">
        {title}
      </h3>
      {children}
    </div>
  )
}

export default SkillBanner
