import Image from 'next/image'

export default function BackgroundSection() {
  return (
    <section className="relative h-96 overflow-hidden">
      <Image
        src="/images/IMG_0685.JPG"
        alt="株式会社NAWA"
        fill
        className="object-contain bg-white"
      />
      <div className="absolute inset-0 bg-white/80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#B8860B' }}>
            いちばん"3代目らしい"
          </h3>
          <p className="text-xl md:text-2xl font-medium" style={{ color: '#B8860B' }}>
            受け継ぎ、磨き、次へ。
          </p>
        </div>
      </div>
    </section>
  )
}
