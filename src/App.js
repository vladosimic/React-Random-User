import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mouseValue, setMouseValue] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const newUser = await response.json();
    setUser(newUser.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="random-user">
        {user.map((item) => {
          const {
            name,
            phone,
            picture,
            login,
            email,
            dob,
            location,
            id,
          } = item;
          return (
            <div key={id.value}>
              <img src={picture.large} alt={name} />
              <span>{mouseValue}</span>
              <ul>
                <li>
                  <FaUser
                    onMouseEnter={() =>
                      setMouseValue(
                        <div className="info">
                          <span>My name is</span>
                          <span>{name.first}</span>
                        </div>
                      )
                    }
                  />
                </li>
                <li>
                  <FaEnvelopeOpen
                    onMouseEnter={() =>
                      setMouseValue(
                        <div className="info">
                          <span>My Email is</span>
                          <span>{email}</span>
                        </div>
                      )
                    }
                  />
                </li>
                <li>
                  <FaCalendarTimes
                    onMouseEnter={() =>
                      setMouseValue(
                        <div className="info">
                          <span>My age is</span>
                          <span>{dob.age}</span>
                        </div>
                      )
                    }
                  />
                </li>
                <li>
                  <FaMap
                    onMouseEnter={() =>
                      setMouseValue(
                        <div className="info">
                          <span>My street is</span>
                          <span>
                            {location.street.name}
                            {location.street.number}
                          </span>
                        </div>
                      )
                    }
                  />
                </li>
                <li>
                  <FaPhone
                    onMouseEnter={() =>
                      setMouseValue(
                        <div className="info">
                          <span>My phone number is</span>
                          <span>{phone}</span>
                        </div>
                      )
                    }
                  />
                </li>
                <li>
                  <FaLock
                    onMouseEnter={() =>
                      setMouseValue(
                        <div className="info">
                          <span>My password is</span>
                          <span>{login.password}</span>
                        </div>
                      )
                    }
                  />
                </li>
              </ul>
            </div>
          );
        })}
        <button onClick={() => fetchData()}>
          {loading ? "Loading..." : "Random User"}
        </button>
      </div>
    </div>
  );
}

export default App;
