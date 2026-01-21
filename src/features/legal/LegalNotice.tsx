import styles from "./LegalNotice.module.css";

export default function LegalNotice() {
  return (
    <main className={styles.legalNotice}>
      <div className={styles.container}>
        <h1>Mentions légales</h1>

        <section>
          <p>
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
            pour la confiance dans l'économie numérique, il est précisé aux
            utilisateurs du site www.ecdconciergerie.fr l'identité des
            différents intervenants dans le cadre de sa réalisation et de son
            suivi.
          </p>
        </section>

        <section>
          <h2>Éditeur du site</h2>
          <p>
            Le site accessible à l'adresse www.ecdconciergerie.fr est conçu et
            édité par :
          </p>
          <div className={styles.infoParagraph}>
            <strong>SAS Effet Coup de Cœur – Conciergerie</strong>
            <br />
            Société par actions simplifiée au capital de 1 000 €
            <br />
            Immatriculée au Registre du Commerce et des Sociétés de Tours sous
            le numéro 999 599 541 RCS Tours
            <br />
            Siège social : 28 rue du Vieux Bourg, 37390 Notre-Dame-d'Oé
            <br />
            📧 Email :{" "}
            <a href="mailto:ecdconciergerie@gmail.com">
              ecdconciergerie@gmail.com
            </a>
            <br />
            📞 Téléphone : 06 82 11 76 25 / 06 75 88 41 03
          </div>
        </section>

        <section>
          <h2>Responsable de la publication</h2>
          <div className={styles.infoParagraph}>
            <strong>Madame Laura Marques</strong>
            <br />
            Présidente de la SAS Effet Coup de Cœur – Conciergerie
          </div>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <div className={styles.infoParagraph}>
            <strong>Hostinger</strong>
            <br />
            Société de services en ligne
            <br />
            Site : www.hostinger.fr
          </div>
        </section>

        <section>
          <h2>Conditions d'utilisation</h2>
          <p>
            L'utilisation du site www.ecdconciergerie.fr implique l'acceptation
            pleine et entière des conditions générales d'utilisation décrites
            ci-après.
          </p>
          <p>
            Ces conditions d'utilisation sont susceptibles d'être modifiées ou
            complétées à tout moment, les utilisateurs du site sont donc invités
            à les consulter de manière régulière.
          </p>
          <p>
            La SAS Effet Coup de Cœur – Conciergerie ne saurait être tenue
            responsable d'une mauvaise utilisation du site.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu du site www.ecdconciergerie.fr (textes,
            images, graphismes, logo, structure) est la propriété exclusive de
            la SAS Effet Coup de Cœur – Conciergerie, sauf mentions contraires.
          </p>
          <p>
            Les photographies utilisées proviennent de la banque d'images
            gratuites Unsplash.
          </p>
          <p>
            La conception et le développement du site ont été réalisés par Tony
            Marques. Le site est réalisé avec React et Typescript.
          </p>
          <p>
            L'identité visuelle et l'image de marque ont été créées par Jérémy
            Lemercier.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite sans l'autorisation
            écrite préalable de la Présidente de la SAS Effet Coup de Cœur –
            Conciergerie.
          </p>
          <p>
            Toute création de lien hypertexte vers le site
            www.ecdconciergerie.fr est soumise à l'autorisation préalable de la
            SAS Effet Coup de Cœur – Conciergerie.
          </p>
        </section>

        <section>
          <h2>Données personnelles</h2>
          <p>
            Les informations recueillies via le site www.ecdconciergerie.fr
            (formulaire de contact, adresse email) sont enregistrées par la SAS
            Effet Coup de Cœur – Conciergerie afin de répondre aux demandes des
            utilisateurs.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), les utilisateurs disposent d'un droit d'accès, de
            rectification, d'opposition et de suppression des données les
            concernant.
          </p>
          <p>
            Ces droits peuvent être exercés en adressant une demande à :{" "}
            <a href="mailto:ecdconciergerie@gmail.com">
              ecdconciergerie@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
