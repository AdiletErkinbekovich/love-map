type Props = {
  text: string;
  inPlace: string | null;
  visible: boolean;
};

export const LoveTooltip = ({ text, inPlace, visible }: Props) => {
  return (
    <div
      className={`
    relative
    ml-3 mt-3
    bg-gradient-to-r from-pink-300 to-rose-400
    text-white text-sm
    px-4 py-2 rounded-2xl
    shadow-lg shadow-rose-500/30
    backdrop-blur
    transition-all duration-300 ease-out
    ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
  `}
    >
      <span className="block text-xs opacity-80 mb-0.5">{`In  ${inPlace} I'd say: `}</span>

      <span className="font-medium">{text}</span>

      {/* HEARTS */}
      <div className="absolute -top-2 right-2 pointer-events-none">
        <div className="heart-float" />
        <div className="heart-float delay-200" />
        <div className="heart-float delay-400" />
      </div>
    </div>
  );
};
