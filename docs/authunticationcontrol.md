Implementing user authentication for a greenhouse automation system involves creating React components that handle user login, registration, and profile management. The system should also include components for managing user sessions and protecting routes based on authentication status. Here’s a structured approach to setting up user authentication in your React application:

### Component Breakdown

1. **AuthProvider**: Context provider for authentication state.
2. **Login**: Component for user login.
3. **Register**: Component for user registration.
4. **Profile**: Component for managing user profiles.
5. **PrivateRoute**: A route wrapper that protects routes based on authentication status.
6. **Logout**: Component or functionality to handle user logout.

### 1. AuthProvider Component

The `AuthProvider` component uses React Context to provide authentication state and functions throughout the app.

```jsx
// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { checkAuth, loginUser, logoutUser, registerUser } from '../api/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const authenticatedUser = await checkAuth();
      setUser(authenticatedUser);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    const userData = await loginUser(email, password);
    setUser(userData);
  };

  const register = async (email, password) => {
    const userData = await registerUser(email, password);
    setUser(userData);
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

### 2. Login Component

The `Login` component allows users to authenticate.

```jsx
// src/components/Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ history }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/dashboard'); // Redirect to a protected route
    } catch (err) {
      setError('Failed to login');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```

### 3. Register Component

The `Register` component allows new users to sign up.

```jsx
// src/components/Register.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Register = ({ history }) => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      history.push('/dashboard'); // Redirect to a protected route
    } catch (err) {
      setError('Failed to register');
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
```

### 4. Profile Component

The `Profile` component lets users manage their profiles.

```jsx
// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProfile, updateUserProfile } from '../api/authService';

const Profile = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState({ email: '', name: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setProfile(profileData);
      } catch (err) {
        setError('Failed to load profile');
      }
    };

    loadProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(profile);
      alert('Profile updated');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
```

### 5. PrivateRoute Component

The `PrivateRoute` component protects routes that require authentication.

```jsx
// src/components/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
```

### 6. Logout Functionality

Typically, you handle logout by calling a logout function from your authentication context.

```jsx
// src/components/Logout.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
```

### API Integration

Here’s how you might implement the API service functions for authentication:

```jsx
// src/api/authService.js
export const checkAuth = async () => {
  const response = await fetch('/api/auth/check');
  const data = await response.json();
  return data.user || null;
};

export const loginUser = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (response.ok) return data.user;
  throw new Error(data.message);
};

export const registerUser = async (email, password) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (response.ok) return data.user;
  throw new Error(data.message);
};

export const logoutUser = async () => {
  await fetch('/api/auth/logout', {
    method: 'POST',
  });
};

export const getUserProfile = async () => {
  const response =