import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <main className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1>Politique de confidentialité – RGPD</h1>
        <p className={styles.effectiveDate}>Date d'entrée en vigueur : 01/09/2024</p>

        <section>
          <p>
            La présente politique de confidentialité a pour objet d'informer les
            utilisateurs du site www.ecdconciergerie.fr des modalités de
            collecte, d'utilisation et de protection de leurs données à caractère
            personnel, conformément au Règlement Général sur la Protection des
            Données (RGPD) et à la loi n°78-17 du 6 janvier 1978 modifiée.
          </p>
        </section>

        <section>
          <h2>1. Nature des données à caractère personnel</h2>
          <p>
            Lors de l'utilisation du site www.ecdconciergerie.fr, nous pouvons
            être amenés à collecter des données à caractère personnel vous
            concernant. Le terme « données à caractère personnel » désigne toute
            information permettant d'identifier une personne physique, notamment :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Données relatives aux échanges et interactions via le site</li>
            <li>Toute autre information que vous choisissez de nous communiquer volontairement</li>
          </ul>
        </section>

        <section>
          <h2>2. Objet de la charte</h2>
          <p>
            La présente charte a pour objet de vous informer sur les moyens mis
            en œuvre pour collecter et traiter vos données à caractère personnel
            dans le respect de vos droits. Nous nous engageons à respecter la
            réglementation applicable en matière de protection des données
            personnelles.
          </p>
        </section>

        <section>
          <h2>3. Identité du responsable du traitement</h2>
          <p>Le responsable de la collecte et du traitement des données à caractère personnel est :</p>
          <div className={styles.infoParagraph}>
            <strong>SAS Effet Coup de Cœur – Conciergerie</strong>
            <br />
            Société par actions simplifiée (SAS)
            <br />
            Immatriculée au RCS de Tours sous le numéro 999 599 541
            <br />
            Siège social : 28 rue du Vieux Bourg, 37390 Notre-Dame-d'Oé
          </div>
        </section>

        <section>
          <h2>4. Collecte et traitement des données</h2>
          <p>
            Les données personnelles collectées via le formulaire de contact du
            site sont utilisées exclusivement pour la gestion et le suivi des
            demandes. Les champs obligatoires sont :
          </p>
          <ul>
            <li>Nom</li>
            <li>Prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
          </ul>
          <p>
            Ces informations sont enregistrées dans un fichier clients uniquement
            accessible par l'équipe de la SAS Effet Coup de Cœur – Conciergerie.
          </p>
          <p>
            Les données collectées peuvent être transmises à des prestataires ou
            sous-traitants liés par contrat, uniquement dans le cadre de
            l'exécution de services nécessaires à la gestion des demandes. Aucune
            autorisation préalable n'est requise à cet effet. Vous pouvez toutefois
            vous opposer à ce transfert en adressant votre demande à : {" "}
            <a href="mailto:ecdconciergerie@gmail.com">ecdconciergerie@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>5. Droits d'accès, de rectification et de suppression</h2>
          <p>
            Conformément à la loi n°78-17 du 6 janvier 1978 modifiée, vous
            disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul>
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit de suppression</li>
            <li>Droit d'opposition</li>
          </ul>
          <p>
            Ces droits peuvent être exercés à tout moment en adressant une demande
            par e-mail à : {" "}
            <a href="mailto:ecdconciergerie@gmail.com">ecdconciergerie@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>6. Durée de conservation des données</h2>
          <div className={styles.subSection}>
            <h3>Données clients et prospects</h3>
            <p>
              Les données personnelles sont conservées uniquement pendant la durée
              strictement nécessaire à la gestion de la relation commerciale. Les
              données nécessaires à l'établissement de la preuve d'un droit ou d'un
              contrat sont conservées conformément aux obligations légales en vigueur.
            </p>
          </div>
          <div className={styles.subSection}>
            <h3>Prospection commerciale</h3>
            <ul>
              <li>Données clients : conservées 3 ans à compter de la fin de la relation commerciale</li>
              <li>Données prospects non-clients : conservées 3 ans à compter de leur collecte ou du dernier contact</li>
            </ul>
            <p>
              À l'issue de ce délai, nous pourrons reprendre contact afin de savoir si
              vous souhaitez continuer à recevoir des sollicitations commerciales.
            </p>
          </div>
          <div className={styles.subSection}>
            <h3>Listes d'opposition</h3>
            <p>Les données relatives à l'exercice du droit d'opposition sont conservées pendant au minimum 3 ans.</p>
          </div>
          <div className={styles.subSection}>
            <h3>Statistiques de mesure d'audience</h3>
            <p>Les données de fréquentation et de traçabilité ne sont pas conservées au-delà de 6 mois.</p>
          </div>
        </section>

        <section>
          <h2>7. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles
            appropriées afin de garantir la sécurité, l'intégrité et la
            confidentialité de vos données personnelles, et d'empêcher tout accès non
            autorisé, altération ou divulgation.
          </p>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            Un cookie est un traceur permettant d'analyser le comportement des
            internautes lors de leur navigation. On distingue notamment :
          </p>
          <ul>
            <li>Cookies techniques : nécessaires au bon fonctionnement du site</li>
            <li>Cookies publicitaires : utilisés pour proposer des contenus ou publicités ciblés</li>
          </ul>
          <p>
            Le site www.ecdconciergerie.fr n'utilise actuellement aucun cookie. Si
            l'utilisation de cookies devait être mise en place ultérieurement, les
            utilisateurs en seraient informés préalablement et auraient la
            possibilité de les désactiver. Le refus de certains cookies pourrait
            toutefois affecter le bon fonctionnement du site.
          </p>
          <p>
            Certaines informations techniques standards peuvent néanmoins être
            collectées automatiquement par l'hébergeur du site à des fins
            statistiques et de sécurité.
          </p>
        </section>

        <section>
          <h2>9. Responsabilités</h2>
          <p>
            Les informations présentes sur le site www.ecdconciergerie.fr sont mises
            à jour régulièrement. Toutefois, si des erreurs ou omissions sont
            constatées, merci de les signaler par e-mail à {" "}
            <a href="mailto:ecdconciergerie@gmail.com">ecdconciergerie@gmail.com</a> en
            précisant le problème rencontré.
          </p>
          <p>
            L'utilisateur est seul responsable de son matériel de connexion et de la
            protection de ses données lors de la navigation sur Internet. Tout contenu
            téléchargé depuis le site l'est aux risques et périls de l'utilisateur.
          </p>
          <p>
            La SAS Effet Coup de Cœur – Conciergerie ne saurait être tenue responsable
            des dommages éventuels subis par les équipements de l'utilisateur. Les
            liens hypertextes présents sur le site renvoyant vers des sites tiers
            n'engagent en aucun cas la responsabilité de la société.
          </p>
          <p>
            La société ne pourra être tenue responsable en cas de poursuites
            judiciaires résultant :
          </p>
          <ul>
            <li>De l'utilisation du site ou de services accessibles via Internet</li>
            <li>Du non-respect des présentes conditions par l'utilisateur</li>
          </ul>
          <p>
            En cas de procédure amiable ou judiciaire engagée à l'encontre de la
            société du fait de l'utilisation du site, celle-ci se réserve le droit de
            se retourner contre l'utilisateur afin d'obtenir réparation de l'ensemble
            des préjudices subis.
          </p>
        </section>
      </div>
    </main>
  );
}
