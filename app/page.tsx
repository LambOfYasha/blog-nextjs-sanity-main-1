import { ABMVideo } from "../styles/images"

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      
      <video src={ABMVideo} autoPlay loop muted className="w-full h-full object-cover" />
 
        <h1 className="w3-text-amber z-10 w3-jumbo w3-center w3-animate-fading" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
         <b> Under Construction</b>
        </h1>
 
    </div>
  )
} 