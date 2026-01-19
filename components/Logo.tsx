export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Four-leaf clover made of hearts */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Top heart - Dark Green */}
        <path
          d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
          fill="#2D6A4F"
          transform="rotate(0 24 24)"
        />
        {/* Right heart - Light Green */}
        <path
          d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
          fill="#95D5B2"
          transform="rotate(90 24 24)"
        />
        {/* Bottom heart - Pink */}
        <path
          d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
          fill="#F2B5D4"
          transform="rotate(180 24 24)"
        />
        {/* Left heart - Yellow */}
        <path
          d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
          fill="#F4D35E"
          transform="rotate(270 24 24)"
        />
      </svg>
      {/* Text */}
      <span
        className="text-2xl font-black tracking-tight"
        style={{
          color: "#F7A906",
          textShadow: "2px 2px 0px #1a1a1a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        EDUCATION STATE
      </span>
    </div>
  );
}

export function LogoIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top heart - Dark Green */}
      <path
        d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
        fill="#2D6A4F"
        transform="rotate(0 24 24)"
      />
      {/* Right heart - Light Green */}
      <path
        d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
        fill="#95D5B2"
        transform="rotate(90 24 24)"
      />
      {/* Bottom heart - Pink */}
      <path
        d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
        fill="#F2B5D4"
        transform="rotate(180 24 24)"
      />
      {/* Left heart - Yellow */}
      <path
        d="M24 8C24 8 20 4 16 4C12 4 8 7 8 12C8 17 24 24 24 24C24 24 40 17 40 12C40 7 36 4 32 4C28 4 24 8 24 8Z"
        fill="#F4D35E"
        transform="rotate(270 24 24)"
      />
    </svg>
  );
}
