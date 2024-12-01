import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import SelectedWork from "./components/selectedWork/SelectedWork";


export default function Home() {
  return (
    <div className="text-brandblack text-lg">
       <Header />
       <Landing />
       <SelectedWork />
    </div>
  )
}
