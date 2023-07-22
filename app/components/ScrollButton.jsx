'use client'

export default function ScrollButton({ scrollId, className, title, children }) {

  const handleScroll = () => {
    if(document){
      const scrollDiv = document.getElementById(`${scrollId}`).offsetTop
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'})
    }
  }

  return (
    <button onClick={handleScroll} title={title} className={className}>
      {children}
    </button>
  )
}
