import React, { useState } from 'react'
import './PasswordStrengthTester.scss'

const PasswordStrengthTester: React.FC = () => {
    const [password, setPassword] = useState('')
    const [strength, setStrength] = useState('')

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        setStrength(calculateStrength(newPassword))
    }

    const calculateStrength = (password: string) => {
        if (password.length === 0) {
            return 'empty'
        }

        if (password.length < 7) {
            return 'weak'
        }

        const hasLetters = /[a-zA-Z]/.test(password)
        const hasNumbers = /[0-9]/.test(password)
        const hasSymbols = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(
            password
        )

        if (hasLetters && hasNumbers && hasSymbols) {
            return 'strong'
        }

        if (hasLetters && hasNumbers) {
            return 'medium'
        }

        return 'weak'
    }

    const renderStrengthSections = () => {
        let sections: JSX.Element[] = []

        for (let i = 0; i < 3; i++) {
            let sectionColor = 'grey'

            if (strength === 'weak') {
                sectionColor = 'tomato'
            } else if (strength === 'medium' && i < 3) {
                sectionColor = 'yellow'
            } else if (strength === 'strong') {
                sectionColor = 'rgb(94, 250, 88)'
            }

            sections.push(
                <div
                    key={i}
                    style={{
                        width: '56px',
                        height: '10px',
                        border: '1px solid rgb(209, 193, 255)',
                        backgroundColor: sectionColor,
                        marginTop: '7px',
                        marginBottom: '4px',
                        borderRadius: '7px',
                    }}
                />
            )
        }

        return sections
    }

    return (
        <div className="wrapper">
            <div className="tester_container">
                <p className="tester_title">Check your password</p>
                    <input
                        className="input_field"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                <div className="tester_indicators">
                    {renderStrengthSections()}
                </div>
            </div>
        </div>
    )
}

export default PasswordStrengthTester
