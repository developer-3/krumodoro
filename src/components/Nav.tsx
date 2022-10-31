import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
    const { data: session } = useSession()

    return (
        <div className="p-4 w-full flex flex-row bg-slate-200">
            <div className="w-1/3 flex items-center justify-start">
                <a href="https://www.github.com/developer-3">
                    <img
                        className="w-[2rem]"
                        src="/Github-logo.png"
                        alt="The GitHub logo"
                    />
                </a>
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold">krumodoro</h1>
                </Link>
            </div>
            <div className="w-1/3 flex items-center justify-end gap-6">
                { session ? 
                    <Link href="/profile">
                        <img src="/adam.jpg" className="w-[2rem] h-[2rem] rounded-full cursor-pointer" />
                    </Link> 
                :
                   
                    <button onClick={() => signIn()}>Sign in</button>
                   
                }
            </div>
        </div>
    )
}