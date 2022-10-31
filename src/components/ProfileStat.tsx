interface ProfileStatProps {
    name: string,
    number: number
}

export default function ProfileStat(props: ProfileStatProps) {

    return (
        <div className="flex flex-col gap-2 items-center">
            <p className="text-[4vw] font-bold">{props.number}</p>
            <p className="text-lg">{props.name}</p>
        </div>
    )
}