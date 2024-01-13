// app/routes/password.tsx
import { useState } from 'react';
import { generatePassword } from '../utils/passwordGenerator';
import styles from '../styles/passwordGenerator.module.css';

export default function PasswordRoute() {
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(20);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const password = generatePassword(passwordLength);
        setGeneratedPassword(password);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Password Generator</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label} htmlFor="passwordLength">
                    Maximum Password Length is 100
                    <div>
                        <input
                            type="number"
                            value={passwordLength}
                            onChange={(e) => setPasswordLength(Number(e.target.value))}
                            min="20"
                            max="100" // example max value
                            className={styles.input}
                        />
                    </div>
                </label>
                <button type="submit" className={styles.button}>Generate</button>
            </form>

            <button
                onClick={() => navigator.clipboard.writeText(generatedPassword)}
                className={styles.copyButton}>
                Copy to Clipboard
            </button>

            {generatedPassword && (
                <>
                    <div className={`${styles.output} ${styles.passwordDisplay}`}>
                        {generatedPassword}
                    </div>
                </>

            )}

        </div>
    );
}