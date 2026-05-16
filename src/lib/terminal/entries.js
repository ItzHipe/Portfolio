let entryId = 0

export function nextEntryId() {
  entryId += 1
  return `t-${entryId}`
}

/** @typedef {'line' | 'rich'} EntryKind */

/**
 * @param {object} props
 * @returns {object}
 */
export function lineEntry({ text, lineType = 'output', prefix = '', command = null }) {
  return {
    id: nextEntryId(),
    kind: 'line',
    lineType,
    prefix,
    text,
    command,
  }
}

export function inputEntry(command) {
  return lineEntry({
    text: command,
    lineType: 'input',
    prefix: '$',
    command,
  })
}

export function richEntry(blockType, data = {}) {
  return {
    id: nextEntryId(),
    kind: 'rich',
    blockType,
    data,
  }
}
