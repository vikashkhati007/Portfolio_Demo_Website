import {BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs";
import { useRouter } from 'next/router'
export default function footer() {
    const router = useRouter()
  return (
    <>
      <footer>
        <p>Follow me on Social Medias: </p>
        <div className="icons">
        <BsInstagram className="button" onClick={() => router.push('https://www.instagram.com/vikashkhati007/')}/>
        <BsLinkedin className="button" onClick={()=> router.push('https://www.linkedin.com/in/vikashkhati007')}/>
        <BsGithub className="button" onClick={()=> router.push('https://github.com/vikashkhati007')}/>
        </div>
      </footer>
    </>
  )
}
