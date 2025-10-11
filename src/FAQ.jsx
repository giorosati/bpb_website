import React from 'react';

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What bookkeeping services do you provide?",
      answer: "We offer comprehensive bookkeeping services including monthly financial record keeping, account reconciliation, financial reports, and payroll processing. We help maintain accurate records of all your business transactions and provide detailed insights into your financial health."
    },
    {
      id: 2,
      question: "How often should I have my books updated?",
      answer: "We recommend monthly bookkeeping updates to ensure your financial records stay current and accurate. This allows for timely financial reporting, better cash flow management, and easier preparation for quarterly and annual filings."
    },
    {
      id: 3,
      question: "What information do I need to provide to get started?",
      answer: "To begin, we'll need access to your bank statements, credit card statements, receipts, invoices, payroll records, and any existing financial records. We'll also need information about your business structure and accounting preferences."
    },
    {
      id: 4,
      question: "What accounting software do you work with?",
      answer: "We exclusively work with QuickBooks Online because we believe it's the best choice for the vast majority of entrepreneurs and small businesses. QuickBooks Online offers excellent features, reliability, cloud accessibility, and integrations that help streamline your business operations. This focused approach allows us to provide expert-level service and deeper insights into your financial data."
    },
    {
      id: 5,
      question: "What about integrations with Shopify, PayPal, etc.?",
      answer: "We will properly configure and process all third-party payment system integrations including Shopify, PayPal, Stripe, Square, and other popular platforms. These integrations are essential for accurate bookkeeping and we ensure all transactions from your various payment systems are correctly categorized and reconciled in your QuickBooks Online account, giving you a complete picture of your business finances."
    },
    {
      id: 6,
      question: "How much do your bookkeeping services cost?",
      answer: "Our pricing depends on the complexity and volume of your business transactions, the services you need, and how frequently you require updates. We offer competitive rates and provide customized quotes after understanding your specific requirements. Contact us for a free consultation to discuss pricing."
    },
    {
      id: 7,
      question: "Can you help me catch up on backlogged bookkeeping?",
      answer: "Absolutely! We specialize in cleanup services for businesses that have fallen behind on their bookkeeping. We can organize and input historical data, reconcile accounts, and get your books current so you can move forward with confidence."
    },
    {
      id: 8,
      question: "What types of financial reports will I receive?",
      answer: "We provide essential financial reports including Profit & Loss statements, Balance Sheets, Cash Flow statements, and customized reports based on your business needs. These reports help you understand your financial position and make informed business decisions."
    },
    {
      id: 9,
      question: "How do you ensure the security of my financial information?",
      answer: "We take data security seriously and use encrypted file transfers, secure cloud-based accounting software, and follow strict confidentiality protocols. All team members sign confidentiality agreements, and we maintain professional liability insurance."
    },
    {
      id: 10,
      question: "Can you help with payroll processing?",
      answer: "Yes, we offer comprehensive payroll services including calculating wages, processing payroll taxes, filing payroll tax returns, and ensuring compliance with federal and state requirements. We can handle everything from a few employees to larger teams."
    },
    {
      id: 11,
      question: "How quickly can you get my books organized and up to date?",
      answer: "The timeline depends on the volume of transactions and how far behind your books are. Simple monthly updates typically take a few days, while extensive cleanup projects often take a few weeks or longer. We'll provide a realistic timeline after reviewing your specific situation during our consultation."
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Find answers to common questions about our bookkeeping services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>We're here to help! Schedule a free consultation to discuss your specific bookkeeping needs.</p>
          <a href="https://calendar.app.google/yZGeZbTnWyCTyr5N6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
            Book Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

export default FAQ;