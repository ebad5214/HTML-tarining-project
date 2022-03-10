import React from "react";

const Layout = props => {
    return (
        <>
            {/* <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.number} years old)
          </li>
        ))}
      </ul> */}
            <div className=" container card text-center" style={{ width: '18rem' }}>
                <div className="card-header">
                    <b><em>Prieview</em></b>
                </div>
                <ul className="list-group list-group-flush">
                    {props.users.map((user) => (
                        <>
                        <li key={user.idName}>
                            Name: {user.name}
                        </li>
                        <li key={user.idNumber}>
                            Number: {user.number}
                        </li>
                        <li key={user.idEmail}>
                            e-Mail: {user.email}
                        </li>
                        <li key={user.idPassword}>
                            Password: {user.password}
                        </li>
                        <li key={user.idPasswordAgain}>
                            Password Again: {user.passwordAgain}
                        </li>
                        <li key={user.idGender1}>
                            Gender: {user.female}
                        </li>
                        <li key={user.idGender2}>
                            Gender: {user.male}
                        </li>
                        <li key={user.idGender3}>
                            Gender: {user.other}
                        </li>
                        <hr></hr>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Layout;