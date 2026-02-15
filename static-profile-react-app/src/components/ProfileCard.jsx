const ProfileCard = ({profile}) => {
    return (
        <>
            <div className="card">
                <h2>{profile.name}</h2>
                <p>Age: {profile.age}</p>
                <p>Hobby: {profile.hobby}</p>
                <p>Bio: {profile.bio}</p>
            </div>
        </>
    )
}

export default ProfileCard;