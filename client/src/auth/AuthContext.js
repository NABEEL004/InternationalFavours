import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("nabeel@admin.com");

    const signIn = async (email, password) => {
        const response = await fetch('http://localhost:8080/api/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            setUser({ email });  // Set the user as authenticated
            console.log("email set as", email)
        } else {
            throw new Error('Failed to sign in');
        }
    }

    const signOut = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);