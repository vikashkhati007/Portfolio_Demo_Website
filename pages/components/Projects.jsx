import {CgMoreO} from "react-icons/cg";
import Link from "next/link";
export default function Projects() {
  return (
    <>
      <div className="projectscontainer">
        <div className="projectborder">
          <img src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34863.jpg?w=740&t=st=1680082508~exp=1680083108~hmac=d4d1320f6fea49d89baf9bd960daeafaecce9fee385804b8793963a569d437d6"/>
        <h1>E-Commerce Web</h1>
        <Link href="https://amazon.com" target="_blank">
        <CgMoreO className="visiticon"/>
        </Link>
        </div>
        <div className="projectborder">
        <img src="https://img.freepik.com/free-vector/online-games-concept-illustration-with-computer_23-2148534483.jpg?w=900&t=st=1680082347~exp=1680082947~hmac=67986b08047adf848dc4a1814a95af67b37cdd117cdf2aba33d6b31f62ac5079" alt="" />
        <h1>Gaming Web</h1>
        <Link href="https://gamestoreapp.com" target="_blank">
        <CgMoreO className="visiticon"/>
        </Link>
        </div>
        <div className="projectborder">
        <img src="https://img.freepik.com/premium-vector/computer-online-chat-notices_441769-114.jpg?w=900"  />
        <h1>Chatting Web</h1>
        <Link href="https://twitter.com" target="_blank">
        <CgMoreO className="visiticon"/>
        </Link>
        </div>
      </div>
    </>
  )
}
