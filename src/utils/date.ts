export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()

  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const years = Math.floor(days / 365)

  if (years > 0) {
    return `${years}년 전`
  }
  if (days > 0) {
    return `${days}일 전`
  }
  if (hours > 0) {
    return `${hours}시간 전`
  }
  if (minutes > 0) {
    return `${minutes}분 전`
  }
  return '방금 전'
}
