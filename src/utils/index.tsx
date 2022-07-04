export function getTabButtonColor(type: string | any): string {
  if (type === 'evaluation') return '#F26834'
  else if (type === 'certification') return '#0A66C2'
  else return '#EDBE00'
}
