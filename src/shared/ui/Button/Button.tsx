import { useMediaQuery } from "react-responsive";
import cn from "classnames";

export default function Button({
  text,
  iconLeft,
  iconRight,
  className,
  ...props
}: {
  className?: string;
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <button
      className={cn(
        "bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:from-pink-700 active:to-purple-800 text-white px-13 py-4 rounded-full font-black text-2xl shadow-2xl transition-all  duration-300 hover:scale-110 disabled:opacity-0 disabled:cursor-auto  ",
        {
          "hover:scale-none": isMobile,
        },
        className,
      )}
      {...props}
    >
      <div className="flex justify-center items-center gap-2">
        {iconLeft}
        <p
          className={cn("text-nowrap", {
            hidden: !text,
          })}
        >
          {text}
        </p>
        {iconRight}
      </div>
    </button>
  );
}
