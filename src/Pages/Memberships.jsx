import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Memberships.module.css';

function Memberships() {
  return (
    <div className={styles.container}>
      <h1>Exclusive Memberships</h1>
      
      <div className={styles.membershipInfo}>
        <div className={styles.membershipTier}>
          <h2>Basic Membership</h2>
          <p>Gain access to our standard collection of fashion and event photos, along with occasional member-only discounts on digital downloads and prints. Ideal for fashion enthusiasts wanting a glimpse into exclusive events.</p>
          <p><strong>Price:</strong> $9.99/month</p>
        </div>
        <div className={styles.membershipTier}>
          <h2>Premium Membership</h2>
          <p>Unlock all the benefits of Basic Membership, plus access to premium content including backstage photos, high-end runway shots, and early access to new releases. Get larger discounts on both digital and printed formats.</p>
          <p><strong>Price:</strong> $19.99/month</p>
        </div>
        <div className={styles.membershipTier}>
          <h2>Elite Membership</h2>
          <p>The ultimate experience for true fashion aficionados. Enjoy everything in Premium Membership, with additional perks such as exclusive behind-the-scenes content, private photo sessions, and top-tier discounts on all formats. Be the first to receive invitations to exclusive fashion events and sales.</p>
          <p><strong>Price:</strong> $49.99/month</p>
        </div>
      </div>
      
      <div className={styles.activitiesContainer}>
        <div className={styles.activityCircle}>Exclusive Content</div>
        <div className={styles.activityCircle}>VIP Events</div>
        <div className={styles.activityCircle}>Personalized Shoots</div>
        <div className={styles.activityCircle}>Priority Releases</div>
        <div className={styles.activityCircle}>Behind the Scenes</div>
        <div className={styles.activityCircle}>Early Access Sales</div>
        <div className={styles.activityCircle}>Special Discounts</div>
      </div>

      <div className={styles.buttonsContainer}>
        <Link to="/login" className={styles.linkButton}>Login</Link>
        <Link to="/signup" className={styles.linkButton}>Sign Up</Link>
      </div>

    </div>
  );
}

export default Memberships;
