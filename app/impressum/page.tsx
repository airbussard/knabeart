export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-light mb-8">Impressum</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-light mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-700">
              Michaela Knabe<br />
              Künstlerin<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light mb-3">Kontakt</h2>
            <p className="text-gray-700">
              E-Mail: kontakt@knabeart.de<br />
              Telefon: [Telefonnummer]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light mb-3">Umsatzsteuer</h2>
            <p className="text-gray-700">
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-gray-700">
              Michaela Knabe<br />
              [Anschrift wie oben]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light mb-3">Haftungsausschluss</h2>
            
            <h3 className="text-lg font-light mb-2 mt-4">Haftung für Inhalte</h3>
            <p className="text-gray-700 text-sm">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-lg font-light mb-2 mt-4">Haftung für Links</h3>
            <p className="text-gray-700 text-sm">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-lg font-light mb-2 mt-4">Urheberrecht</h3>
            <p className="text-gray-700 text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light mb-3">Bildrechte</h2>
            <p className="text-gray-700">
              Alle auf dieser Website gezeigten Kunstwerke und Fotografien sind urheberrechtlich geschützt. 
              © Michaela Knabe. Alle Rechte vorbehalten.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  )
}