import styles from '../styles.module.scss';

export default function App() {
  return (
    <section className={styles.testimonial}>
      <div className={styles['testimonial-wrapper']}>
        <img
          src="https://randomuser.me/api/portraits/women/48.jpg"
          alt="Tammy Stevens"
          className={styles['testimonial-avatar']}
        />
        <div>
          <p className={styles['testimonial-quote']}>
            This is one of the best developer blogs on the planet! I read it
            daily to improve my skills.
          </p>
        </div>
        <p className={styles.testimonial__test} >
          Tammy Stevens
          <span className={styles.testimonial__test}> · Front End Developer</span>
        </p>
      </div>
    </section>
  );
}