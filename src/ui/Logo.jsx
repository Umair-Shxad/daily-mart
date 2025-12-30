function Logo({ className }) {
  return (
    <div
      className={`flex items-center gap-1 font-bold tracking-tighter ${className}`}
    >
      <div className="w-10 h-10 mr-1 bg-brand rounded-lg flex items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      </div>
      <span className="text-black uppercase">Daily</span>
      <span className="text-brand uppercase">Mart</span>
    </div>
  );
}

export default Logo;
