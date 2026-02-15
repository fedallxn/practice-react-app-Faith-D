import ProfileCard from "./ProfileCard"

const DisplayProfiles = ({profiles}) => {
    return (
        <>
        {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
        ))}
        </>
    )
}

export default DisplayProfiles;