import Menu from "./Menu";


export default function Header() {
  return (
    <div className="flex h-20 justify-between items-center px-10">
        <div className="font-black">RUAN RADYN</div>
        <div className="flex gap-4 text-base font-semibold items-center">
            <div className="border border-brandblack rounded-[91px] px-5 h-10 flex items-center">GET IN TOUCH</div>
            <div><Menu /></div>
        </div>
    </div>
  )
}
