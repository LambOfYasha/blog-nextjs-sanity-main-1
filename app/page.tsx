export default function Home() {
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/zr6IpUM7p7M?autoplay=1&loop=1&playlist=zr6IpUM7p7M&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
        title="Embedded Video"
        className="fixed inset-0 w-screen h-screen"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  )
} 