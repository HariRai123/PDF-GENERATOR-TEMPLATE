import React from 'react';
import './Pricing.css';

function Card({ title, description, features, buttonText, onButtonClick }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn-primary" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}

function Pricing() {
  const freeFeatures = ["PDF Compress", "PDF Merge", "PDF Split"];
  const basicFeatures= ["PDF Compress", "PDF Merge", "PDF Split","PDF Convert"];
  const proFeatures = ["PDF Compress", "PDF Merge", "PDF Split", "PDF Convert", "PDF Annotate"];
  const proplusFeatures = ["PDF Compress", "PDF Merge", "PDF Split", "PDF Convert", "PDF Annotate","PDF Unlocking"];
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="card-grid">
        <Card
          title="Free"
          description="Get started with our free PDF tools"
          features={freeFeatures}
          buttonText="Try for Free"
          onButtonClick={() => alert('Free Plan Selected')}
        />
        
        <Card
          title="Basic"
          description="Get started with our basic PDF tools"
          features={basicFeatures}
          buttonText="Get Basic"
          onButtonClick={() => alert('Basic Plan Selected')}
        />
        <Card
          title="Pro"
          description="Unlock advanced features for your business"
          features={proFeatures}
          buttonText="Get Pro"
          onButtonClick={() => alert('Pro Plan Selected')}
        />
        <Card
          title="Pro Plus"
          description="Unlock very advanced features with an uninteruption"
          features={proplusFeatures}
          buttonText="Get ProPlus"
          onButtonClick={() => alert('ProPlus Plan Selected')}
        />
      </div>
    </section>
  );
}

export default Pricing;
