import React from 'react';
import './profile.css';

const ProfilePage = () => {
    const user = {
        name: 'Jane Doe',
        title: 'Frontend Developer',
        location: 'San Francisco, CA',
        email: 'jane.doe@example.com',
        bio: 'Passionate about creating beautiful, user-friendly interfaces with React and modern CSS. Open source contributor and tech community organizer.',
        skills: ['React', 'JavaScript', 'SCSS', 'UI/UX', 'Responsive Design'],
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <img src={user.avatarUrl} alt={user.name} className="profile-avatar" />
                <h1>{user.name}</h1>
                <h2>{user.title}</h2>
                <p className="location">{user.location}</p>
            </div>

            <div className="profile-content">
                <section className="profile-section">
                    <h3>About Me</h3>
                    <p>{user.bio}</p>
                </section>

                <section className="profile-section">
                    <h3>Skills</h3>
                    <ul className="skills-list">
                        {user.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>

                <section className="profile-section">
                    <h3>Contact</h3>
                    <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                </section>
            </div>
        </div>
    );
};

export default ProfilePage;