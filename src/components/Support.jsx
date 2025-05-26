import { useState } from "react";

const Support = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentStep, setCurrentStep] = useState('donation'); 
    const [donationData, setDonationData] = useState({
        amount: '',
        customAmount: '',
        message: '',
        name: '',
        email: '',
        isAnonymous: false
    });
    const [paymentData, setPaymentData] = useState({
        method: 'credit-card',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
    });
    const [invoiceId, setInvoiceId] = useState('');

    const predefinedAmounts = [10, 25, 50, 100, 250];
    const paymentMethods = [
        { id: 'credit-card', name: 'Credit Card', icon: 'bx-credit-card' },
        { id: 'paypal', name: 'PayPal', icon: 'bxl-paypal' },
        { id: 'stripe', name: 'Stripe', icon: 'bx-money' },
        { id: 'bank', name: 'Bank Transfer', icon: 'bx-building-house' }
    ];

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        if (donationData.amount || donationData.customAmount) {
            setCurrentStep('payment');
        }
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setCurrentStep('processing');
        
        setTimeout(() => {
            const newInvoiceId = 'INV-' + Date.now().toString().slice(-8);
            setInvoiceId(newInvoiceId);
            setCurrentStep('invoice');
        }, 3000);
    };

    const handleInvoiceClose = () => {
        setCurrentStep('thanks');
    };

    const resetModal = () => {
        setCurrentStep('donation');
        setDonationData({
            amount: '',
            customAmount: '',
            message: '',
            name: '',
            email: '',
            isAnonymous: false
        });
        setPaymentData({
            method: 'credit-card',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            cardName: ''
        });
        setInvoiceId('');
        setShowModal(false);
    };

    const getFinalAmount = () => {
        return donationData.customAmount || donationData.amount;
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <>
            <style jsx>{`
                .support-btn {
                    position: fixed;
                    bottom: 30px;
                    left: 30px;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    z-index: 1000;
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .support-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
                }
                
                .support-btn::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    animation: pulse 2s infinite;
                    z-index: -1;
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    70% { transform: scale(1.4); opacity: 0; }
                    100% { transform: scale(1.4); opacity: 0; }
                }
                
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    animation: fadeIn 0.3s ease;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .modal-content {
                    background: white;
                    border-radius: 20px;
                    width: 100%;
                    max-width: 500px;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    animation: slideUp 0.3s ease;
                }
                
                @keyframes slideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .modal-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 2rem;
                    text-align: center;
                    border-radius: 20px 20px 0 0;
                    position: relative;
                }
                
                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .modal-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: rotate(90deg);
                }
                
                .modal-body {
                    padding: 2rem;
                }
                
                .step-indicator {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2rem;
                    gap: 1rem;
                }
                
                .step-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #e9ecef;
                    transition: all 0.3s ease;
                }
                
                .step-dot.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    transform: scale(1.2);
                }
                
                .amount-options {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .amount-btn {
                    padding: 12px;
                    border: 2px solid #e9ecef;
                    background: white;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    font-weight: 600;
                }
                
                .amount-btn:hover,
                .amount-btn.selected {
                    border-color: #667eea;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    transform: translateY(-2px);
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                
            
                .form-control {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e9ecef;
                    border-radius: 10px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }
                
                .form-control:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }
                
                .checkbox-group {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .payment-methods {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                
                .payment-method {
                    padding: 1rem;
                    border: 2px solid #e9ecef;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                
                .payment-method:hover,
                .payment-method.selected {
                    border-color: #667eea;
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                }
                
                .payment-icon {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    color: #667eea;
                }
                
                .btn-primary {
                    width: 100%;
                    padding: 15px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border: none;
                    color: white;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
                }
                
                .btn-secondary {
                    width: 100%;
                    padding: 12px;
                    background: transparent;
                    border: 2px solid #667eea;
                    color: #667eea;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                }
                
                .btn-secondary:hover {
                    background: #667eea;
                    color: white;
                }
                
                .processing-animation {
                    text-align: center;
                    padding: 3rem 0;
                }
                
                .spinner {
                    width: 60px;
                    height: 60px;
                    border: 4px solid #e9ecef;
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1.5rem;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .invoice-container {
                    background: #f8f9fa;
                    border-radius: 10px;
                    padding: 2rem;
                    margin-bottom: 1.5rem;
                }
                
                .invoice-header {
                    text-align: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 2px dashed #dee2e6;
                }
                
                .invoice-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #dee2e6;
                }
                
                .invoice-total {
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: #667eea;
                    border-bottom: none;
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 2px solid #667eea;
                }
                
                .thanks-card {
                    text-align: center;
                    padding: 2rem 0;
                }
                
                .thanks-icon {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 3rem;
                    margin: 0 auto 1.5rem;
                    animation: bounce 0.5s ease;
                }
                
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                }
                
                .thanks-message {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-radius: 15px;
                    padding: 2rem;
                    margin: 2rem 0;
                    border-left: 4px solid #667eea;
                }
            `}</style>

      
            <button 
                className="support-btn" data-bs-toggle="tooltip"
                onClick={() => setShowModal(true)}
                title="Support Developer"
            >
                <i className="bx bx-heart"></i>
            </button>

          
            {showModal && (
                <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && resetModal()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="modal-close" onClick={resetModal}>
                                <i className="bx bx-x"></i>
                            </button>
                            <h2>
                                <i className="bx bx-heart me-2"></i>
                                Support My Work
                            </h2>
                            <p style={{ margin: 0, opacity: 0.9 }}>
                                Help me continue creating amazing web experiences
                            </p>
                        </div>

                        <div className="modal-body">
                        
                            <div className="step-indicator">
                                <div className={`step-dot ${currentStep === 'donation' ? 'active' : ''}`}></div>
                                <div className={`step-dot ${currentStep === 'payment' ? 'active' : ''}`}></div>
                                <div className={`step-dot ${currentStep === 'processing' ? 'active' : ''}`}></div>
                                <div className={`step-dot ${currentStep === 'invoice' ? 'active' : ''}`}></div>
                                <div className={`step-dot ${currentStep === 'thanks' ? 'active' : ''}`}></div>
                            </div>

                            {currentStep === 'donation' && (
                                <form onSubmit={handleDonationSubmit}>
                                    <h4 className="mb-3">Choose Your Support Amount</h4>
                                    
                                    <div className="amount-options">
                                        {predefinedAmounts.map(amount => (
                                            <button
                                                key={amount}
                                                type="button"
                                                className={`amount-btn ${donationData.amount === amount ? 'selected' : ''}`}
                                                onClick={() => setDonationData({...donationData, amount, customAmount: ''})}
                                            >
                                                ${amount}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter custom amount"
                                            value={donationData.customAmount}
                                            onChange={(e) => setDonationData({...donationData, customAmount: e.target.value, amount: ''})}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            value={donationData.name}
                                            onChange={(e) => setDonationData({...donationData, name: e.target.value})}
                                            required={!donationData.isAnonymous}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={donationData.email}
                                            onChange={(e) => setDonationData({...donationData, email: e.target.value})}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="anonymous"
                                                checked={donationData.isAnonymous}
                                                onChange={(e) => setDonationData({...donationData, isAnonymous: e.target.checked})}
                                            />
                                            <label htmlFor="anonymous">Make this donation anonymous</label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Leave a message of support..."
                                            value={donationData.message}
                                            onChange={(e) => setDonationData({...donationData, message: e.target.value})}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary">
                                        Continue to Payment
                                    </button>
                                </form>
                            )}

                     
                            {currentStep === 'payment' && (
                                <form onSubmit={handlePaymentSubmit}>
                                    <h4 className="mb-3">Payment Details</h4>
                                    
                                    <div className="form-group">
                                        <label className="form-label">Amount to Pay</label>
                                        <div style={{ 
                                            fontSize: '2rem', 
                                            fontWeight: 'bold', 
                                            color: '#667eea',
                                            textAlign: 'center',
                                            padding: '1rem',
                                            background: '#f8f9fa',
                                            borderRadius: '10px',
                                            marginBottom: '1.5rem'
                                        }}>
                                            {formatCurrency(getFinalAmount())}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="payment-methods">
                                            {paymentMethods.map(method => (
                                                <div
                                                    key={method.id}
                                                    className={`payment-method ${paymentData.method === method.id ? 'selected' : ''}`}
                                                    onClick={() => setPaymentData({...paymentData, method: method.id})}
                                                >
                                                    <div className="payment-icon">
                                                        <i className={`bx ${method.icon}`}></i>
                                                    </div>
                                                    <div>{method.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {paymentData.method === 'credit-card' && (
                                        <>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="1234 5678 9012 3456"
                                                    value={paymentData.cardNumber}
                                                    onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                                                    required
                                                />
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="MM/YY"
                                                        value={paymentData.expiryDate}
                                                        onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="123"
                                                        value={paymentData.cvv}
                                                        onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="John Doe"
                                                    value={paymentData.cardName}
                                                    onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                                                    required
                                                />
                                            </div>
                                        </>
                                    )}

                                    <button type="submit" className="btn-primary">
                                        <i className="bx bx-lock-alt me-2"></i>
                                        Complete Payment
                                    </button>

                                    <button 
                                        type="button" 
                                        className="btn-secondary"
                                        onClick={() => setCurrentStep('donation')}
                                    >
                                        Back to Donation
                                    </button>
                                </form>
                            )}

                      
                            {currentStep === 'processing' && (
                                <div className="processing-animation">
                                    <div className="spinner"></div>
                                    <h4>Processing Payment...</h4>
                                    <p className="text-muted">Please wait while we process your donation securely.</p>
                                </div>
                            )}

                            {currentStep === 'invoice' && (
                                <div>
                                    <h4 className="mb-3 text-center">Payment Successful!</h4>
                                    
                                    <div className="invoice-container">
                                        <div className="invoice-header">
                                            <h5>DONATION RECEIPT</h5>
                                            <p className="text-muted">Invoice #{invoiceId}</p>
                                            <p className="text-muted">{new Date().toLocaleDateString()}</p>
                                        </div>

                                        <div className="invoice-item">
                                            <span>Donor Name:</span>
                                            <span>{donationData.isAnonymous ? 'Anonymous' : donationData.name}</span>
                                        </div>

                                        <div className="invoice-item">
                                            <span>Email:</span>
                                            <span>{donationData.email}</span>
                                        </div>

                                        <div className="invoice-item">
                                            <span>Payment Method:</span>
                                            <span>{paymentMethods.find(m => m.id === paymentData.method)?.name}</span>
                                        </div>

                                        <div className="invoice-item">
                                            <span>Donation Amount:</span>
                                            <span>{formatCurrency(getFinalAmount())}</span>
                                        </div>

                                        <div className="invoice-item">
                                            <span>Processing Fee:</span>
                                            <span>$0.00</span>
                                        </div>

                                        <div className="invoice-item invoice-total">
                                            <span>Total Paid:</span>
                                            <span>{formatCurrency(getFinalAmount())}</span>
                                        </div>

                                        {donationData.message && (
                                            <div style={{ marginTop: '1rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
                                                <strong>Message:</strong>
                                                <p style={{ margin: '0.5rem 0 0 0', fontStyle: 'italic' }}>"{donationData.message}"</p>
                                            </div>
                                        )}
                                    </div>

                                    <button className="btn-primary" onClick={handleInvoiceClose}>
                                        Continue
                                    </button>
                                </div>
                            )}

                   
                            {currentStep === 'thanks' && (
                                <div className="thanks-card">
                                    <div className="thanks-icon">
                                        <i className="bx bx-heart"></i>
                                    </div>

                                    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>
                                        Thank You So Much! 🎉
                                    </h3>

                                    <div className="thanks-message">
                                        <h5 style={{ color: '#667eea', marginBottom: '1rem' }}>
                                            Dear {donationData.isAnonymous ? 'Anonymous Supporter' : donationData.name},
                                        </h5>
                                        
                                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                                            Your generous donation of <strong>{formatCurrency(getFinalAmount())}</strong> means 
                                            the world to me! Your support helps me continue developing high-quality web 
                                            applications and sharing knowledge with the developer community.
                                        </p>

                                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                                            Thanks to supporters like you, I can:
                                        </p>

                                        <ul style={{ textAlign: 'left', margin: '1rem 0', paddingLeft: '1.5rem' }}>
                                            <li>Keep improving my portfolio and projects</li>
                                            <li>Create more open-source contributions</li>
                                            <li>Share tutorials and development resources</li>
                                            <li>Invest in better development tools and learning</li>
                                        </ul>

                                        <p style={{ lineHeight: '1.6', fontWeight: '600', color: '#2c3e50' }}>
                                            With gratitude,<br />
                                            Fajar Ramadhan 💜
                                        </p>
                                    </div>

                                    <button className="btn-primary" onClick={resetModal}>
                                        <i className="bx bx-check me-2"></i>
                                        Close
                                    </button>

                                    <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#6c757d' }}>
                                        <p>
                                            <i className="bx bx-info-circle me-1"></i>
                                            A receipt has been sent to your email address.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Support;