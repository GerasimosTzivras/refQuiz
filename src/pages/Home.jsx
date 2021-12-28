import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from "@ionic/react";
import styles from "./Home.module.scss";

import { informationCircleOutline } from "ionicons/icons";

const Home = () => {
  const [show, hide] = useIonActionSheet();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <img
                src="/assets/main2.png"
                alt="title"
                className={styles.title}
              />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonRow className={styles.buttons}>
          <IonCol size="12">
            <IonButton
              routerLink="/quiz"
              expand="block"
              className={styles.playButton}
            >
              Σφυριξε την εναρξη
            </IonButton>

            <IonButton
              className={styles.helpButton}
              onClick={() =>
                show({
                  buttons: [{ text: "Close" }],
                  header: "Πώς να παίξω;",
                  subHeader:
                    "Διάλεξε μια κατηγορία και τη δυσκολία και μετά άρχισε να απαντάς κάθε ερώτηση.",
                })
              }
            >
              <IonIcon icon={informationCircleOutline} /> Βοήθεια
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
