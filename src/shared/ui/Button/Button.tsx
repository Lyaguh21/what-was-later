export default function Button({
  text,
  disabled,
  icon,
}: {
  text: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <button
      disabled={disabled}
      className="bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-13 py-4 rounded-full font-black text-2xl shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-0 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <div className="flex justify-center items-center gap-2">
        {icon}
        <p>{text}</p>
      </div>
    </button>
  );
}
