export default function FloatingMessenger() {
  return (
    <a
      href="https://www.messenger.com/t/480464268492479"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-[#00B2FF] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-messenger"
      aria-label="Chat on Messenger"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 0-9 9 8.9 8.9 0 0 0 4.5-1.3l3.5 1.1-1.1-3.5A9 9 0 0 0 21 12z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    </a>
  );
}
