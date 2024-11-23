import React from 'react'
import PropTypes from 'prop-types'

const userData = [{
    name: "Balaji",
    description: "Full Stack Wed Developer",
    online: true,
    skills: ["HTML", "CSS", "Javascript", ".NET Core", "React", "MVC", "SQL"]
},
{
    name: "Vanitha",
    description: "House Wife",
    online: false,
    skills: ["Cooking", "Washing", "Sweeping", "Iorning", "Dinning", "Shopping"]
},
{
    name: "Harathika",
    description: "UKG",
    online: false,
    skills: ["English", "Tamil", "Maths", "Science", "Social"]
}
];

function User(props) {
    return (
        <div className="user-card">
            <span className={props.online ? "user-card__availability online" : "user-card__availability offline"}>
                {props.online ? "Online" : "Offline" }
            </span>
            <div className="user-card__avatar">
                <img src="https://via.placeholder.com/100" alt="Avatar" />
            </div>
            <h2 className="user-card__name">{props.name}</h2>
            <p className="user-card__description">{props.description}</p>
            <div className="user-card__actions">
                <button className="user-card__button primary">Follow</button>
                <button className="user-card__button primary outline">Message</button>
            </div>
            <div className="user-card__skills">
                <h6>Skills</h6>
                <ul className="user-card__skills-list">
                    {props.skills.map((skill,index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
      )
}

export const UserCard = () => {
  return <>
  {
    userData.map((user,index) => (
        <User key={index} name={user.name} description={user.description} skills={user.skills} online={user.online} />
    ))
  }
  </>
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
}