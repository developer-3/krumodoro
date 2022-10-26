export default function Navbar() {
    return (
        <div className="w-full flex flex-row">
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
                <h1 className="text-2xl font-bold">krumodoro</h1>
            </div>
            <div className="w-1/3 flex items-center justify-end gap-6">
                <a href="/profile">
                    <img src="/adam.jpg" className="w-[2rem] h-[2rem] rounded-full cursor-pointer" />
                </a>
            </div>
        </div>
    )
}