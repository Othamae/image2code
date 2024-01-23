
import Main from "@/components/Main"
import SideBar from "@/components/SideBar"

export default function Home() {
  return (
    <div className="grid grid-cols-[400px_1fr]">
      <SideBar />
      <Main />
    </div>
  )
}
