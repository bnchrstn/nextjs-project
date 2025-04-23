export default function Navbar() {
    return (
      <nav className="p-4 bg-white shadow">
        <div className="container mx-auto flex justify-between">
          <span className="font-bold text-xl">bnchrstn</span>
          <div className="space-x-4">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>
      )
  }