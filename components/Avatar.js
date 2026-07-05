export default function Avatar({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Portrait placeholder for Mihir Acharya"
    >
      <defs>
        <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20242E" />
          <stop offset="100%" stopColor="#14171C" />
        </linearGradient>
        <linearGradient id="initials" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2A268" />
          <stop offset="100%" stopColor="#C97A3D" />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx="200" cy="200" r="196" />
        </clipPath>
      </defs>

      <circle cx="200" cy="200" r="196" fill="url(#avatarBg)" stroke="#C97A3D" strokeWidth="2" />

      <g clipPath="url(#circleClip)">
        {/* faint chessboard corner, nodding to chess as a hobby */}
        <g opacity="0.5">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => {
              const isDark = (row + col) % 2 === 0;
              return isDark ? (
                <rect
                  key={`${row}-${col}`}
                  x={280 + col * 20}
                  y={280 + row * 20}
                  width="20"
                  height="20"
                  fill="#F3EFE6"
                  opacity="0.06"
                />
              ) : null;
            })
          )}
        </g>

        {/* simple shoulders + head silhouette as a dummy portrait */}
        <ellipse cx="200" cy="430" rx="150" ry="120" fill="#1B1F27" />
        <circle cx="200" cy="185" r="80" fill="#232838" />

        {/* initials */}
        <text
          x="200"
          y="205"
          textAnchor="middle"
          fontSize="64"
          fontFamily="Georgia, serif"
          fill="url(#initials)"
          fontWeight="600"
        >
          MA
        </text>
      </g>

      {/* knight glyph mark, bottom-right */}
      <g transform="translate(312, 312)">
        <circle r="34" fill="#14171C" stroke="#C97A3D" strokeWidth="2" />
        <path
          d="M-10 12 L12 12 L11 6 L4 5 L4 -2 L10 -6 L9 -12 L1 -13 L-6 -9 L-9 -1 L-6 2 L-9 4 Z"
          fill="#E2A268"
          transform="scale(0.9)"
        />
      </g>
    </svg>
  );
}
