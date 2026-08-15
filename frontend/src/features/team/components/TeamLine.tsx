import { TEAM_MEMBERS, ROLE_COLOR } from '@/features/team/team.data'

// Fixed layout for a 4-stop line. If the roster ever grows past four people,
// generate these x/y/curve values instead of hand-placing them.
const STOP_POSITIONS = [
  { x: 60, y: 80, labelY: 112, roleY: 128 },
  { x: 272, y: 63, labelY: 42, roleY: 26 },
  { x: 486, y: 97, labelY: 130, roleY: 146 },
  { x: 740, y: 80, labelY: 112, roleY: 128 },
]

export function TeamLine() {
  return (
    <div className="rounded-[20px] border border-[--hairline] bg-[--paper-raised] px-7 pb-7 pt-9">
      <svg viewBox="0 0 800 160" className="block h-auto w-full" role="img" aria-label="Team line diagram, four stops">
        <path
          id="team-track"
          d="M 60 80 C 220 30, 300 130, 420 80 S 620 30, 740 80"
          fill="none"
          stroke="#4B7A64"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray="1 14"
        />

        <circle r={6} fill="#D79A3C">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            keyPoints="0;1;1;0"
            keyTimes="0;0.45;0.55;1"
            calcMode="linear"
          >
            <mpath href="#team-track" />
          </animateMotion>
        </circle>

        {TEAM_MEMBERS.map((member, i) => {
          const pos = STOP_POSITIONS[i]
          if (!pos) return null
          const color = ROLE_COLOR[member.role]
          return (
            <g key={member.id}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={9}
                fill={color}
                stroke="var(--paper-raised, #fff)"
                strokeWidth={4}
              />
              <text
                x={pos.x}
                y={pos.labelY}
                textAnchor="middle"
                className="fill-[--ink] text-[13.5px] font-semibold"
                style={{ fontFamily: 'var(--font-body, sans-serif)' }}
              >
                {member.name}
              </text>
              <text
                x={pos.x}
                y={pos.roleY}
                textAnchor="middle"
                fill={color}
                className="text-[10.5px] font-semibold tracking-wide"
                style={{ fontFamily: 'var(--font-mono, monospace)' }}
              >
                {member.role}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}