export function ContactConversationArtwork() {
  return (
    <figure>
      <svg
        viewBox="0 0 720 520"
        className="h-auto w-full"
        role="img"
        aria-labelledby="contact-conversation-title contact-conversation-description"
      >
        <title id="contact-conversation-title">A conversation moving from context to a useful next step</title>
        <desc id="contact-conversation-description">
          Three connected cards show a question becoming shared context and then a clear next step.
        </desc>
        <defs>
          <linearGradient id="contact-paper" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f4f0e7" />
            <stop offset="1" stopColor="#dce9e3" />
          </linearGradient>
          <linearGradient id="contact-path" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#58c8c7" />
            <stop offset="1" stopColor="#126b78" />
          </linearGradient>
        </defs>

        <rect width="720" height="520" rx="8" fill="url(#contact-paper)" />
        <path d="M0 416C145 355 190 475 326 401S536 294 720 348V520H0Z" fill="#c3d9d1" opacity=".48" />
        <path d="M0 84H720M0 436H720" stroke="#173b43" strokeOpacity=".14" />
        <text x="40" y="49" fill="#173b43" fontFamily="Arial,sans-serif" fontSize="11" letterSpacing="2.2">A USEFUL FIRST CONVERSATION</text>
        <text x="680" y="49" textAnchor="end" fill="#173b43" fontFamily="Arial,sans-serif" fontSize="11">AMITRAX / 01</text>

        <path d="M126 271C211 188 263 188 337 255S478 348 591 257" fill="none" stroke="url(#contact-path)" strokeWidth="3" strokeDasharray="7 9" />
        <path d="M575 253l18 4-10 15" fill="none" stroke="#126b78" strokeWidth="3" />

        <g transform="translate(44 175)">
          <rect width="166" height="134" rx="6" fill="#f7f5ef" stroke="#173b43" strokeOpacity=".25" />
          <text x="18" y="27" fill="#126b78" fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="1.6">01 / CONTEXT</text>
          <path d="M18 55h106M18 69h116M18 83h76" stroke="#173b43" strokeWidth="3" strokeOpacity=".38" />
          <circle cx="128" cy="99" r="17" fill="#f4c36b" />
          <path d="M121 99h14M128 92v14" stroke="#173b43" strokeWidth="2" />
        </g>

        <g transform="translate(277 188)">
          <rect width="178" height="145" rx="6" fill="#173b43" />
          <text x="20" y="29" fill="#9de2da" fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="1.6">02 / SHARED QUESTION</text>
          <path d="M20 57h127M20 72h108M20 87h78" stroke="#e8f1e9" strokeWidth="3" strokeOpacity=".7" />
          <path d="M122 108h27M135.5 94.5v27" stroke="#66d2cf" strokeWidth="3" />
          <circle cx="136" cy="108" r="25" fill="none" stroke="#66d2cf" strokeOpacity=".28" strokeWidth="2" />
        </g>

        <g transform="translate(510 174)">
          <rect width="166" height="134" rx="6" fill="#f7f5ef" stroke="#173b43" strokeOpacity=".25" />
          <text x="18" y="27" fill="#126b78" fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="1.6">03 / NEXT STEP</text>
          <rect x="18" y="52" width="113" height="31" rx="3" fill="#58c8c7" />
          <path d="M33 68h60" stroke="#173b43" strokeWidth="3" />
          <path d="M18 105h96M18 117h67" stroke="#173b43" strokeWidth="3" strokeOpacity=".38" />
          <path d="M133 99l14 14 14-24" fill="none" stroke="#126b78" strokeWidth="3" />
        </g>

        <g fill="#173b43" fontFamily="Arial,sans-serif">
          <text x="44" y="473" fontSize="12">Bring the rough edge.</text>
          <text x="676" y="473" textAnchor="end" fontSize="12">Leave with a clearer direction.</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        No polished brief required. The useful shape usually appears as we talk.
      </figcaption>
    </figure>
  );
}
