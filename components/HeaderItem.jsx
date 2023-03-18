function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white mt-4  ">
      <Icon className="h-6 w-6 mb-1 group-hover:animate-bounce text-gray-800 dark:text-gray-300" />
      <p className="opacity-0 group-hover:opacity-100  tracking-widest text-xs transition-all duration-300 text-gray-800 font-medium dark:text-gray-300">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
