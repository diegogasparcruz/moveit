import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExpirienceBar } from "../components/ExpirienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExpirienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div></div>
      </section>
    </div>
  );
}
