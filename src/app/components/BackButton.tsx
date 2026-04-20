export function BackButton() {
  return (
    <button className="flex items-center gap-[4px] hover:opacity-70 transition-opacity">
      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
        <path
          d="M12.5 5L7.5 10L12.5 15"
          stroke="#403D3B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-strawberry-text)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-weight-regular)",
          color: "#403D3B",
        }}
      >
        Back to Guests
      </span>
    </button>
  );
}
