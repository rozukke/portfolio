export function readingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<\/?[^>]+(>|$)/g, ""); // remove JSX/HTML tags
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-AU", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}
