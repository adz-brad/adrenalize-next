export default function PageWrapper ({ title, children }) {
  return (
    <div className="flex flex-col space-y-8 lg:space-y-16 px-4 py-16 lg:px-0 max-w-screen-2xl mx-auto">
        <h1 className="gradient-header pb-4 border-b border-base-500/50">{title}</h1>
        {children}
    </div>
  )
}
