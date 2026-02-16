import React, { useEffect } from 'react'
import './TermsAndConditions.css'

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Terms & Conditions</h1>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By downloading or using Yaad AI, you agree to be bound by these terms. If you do not agree, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2>2. Eligibility</h2>
                    <p>
                        You must be at least 18 years old to use this service, or use it under the supervision of a parent or guardian.
                    </p>
                </section>

                <section>
                    <h2>3. Intellectual Property</h2>
                    <p>
                        All content provided on Yaad AI, including question banks, study notes, algorithms, and logos, is the property of Yaad AI or its licensors. You are granted a limited license to use this content for personal study only. You may not copy, distribute, sell, or reproduce any content without our written permission.
                    </p>
                </section>

                <section>
                    <h2>4. User Conduct</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Attempt to reverse engineer the app.</li>
                        <li>Share your account credentials with others.</li>
                        <li>Use the app for any illegal activities under Indian law.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Payment & Refunds</h2>
                    <p>
                        Services are billed on a subscription and/or one-time basis.
                    </p>
                    <p>
                        <strong>Refund Policy:</strong> Refunds will be handled on a case-by-case basis. Please contact us at support@yaadai.in with your request and details. We reserve the right to approve or deny refund requests based on our assessment.
                    </p>
                </section>

                <section>
                    <h2>6. Disclaimer</h2>
                    <p>
                        Yaad AI is an educational tool. We do not guarantee specific results in the UPSC exam. Success depends on the user's individual effort. The app is provided "as is" without warranties of any kind.
                    </p>
                </section>

                <section>
                    <h2>7. Governing Law</h2>
                    <p>
                        These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru.
                    </p>
                </section>

                <p className="last-updated">Last Updated: February 14, 2026</p>
            </div>
        </div>
    )
}

export default TermsAndConditions
