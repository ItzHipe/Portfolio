import { memo } from 'react'
import TerminalLine from '@/components/terminal/TerminalLine'
import TerminalRichOutput from '@/components/terminal/TerminalRichOutput'

function TerminalEntry({ entry, onRunCommand }) {
  if (entry.kind === 'rich') {
    return (
      <div className="pl-0 sm:pl-1">
        <TerminalRichOutput
          blockType={entry.blockType}
          data={entry.data}
          onRunCommand={onRunCommand}
        />
      </div>
    )
  }

  const lineType =
    entry.lineType === 'input'
      ? 'command'
      : entry.lineType === 'error'
        ? 'system'
        : entry.lineType

  return (
    <TerminalLine
      prefix={entry.prefix ?? (entry.lineType === 'input' ? '$' : '>')}
      text={entry.text}
      type={lineType}
      className={
        entry.lineType === 'input'
          ? 'text-foreground'
          : entry.lineType === 'error'
            ? 'text-[#f87171]'
            : undefined
      }
    />
  )
}

export default memo(TerminalEntry)
