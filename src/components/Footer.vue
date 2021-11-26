<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="row justify-center">
        <div class="footer-col">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#/" v-smooth-scroll>Home</a>
            </li>
            <li>
              <a href="#menu" v-smooth-scroll>Gallerie</a>
            </li>
            <li></li>
            <li>
              <a href="#Mapframe" v-smooth-scroll>Kontakt</a>
            </li>
            <li @click="dialogImpressum = true">
              <a href="#footer">Impressum</a>
            </li>
            <li @click="dialogAgb = true">
              <a href="#footer">Datenschutz</a>
            </li>
          </ul>
        </div>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <div class="footer-col">
          <!-- <h4>Folge Uns</h4> -->

          <a href="https://www.instagram.com/ibos_ocakbasi/" target="_blank">
            <lottie-animation
              ref="followusanimation"
              :animationData="require('../assets/Lottie/followus.json')"
              :loop="true"
              :autoPlay="true"
              :speed="1"
              :class="{
                followusanimation: windowWidth > 960,
                followusanimationHandy: windowWidth < 960,
              }"
            />
          </a>

          <!-- <a target="_blank" href="https://www.facebook.com/AluKNG/">
              <lottie-animation
                ref="anim"
                :animationData="require('../assets/Lottie/instagram.json')"
                :loop="true"
                :autoPlay="true"
                :speed="1"
                :class="{'followusanimation':windowWidth>960,'followusanimationHandy':windowWidth<960 }"
              />
          </a>-->
        </div>
      </div>
    </div>

    <!-- Dialog Impressum-->
    <div class="text-center">
      <v-dialog v-model="dialogImpressum" width="500">
        <v-card height="70%">
          <v-card-text class="py-10">
            <h3 class="mb-15">Impressum</h3>

            <p>
              Ibos Ocakbasi
              <br />Cranger Straße 333
              <br />45891 Gelsenkirchen
            </p>

            <h4 class="my-10">EU-Streitschlichtung</h4>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >https://ec.europa.eu/consumers/odr/</a>.
              <br />Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h4
              class="mb-10"
            >Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h4>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <p>
              Quelle:
              <a href="https://www.e-recht24.de">e-recht24.de</a>
            </p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialogImpressum = false">Verstanden</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- Dialog AGB-->
    <div class="text-center">
      <v-dialog v-model="dialogAgb" width="500">
        <v-card height="70%">
          <v-card-text class="py-10">
            <h1>Datenschutz&shy;erkl&auml;rung</h1>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen &Uuml;berblick
              dar&uuml;ber, was mit Ihren personenbezogenen Daten passieårt,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle
              Daten, mit denen Sie pers&ouml;nlich identifiziert werden
              k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
              Datenschutzerkl&auml;rung.
            </p>
            <h3>Datenerfassung auf dieser Website</h3>
            <h4>
              Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?
            </h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
              Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in
              dieser Datenschutzerkl&auml;rung entnehmen.
            </p>
            <h4>Wie erfassen wir Ihre Daten?</h4>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
              Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
              k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
              Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
              Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
              erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
              f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
              Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
              Aufsichtsbeh&ouml;rde zu.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
              Sie sich jederzeit an uns wenden.
            </p>
            <h2>2. Hosting</h2>
            <h3>Hosting mit All-Inkl</h3>
            <p>
              Wir hosten unsere Website bei All-Inkl. Anbieter ist die
              ALL-INKL.COM - Neue Medien M&uuml;nnich, Inh. Ren&eacute;
              M&uuml;nnich, Hauptstra&szlig;e 68, 02742 Friedersdorf
              (nachfolgend: All-Inkl). Details entnehmen Sie der
              Datenschutzerkl&auml;rung von All-Inkl:
              <a
                href="https://all-inkl.com/datenschutzinformationen/"
                target="_blank"
                rel="noopener noreferrer"
              >https://all-inkl.com/datenschutzinformationen/</a>.
            </p>
            <p>
              Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs.
              1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
              m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website.
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
              die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6
              Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <h4>Auftragsverarbeitung</h4>
            <p>
              Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) mit
              dem oben genannten Anbieter geschlossen. Hierbei handelt es sich
              um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
              gew&auml;hrleistet, dass dieser die personenbezogenen Daten
              unserer Websitebesucher nur nach unseren Weisungen und unter
              Einhaltung der DSGVO verarbeitet.
            </p>
            <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer
              pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerkl&auml;rung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
              Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche
              Daten wir erheben und wof&uuml;r wir sie nutzen. Sie
              erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail)
              Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
            </p>
            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
              dieser Website ist:
            </p>
            <p>
              &#91;Voller Namen bzw. die vollst&auml;ndige
              Unternehmensbezeichnung des Website-Betreibers sowie die
              vollst&auml;ndige Anschrift&#93;
            </p>
            <p>
              Telefon: &#91;Telefonnummer der verantwortlichen Stelle&#93;
              <br />E-Mail: &#91;E-Mail-Adresse der verantwortlichen Stelle&#93;
            </p>
            <p>
              Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
              Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
              und Mittel der Verarbeitung von personenbezogenen Daten
              (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
              speziellere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
              Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
              L&ouml;schersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
              sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
              f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben
              (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen);
              im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall
              dieser Gr&uuml;nde.
            </p>
            <h3>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
            <p>
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den
              USA oder sonstigen datenschutzrechtlich nicht sicheren
              Drittstaaten. Wenn diese Tools aktiv sind, k&ouml;nnen Ihre
              personenbezogene Daten in diese Drittstaaten &uuml;bertragen und
              dort verarbeitet werden. Wir weisen darauf hin, dass in diesen
              L&auml;ndern kein mit der EU vergleichbares Datenschutzniveau
              garantiert werden kann. Beispielsweise sind US-Unternehmen dazu
              verpflichtet, personenbezogene Daten an Sicherheitsbeh&ouml;rden
              herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich
              vorgehen k&ouml;nnten. Es kann daher nicht ausgeschlossen werden,
              dass US-Beh&ouml;rden (z.&nbsp;B. Geheimdienste) Ihre auf
              US-Servern befindlichen Daten zu &Uuml;berwachungszwecken
              verarbeiten, auswerten und dauerhaft speichern. Wir haben auf
              diese Verarbeitungst&auml;tigkeiten keinen Einfluss.
            </p>
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
              ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die
              Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
            </p>
            <h3>
              Widerspruchsrecht gegen die Datenerhebung in besonderen
              F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
              GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
              GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
              EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
              GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
              DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
              DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
              WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
              VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
              SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
              &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
              AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
              (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>
            <p>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG
              ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN
              DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
              ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
              PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG
              STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
              (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>
            <h3>
              Beschwerde&shy;recht bei der zust&auml;ndigen
              Aufsichts&shy;beh&ouml;rde
            </h3>
            <p>
              Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
              Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
              insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des
              mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
              unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>
            <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen,
              maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie
              die direkte &Uuml;bertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
              machbar ist.
            </p>
            <h3>Auskunft, L&ouml;schung und Berichtigung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
              Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten
              k&ouml;nnen Sie sich jederzeit an uns wenden.
            </p>
            <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
              jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
              Verarbeitung besteht in folgenden F&auml;llen:
            </p>
            <ul>
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
                Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
                der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
                der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
                verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
                Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
                Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben
                Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                Interessen vorgenommen werden. Solange noch nicht feststeht,
                wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </li>
            </ul>
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von
              ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung
              oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
              Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
              nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
              eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
              Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
              Cookies sind kleine Textdateien und richten auf Ihrem
              Endger&auml;t keinen Schaden an. Sie werden entweder
              vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
              Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf
              Ihrem Endger&auml;t gespeichert, bis Sie diese selbst
              l&ouml;schen&nbsp;oder eine automatische L&ouml;schung durch Ihren
              Webbrowser erfolgt.
            </p>
            <p>
              Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem
              Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten
              (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die
              Nutzung bestimmter Dienstleistungen des Drittunternehmens
              (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p>
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Websitefunktionen ohne diese
              nicht funktionieren w&uuml;rden (z.&nbsp;B. die Warenkorbfunktion
              oder die Anzeige von Videos). Andere Cookies dienen dazu, das
              Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.
            </p>
            <p>
              Cookies, die zur Durchf&uuml;hrung des elektronischen
              Kommunikationsvorgangs (notwendige Cookies) oder zur
              Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen
              (funktionale Cookies, z.&nbsp;B. f&uuml;r die Warenkorbfunktion)
              oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung
              des Webpublikums) erforderlich sind, werden auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
              Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Speicherung von Cookies zur
              technisch fehlerfreien und optimierten Bereitstellung seiner
              Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
              abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies
              ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber
              das Setzen von Cookies informiert werden und Cookies nur im
              Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte
              F&auml;lle oder generell ausschlie&szlig;en sowie das automatische
              L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers
              aktivieren. Bei der Deaktivierung von Cookies kann die
              Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
            </p>
            <p>
              Soweit Cookies von Drittunternehmen oder zu Analysezwecken
              eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser
              Datenschutzerkl&auml;rung gesondert informieren und ggf. eine
              Einwilligung abfragen.
            </p>
            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
              eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
              vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
              &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
              berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
              wurde.
            </p>
            <p>
              Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
              verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r
              die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
              abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
              Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
            </p>
            <h2>5. Soziale Medien</h2>
            <h3>Facebook Plugins (Like &amp; Share-Button)</h3>
            <p>
              Auf dieser Website sind Plugins des sozialen Netzwerks Facebook
              integriert. Anbieter dieses Dienstes ist die Facebook Ireland
              Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten
              Daten werden nach Aussage von Facebook jedoch auch in die USA und
              in andere Drittl&auml;nder &uuml;bertragen.
            </p>
            <p>
              Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem
              &bdquo;Like-Button&ldquo; (&bdquo;Gef&auml;llt mir&ldquo;) auf
              dieser Website. Eine &Uuml;bersicht &uuml;ber die Facebook Plugins
              finden Sie hier:
              <a
                href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
                target="_blank"
                rel="noopener noreferrer"
              >https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.
            </p>
            <p>
              Wenn Sie diese Website besuchen, wird &uuml;ber das Plugin eine
              direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server
              hergestellt. Facebook erh&auml;lt dadurch die Information, dass
              Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den
              Facebook &bdquo;Like-Button&ldquo; anklicken, w&auml;hrend Sie in
              Ihrem Facebook-Account eingeloggt sind, k&ouml;nnen Sie die
              Inhalte dieser Website auf Ihrem Facebook-Profil verlinken.
              Dadurch kann Facebook den Besuch dieser Website Ihrem
              Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als
              Anbieter der Seiten keine Kenntnis vom Inhalt der
              &uuml;bermittelten Daten sowie deren Nutzung durch Facebook
              erhalten. Weitere Informationen hierzu finden Sie in der
              Datenschutzerkl&auml;rung von Facebook unter:
              <a
                href="https://de-de.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
              >https://de-de.facebook.com/privacy/explanation</a>.
            </p>
            <p>
              Wenn Sie nicht w&uuml;nschen, dass Facebook den Besuch dieser
              Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich
              bitte aus Ihrem Facebook-Benutzerkonto aus.
            </p>
            <p>
              Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in
              den Sozialen Medien. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p>
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
              Daten auf unserer Website erfasst und an Facebook weitergeleitet
              werden, sind wir und die Facebook Ireland Limited, 4 Grand Canal
              Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam f&uuml;r
              diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die
              gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei
              ausschlie&szlig;lich auf die Erfassung der Daten und deren
              Weitergabe an Facebook. Die nach der Weiterleitung erfolgende
              Verarbeitung durch Facebook ist nicht Teil der gemeinsamen
              Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen
              wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung
              festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
              >https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der
              Datenschutzinformationen beim Einsatz des Facebook-Tools und
              f&uuml;r die datenschutzrechtlich sichere Implementierung des
              Tools auf unserer Website verantwortlich. F&uuml;r die
              Datensicherheit der Facebook-Produkte ist Facebook verantwortlich.
              Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der
              bei Facebook verarbeiteten Daten k&ouml;nnen Sie direkt bei
              Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns
              geltend machen, sind wir verpflichtet, diese an Facebook
              weiterzuleiten.
            </p>
            <p>
              Die Daten&uuml;bertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
              finden Sie hier:
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
              >https://www.facebook.com/legal/EU_data_transfer_addendum</a>,
              <a
                href="https://de-de.facebook.com/help/566994660333381"
                target="_blank"
                rel="noopener noreferrer"
              >https://de-de.facebook.com/help/566994660333381</a>
              und
              <a
                href="https://www.facebook.com/policy.php"
                target="_blank"
                rel="noopener noreferrer"
              >https://www.facebook.com/policy.php</a>.
            </p>
            <h3>Twitter Plugin</h3>
            <p>
              Auf dieser Website sind Funktionen des Dienstes Twitter
              eingebunden. Diese Funktionen werden angeboten durch die Twitter
              International Company, One Cumberland Place, Fenian Street, Dublin
              2, D02 AX07, Irland. Durch das Benutzen von Twitter und der
              Funktion &bdquo;Re-Tweet&ldquo; werden die von Ihnen besuchten
              Websites mit Ihrem Twitter-Account verkn&uuml;pft und anderen
              Nutzern bekannt gegeben. Dabei werden auch Daten an Twitter
              &uuml;bertragen. Wir weisen darauf hin, dass wir als Anbieter der
              Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten
              sowie deren Nutzung durch Twitter erhalten. Weitere Informationen
              hierzu finden Sie in der Datenschutzerkl&auml;rung von Twitter
              unter:
              <a
                href="https://twitter.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >https://twitter.com/de/privacy</a>.
            </p>
            <p>
              Die Verwendung des Twitter-Plugins erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in
              den Sozialen Medien. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p>
              Die Daten&uuml;bertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
              finden Sie hier:
              <a
                href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html"
                target="_blank"
                rel="noopener noreferrer"
              >https://gdpr.twitter.com/en/controller-to-controller-transfers.html</a>.
            </p>
            <p>
              Ihre Datenschutzeinstellungen bei Twitter k&ouml;nnen Sie in den
              Konto-Einstellungen unter
              <a
                href="https://twitter.com/account/settings"
                target="_blank"
                rel="noopener noreferrer"
              >https://twitter.com/account/settings</a>
              &auml;ndern.
            </p>
            <h3>Instagram Plugin</h3>
            <p>
              Auf dieser Website sind Funktionen des Dienstes Instagram
              eingebunden. Diese Funktionen werden angeboten durch die Facebook
              Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin
              2, Irland integriert.
            </p>
            <p>
              Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k&ouml;nnen
              Sie durch Anklicken des Instagram-Buttons die Inhalte dieser
              Website mit Ihrem Instagram-Profil verlinken. Dadurch kann
              Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen.
              Wir weisen darauf hin, dass wir als Anbieter der Seiten keine
              Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren
              Nutzung durch Instagram erhalten.
            </p>
            <p>
              Die Speicherung und Analyse der Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an einer m&ouml;glichst umfangreichen
              Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO;
              die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
              Daten auf unserer Website erfasst und an Facebook bzw. Instagram
              weitergeleitet werden, sind wir und die Facebook Ireland Limited,
              4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
              gemeinsam f&uuml;r diese Datenverarbeitung verantwortlich (Art. 26
              DSGVO). Die gemeinsame Verantwortlichkeit beschr&auml;nkt sich
              dabei ausschlie&szlig;lich auf die Erfassung der Daten und deren
              Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung
              erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht
              Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
              Verpflichtungen wurden in einer Vereinbarung &uuml;ber gemeinsame
              Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden
              Sie unter:
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
              >https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der
              Datenschutzinformationen beim Einsatz des Facebook- bzw.
              Instagram-Tools und f&uuml;r die datenschutzrechtlich sichere
              Implementierung des Tools auf unserer Website verantwortlich.
              F&uuml;r die Datensicherheit der Facebook bzw. Instagram-Produkte
              ist Facebook verantwortlich. Betroffenenrechte (z.&nbsp;B.
              Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
              verarbeiteten Daten k&ouml;nnen Sie direkt bei Facebook geltend
              machen. Wenn Sie die Betroffenenrechte bei uns geltend machen,
              sind wir verpflichtet, diese an Facebook weiterzuleiten.
            </p>
            <p>
              Die Daten&uuml;bertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
              finden Sie hier:
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
              >https://www.facebook.com/legal/EU_data_transfer_addendum</a>,
              <a
                href="https://help.instagram.com/519522125107875"
                target="_blank"
                rel="noopener noreferrer"
              >https://help.instagram.com/519522125107875</a>
              und
              <a
                href="https://de-de.facebook.com/help/566994660333381"
                target="_blank"
                rel="noopener noreferrer"
              >https://de-de.facebook.com/help/566994660333381</a>.
            </p>
            <p>
              Weitere Informationen hierzu finden Sie in der
              Datenschutzerkl&auml;rung von Instagram:
              <a
                href="https://instagram.com/about/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >https://instagram.com/about/legal/privacy/</a>.
            </p>
            <h2>6. Plugins und Tools</h2>
            <h3>YouTube</h3>
            <p>
              Diese Website bindet Videos der Website YouTube ein. Betreiber der
              Website ist die Google Ireland Limited (&bdquo;Google&ldquo;),
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube
              eingebunden ist, wird eine Verbindung zu den Servern von YouTube
              hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche
              unserer Seiten Sie besucht haben.
            </p>
            <p>
              Des Weiteren kann YouTube verschiedene Cookies auf Ihrem
              Endger&auml;t speichern oder vergleichbare Technologien zur
              Wiedererkennung verwenden (z.&nbsp;B. Device-Fingerprinting). Auf
              diese Weise kann YouTube Informationen &uuml;ber Besucher dieser
              Website erhalten. Diese Informationen werden u. a. verwendet, um
              Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu
              verbessern und Betrugsversuchen vorzubeugen.
            </p>
            <p>
              Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
              erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
              pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie
              verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
            </p>
            <p>
              Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
              Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
              Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerkl&auml;rung von YouTube unter:
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >https://policies.google.com/privacy?hl=de</a>.
            </p>
            <h3>Google Web Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Web Fonts, die von Google bereitgestellt werden. Beim
              Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Web
              Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
              anzuzeigen.
            </p>
            <p>
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung
              zu den Servern von Google aufnehmen. Hierdurch erlangt Google
              Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse diese
              Website aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
              hat ein berechtigtes Interesse an der einheitlichen Darstellung
              des Schriftbildes auf seiner Website. Sofern eine entsprechende
              Einwilligung abgefragt wurde (z.&nbsp;B. eine Einwilligung zur
              Speicherung von Cookies), erfolgt die Verarbeitung
              ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO;
              die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Wenn Ihr Browser Web Fonts nicht unterst&uuml;tzt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>
            <p>
              Weitere Informationen zu Google Web Fonts finden Sie unter
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
              >https://developers.google.com/fonts/faq</a>
              und in der Datenschutzerkl&auml;rung von Google:
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >https://policies.google.com/privacy?hl=de</a>.
            </p>
            <h3>Font Awesome</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              und Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6
              Porter Road Apartment 3R, Cambridge, Massachusetts, USA.
            </p>
            <p>
              Beim Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten
              Fonts in ihren Browsercache, um Texte, Schriftarten und Symbole
              korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete
              Browser Verbindung zu den Servern von Font Awesome aufnehmen.
              Hierdurch erlangt Font Awesome Kenntnis dar&uuml;ber, dass
              &uuml;ber Ihre IP-Adresse diese Website aufgerufen wurde. Die
              Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
              einheitlichen Darstellung des Schriftbildes auf unserer Website.
              Sofern eine entsprechende Einwilligung abgefragt wurde (z.&nbsp;B.
              eine Einwilligung zur Speicherung von Cookies), erfolgt die
              Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Wenn Ihr Browser Font Awesome nicht unterst&uuml;tzt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>
            <p>
              Weitere Informationen zu Font Awesome finden Sie&nbsp;und in der
              Datenschutzerkl&auml;rung von Font Awesome unter:
              <a
                href="https://fontawesome.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >https://fontawesome.com/privacy</a>.
            </p>
            <h3>MyFonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Web Fonts von MyFonts Inc., 600 Unicorn Park Drive,
              Woburn, Massachusetts 01801 USA (nachfolgend: MyFonts). Hierbei
              handelt es sich um Schriftarten, die beim Aufrufen unserer Website
              in Ihren Browser geladen werden, um ein einheitliches Schriftbild
              bei der Webseitendarstellung zu gew&auml;hrleisten.
            </p>
            <p>
              Die Fonts sind lokal installiert. Eine Verbindung zu Servern von
              MyFonts findet dabei nicht statt. Der Einsatz der Fonts erfolgt
              auf Grundlage unseres berechtigten Interesses an einer
              einheitlichen Darstellung unserer Website (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
            <h3>Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
              Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
              IP-Adresse zu speichern. Diese Informationen werden in der Regel
              an einen Server von Google in den USA &uuml;bertragen und dort
              gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
              diese Daten&uuml;bertragung. Wenn Google Maps aktiviert ist, kann
              Google zum Zwecke der einheitlichen Darstellung der Schriftarten
              Google Web Fonts verwenden. Beim Aufruf von Google Maps l&auml;dt
              Ihr Browser die ben&ouml;tigten Web Fonts in ihren Browsercache,
              um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p>
              Die Nutzung von Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unserer Online-Angebote und an einer
              leichten Auffindbarkeit der von uns auf der Website angegebenen
              Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
              Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p>
              Die Daten&uuml;bertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
              finden Sie hier:
              <a
                href="https://privacy.google.com/businesses/gdprcontrollerterms/"
                target="_blank"
                rel="noopener noreferrer"
              >https://privacy.google.com/businesses/gdprcontrollerterms/</a>
              und
              <a
                href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
                target="_blank"
                rel="noopener noreferrer"
              >https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerkl&auml;rung von Google:
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >https://policies.google.com/privacy?hl=de</a>.
            </p>
            <p>
              Quelle:
              <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
            </p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialogImpressum = false">Verstanden</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </footer>
</template>

<script>
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue
export default {
  components: {
    LottieAnimation,
  },
  data() {
    return {
      dialogImpressum: false,
      dialogAgb: false,
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    windowWidth(newHeight, oldHeight) {
      this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
body {
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}
li {
  text-align: justify;
}
.footer {
  background-color: #5f5950;
  padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 80px;
  width: 80px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}

.followusanimation {
  width: 140px;
  height: 140px;
}
.followusanimationHandy {
  width: 120px;
  height: 120px;
  padding-bottom: 10px;
}
.instagramAnimation {
  width: 130px;
  height: 130px;
  border: 1px solid white;
}
.instagramAnimationHandy {
  width: 120px;
  height: 120px;
  padding-bottom: 10px;
}
</style>
