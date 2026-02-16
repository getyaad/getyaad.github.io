import React, { useEffect } from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Privacy Policy</h1>

                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Yaad AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your data is handled securely. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and services tailored for UPSC exam preparation.
                    </p>
                </section>

                <section>
                    <h2>2. Information We Collect</h2>
                    <p>To provide our services, we collect the following types of data:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Phone number and email address (for account creation, authentication via Firebase, and communication).</li>
                        <li><strong>Learning Data:</strong> Quiz scores, progress tracking, revision schedules, and spaced repetition logs.</li>
                        <li><strong>Device & Usage Data:</strong> IP address, device model, OS version, and app crash logs (via Google Analytics and Firebase Crashlytics) to improve app stability.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Third-Party Services & Data Sharing</h2>
                    <p>
                        We do not sell your personal data to advertisers. However, we share data with trusted third-party service providers solely to operate our app:
                    </p>
                    <ul>
                        <li><strong>Google Firebase:</strong> Used for secure user authentication and database management.</li>
                        <li><strong>Google Analytics:</strong> Used to understand how users interact with the app so we can improve features.</li>
                        <li><strong>Razorpay:</strong> We use a third-party payment processor for subscription payments. We do not store your credit card or banking details on our servers; this data is handled securely by the payment processor under their own privacy policy.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data Retention & Deletion</h2>
                    <p>
                        <strong>Retention:</strong> We retain your learning data as long as your account is active to maintain your study progress.
                    </p>
                    <p>
                        <strong>Deletion:</strong> You have the right to request the deletion of your account and all associated data. You can do this within the app settings or by contacting us at the email below. Upon request, data is permanently removed within 30 days, except where retention is required by law.
                    </p>
                </section>

                <section>
                    <h2>5. Data Security</h2>
                    <p>
                        We use industry-standard encryption (SSL/TLS) to protect your data during transmission. Your personal information is stored on secure servers provided by Google Cloud/Firebase.
                    </p>
                </section>

                <section>
                    <h2>6. Children's Privacy</h2>
                    <p>
                        Our services are intended for individuals preparing for competitive exams (UPSC). We do not knowingly collect data from children under the age of 13. If you are a parent and believe your child has provided us with data, please contact us immediately.
                    </p>
                </section>

                <section>
                    <h2>7. Contact Us & Grievance Redressal</h2>
                    <p>
                        If you have questions about this policy or wish to exercise your data rights, please contact our Grievance Officer:
                    </p>
                    <ul>
                        <li><strong>Name:</strong> Akanksha Ramakrishna</li>
                        <li><strong>Email:</strong> support@yaadai.in</li>
                        <li><strong>Address:</strong> Bengaluru, India</li>
                    </ul>
                </section>

                <p className="last-updated">Last Updated: February 14, 2026</p>
            </div>
        </div>
    )
}

export default PrivacyPolicy
