import { useRouter } from "next/router";
import { useEffect } from "react";
function index() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/home');
  })
  return (
    <>
    </>
  )
}

export default index;
