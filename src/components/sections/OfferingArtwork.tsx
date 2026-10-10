import React from 'react';

export type OfferingScene = 'website' | 'workspace' | 'workflow' | 'direction' | 'content';

/** Original studio illustrations. These are concept interfaces, not client work. */
export const OfferingArtwork: React.FC<{ scene?: OfferingScene; label: string; stage?: number }> = ({ scene = 'website', label, stage }) => (
  <svg className="offering-artwork" viewBox="0 0 640 460" role="img" aria-label={label}>
    <rect width="640" height="460" fill="#10292d" />
    <circle cx="570" cy="60" r="210" fill="#174147" />
    <path d="M0 390 640 110M0 460 640 180M100 460 640 250" stroke="#2b4b4e" fill="none" />
    {stage === 0 ? <g transform="rotate(-5 320 230)">
      <rect x="142" y="65" width="350" height="334" rx="4" fill="#f4f1e9" />
      <text x="176" y="111" fill="#476466" fontSize="15">PROJECT NOTES / 01</text>
      <text x="176" y="162" fill="#10292d" fontSize="32" fontWeight="600">Start with why.</text>
      {['Who is it for?', 'What needs to change?', 'What does useful look like?'].map((text, i) => <g key={text}><circle cx="185" cy={211 + i * 51} r="8" fill="#65d8df" /><text x="206" y={217 + i * 51} fill="#10292d" fontSize="17">{text}</text></g>)}
    </g> : stage === 1 ? <g stroke="#67dbe0" fill="none" strokeWidth="2">
      <rect x="221" y="65" width="198" height="65" rx="3" /><path d="M320 130v50M120 180h400M120 180v40M320 180v40M520 180v40" />
      {[45,245,445].map(x => <g key={x}><rect x={x} y="220" width="150" height="160" rx="3" /><path d={`M${x + 20} 250h110M${x + 20} 270h70M${x + 20} 305h110M${x + 20} 325h110`} /></g>)}
      <text x="265" y="105" fill="#f4f1e9" stroke="none" fontSize="20">The journey</text>
    </g> : scene === 'workflow' ? <g>
      <path d="M132 233h375M320 233v110" stroke="#66dae0" strokeWidth="3" strokeDasharray="7 7" />
      {[{ x: 64, label: 'Receive', n: '01' }, { x: 251, label: 'Review', n: '02' }, { x: 438, label: 'Connect', n: '03' }].map(({ x, label: text, n }) => <g key={n}><rect x={x} y="161" width="138" height="144" rx="8" fill="#f4f1e9" /><circle cx={x + 69} cy="207" r="22" fill="#65d8df" /><text x={x + 69} y="214" textAnchor="middle" fontSize="19" fill="#10292d">{n}</text><text x={x + 69} y="265" textAnchor="middle" fontSize="19" fill="#10292d">{text}</text></g>)}
      <text x="320" y="374" textAnchor="middle" fontSize="18" fill="#b7d2d2">People stay in the loop.</text>
    </g> : scene === 'direction' ? <g>
      <rect x="65" y="68" width="320" height="324" fill="#f4f1e9" transform="rotate(-4 225 230)" />
      <text x="102" y="147" fontSize="61" fontWeight="600" fill="#10292d">Aa.</text>
      <text x="105" y="193" fontSize="18" fill="#496165">A clear visual language.</text>
      <path d="M105 225h220M105 249h174" stroke="#a3b3b0" strokeWidth="8" />
      <rect x="310" y="197" width="255" height="176" fill="#65d8df" transform="rotate(7 438 285)" />
      <circle cx="437" cy="282" r="57" fill="none" stroke="#10292d" strokeWidth="23" /><path d="M405 316 470 251" stroke="#65d8df" strokeWidth="9" />
    </g> : <g>
      <rect x="48" y="64" width="544" height="335" rx="9" fill="#f4f1e9" />
      <path d="M48 101h544" stroke="#ccd2cc" />
      <circle cx="69" cy="83" r="4" fill="#10292d" /><circle cx="83" cy="83" r="4" fill="#8ca7a5" /><circle cx="97" cy="83" r="4" fill="#8ca7a5" />
      <text x="123" y="88" fill="#536866" fontSize="12">STUDIO CONCEPT / {scene === 'workspace' ? 'WORKSPACE' : scene === 'content' ? 'CONTENT' : 'RESPONSIVE WEBSITE'}</text>
      {scene === 'workspace' ? <g>
        <rect x="49" y="102" width="118" height="288" fill="#dfe7df" />
        {[143,180,217,254].map((y, i) => <rect key={y} x="67" y={y} width={i === 0 ? 81 : 61} height="8" fill={i === 0 ? '#16454a' : '#8ca7a5'} />)}
        <text x="191" y="150" fontSize="25" fill="#10292d">A little more clarity.</text>
        {[0,1,2].map(i => <g key={i}><rect x={191 + i * 123} y="178" width="110" height="174" rx="3" fill={i === 1 ? '#c6eff0' : '#e5e9e1'} /><rect x={203 + i * 123} y="197" width="65" height="6" fill="#486a6b" />{[225,267,309].map(y => <rect key={y} x={203 + i * 123} y={y} width="86" height="27" rx="2" fill="#fffdf8" />)}</g>)}
      </g> : scene === 'content' ? <g>
        <text x="85" y="154" fontSize="17" fill="#476466">A JOURNAL OF USEFUL IDEAS</text>
        <text x="85" y="204" fontSize="36" fontWeight="600" fill="#10292d">Words with purpose.</text>
        <rect x="85" y="232" width="147" height="129" fill="#65d8df" /><path d="M111 324 148 265l57 59z" fill="#174147" />
        {[245,268,291,336,356].map((y, i) => <rect key={y} x="257" y={y} width={i % 2 ? 190 : 250} height="7" fill="#9caea7" />)}
      </g> : <g>
        <text x="83" y="158" fontSize="15" fill="#496165">THOUGHTFULLY MADE</text>
        <text x="83" y="214" fontSize="39" fontWeight="600" fill="#10292d">Room for</text>
        <text x="83" y="257" fontSize="39" fontWeight="600" fill="#10292d">a new idea.</text>
        <rect x="84" y="286" width="130" height="34" rx="17" fill="#10292d" /><text x="149" y="308" textAnchor="middle" fill="#f4f1e9" fontSize="13">Explore the idea ↗</text>
        <circle cx="452" cy="225" r="87" fill="#65d8df" /><ellipse cx="452" cy="225" rx="38" ry="87" fill="none" stroke="#174147" strokeWidth="2" /><path d="M365 225h174M377 181h151M377 269h151" stroke="#174147" strokeWidth="2" />
        <rect x="479" y="278" width="86" height="139" rx="9" fill="#10292d" stroke="#698d8c" strokeWidth="3" /><rect x="488" y="292" width="68" height="106" rx="3" fill="#65d8df" /><circle cx="522" cy="340" r="23" fill="none" stroke="#10292d" strokeWidth="2" />
      </g>}
      {stage === 3 && <g><rect x="354" y="32" width="221" height="47" rx="23" fill="#65d8df" /><text x="465" y="62" textAnchor="middle" fontSize="19" fill="#10292d">✓ Ready for the world</text></g>}
    </g>}
  </svg>
);
