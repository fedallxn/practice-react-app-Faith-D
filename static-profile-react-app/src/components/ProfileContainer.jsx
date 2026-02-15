import ProfileCard from "./ProfileCard"

const DisplayProfiles = ({profiles}) => {
    return (
        <div className="card-container">
            {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
            ))}
        </div>
    )
}

export default DisplayProfiles;