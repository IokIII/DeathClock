import { useState } from 'react';

const TRANSLATIONS = {
  "en-US": {
    "pageTitle": "Life in weeks",
    "pageSubtitle": "A simple visualization to reflect on the passage of time",
    "birthDateQuestion": "Enter a birthdate",
    "visualizeButton": "Visualize your time",
    "startOverButton": "Start over",
    "lifeInWeeksTitle": "Your life in weeks",
    "weekHoverPast": " A week from your past",
    "weekHoverCurrent": " Your current week",
    "weekHoverFuture": " A week in your potential future",
    "legendPast": "Past",
    "legendPresent": "Present",
    "legendFuture": "Future",
    "lifeHighlightsTitle": "Life highlights",
    "lifeHighlightsWeeks": "You've lived",
    "lifeHighlightsWeeksEnd": "weeks, which is",
    "lifeHighlightsPercent": "of a full life.",
    "lifeHighlightsDays": "That's",
    "lifeHighlightsDaysEnd": "days of experience and approximately",
    "lifeHighlightsSeasonsEnd": "seasons observed.",
    "lifeHighlightsHeartbeats": "Your heart has beaten approximately",
    "lifeHighlightsHeartbeatsEnd": "times.",
    "lifeHighlightsBreaths": "You've taken around",
    "lifeHighlightsBreathsMiddle": "breaths and slept about",
    "lifeHighlightsBreathsEnd": "hours.",
    "societalContextTitle": "Societal context",
    "societalPopulation": "During your lifetime, humanity's population has grown from",
    "societalPopulationEnd": "to over",
    "societalPopulationFinal": "billion people.",
    "societalMeetings": "The average person will meet around",
    "societalMeetingsMiddle": "people in their lifetime. You've likely already met approximately",
    "societalMeetingsEnd": "individuals.",
    "societalBirthsDeaths": "Since your birth, humanity has collectively experienced approximately",
    "societalBirthsMiddle": "births and",
    "societalDeathsEnd": "deaths.",
    "cosmicPerspectiveTitle": "Cosmic perspective",
    "cosmicEarthTravel": "Since your birth, Earth has traveled approximately",
    "cosmicEarthTravelEnd": "kilometers through space around the Sun.",
    "cosmicUniverse": "The observable universe is about",
    "cosmicUniverseMiddle": "billion light-years across, meaning light takes",
    "cosmicUniverseMiddle2": "billion years to cross it. Your entire lifespan is just",
    "cosmicUniverseEnd": "of the universe's age.",
    "cosmicSolarSystem": "During your lifetime, our solar system has moved about",
    "cosmicSolarSystemEnd": "kilometers through the Milky Way galaxy.",
    "naturalWorldTitle": "Natural world",
    "naturalLunarCycles": "You've experienced approximately",
    "naturalLunarMiddle": "lunar cycles and",
    "naturalLunarEnd": "trips around the Sun.",
    "naturalSequoia": "A giant sequoia tree can live over 3,000 years. Your current age is",
    "naturalSequoiaEnd": "of its potential lifespan.",
    "naturalCells": "During your lifetime, your body has replaced most of its cells several times. You are not made of the same atoms you were born with."
  },
  /* LOCALE_PLACEHOLDER_START */
  "es-ES": {
    "pageTitle": "La vida en semanas",
    "pageSubtitle": "Una visualización simple para reflexionar sobre el paso del tiempo",
    "birthDateQuestion": "Ingresa una fecha de nacimiento",
    "visualizeButton": "Visualizar tu tiempo",
    "startOverButton": "Empezar de nuevo",
    "lifeInWeeksTitle": "Tu vida en semanas",
    "weekHoverPast": " Una semana de tu pasado",
    "weekHoverCurrent": " Tu semana actual",
    "weekHoverFuture": " Una semana en tu futuro potencial",
    "legendPast": "Pasado",
    "legendPresent": "Presente",
    "legendFuture": "Futuro",
    "lifeHighlightsTitle": "Aspectos destacados de la vida",
    "lifeHighlightsWeeks": "Has vivido",
    "lifeHighlightsWeeksEnd": "semanas, que es el",
    "lifeHighlightsPercent": "de una vida completa.",
    "lifeHighlightsDays": "Eso son",
    "lifeHighlightsDaysEnd": "días de experiencia y aproximadamente",
    "lifeHighlightsSeasonsEnd": "estaciones observadas.",
    "lifeHighlightsHeartbeats": "Tu corazón ha latido aproximadamente",
    "lifeHighlightsHeartbeatsEnd": "veces.",
    "lifeHighlightsBreaths": "Has tomado alrededor de",
    "lifeHighlightsBreathsMiddle": "respiraciones y has dormido aproximadamente",
    "lifeHighlightsBreathsEnd": "horas.",
    "societalContextTitle": "Contexto social",
    "societalPopulation": "Durante tu vida, la población de la humanidad ha crecido de",
    "societalPopulationEnd": "a más de",
    "societalPopulationFinal": "mil millones de personas.",
    "societalMeetings": "La persona promedio conocerá alrededor de",
    "societalMeetingsMiddle": "personas en su vida. Probablemente ya has conocido aproximadamente",
    "societalMeetingsEnd": "individuos.",
    "societalBirthsDeaths": "Desde tu nacimiento, la humanidad ha experimentado colectivamente aproximadamente",
    "societalBirthsMiddle": "nacimientos y",
    "societalDeathsEnd": "muertes.",
    "cosmicPerspectiveTitle": "Perspectiva cósmica",
    "cosmicEarthTravel": "Desde tu nacimiento, la Tierra ha viajado aproximadamente",
    "cosmicEarthTravelEnd": "kilómetros a través del espacio alrededor del Sol.",
    "cosmicUniverse": "El universo observable tiene aproximadamente",
    "cosmicUniverseMiddle": "mil millones de años luz de diámetro, lo que significa que la luz tarda",
    "cosmicUniverseMiddle2": "mil millones de años en cruzarlo. Toda tu vida es solo el",
    "cosmicUniverseEnd": "de la edad del universo.",
    "cosmicSolarSystem": "Durante tu vida, nuestro sistema solar se ha movido aproximadamente",
    "cosmicSolarSystemEnd": "kilómetros a través de la galaxia Vía Láctea.",
    "naturalWorldTitle": "Mundo natural",
    "naturalLunarCycles": "Has experimentado aproximadamente",
    "naturalLunarMiddle": "ciclos lunares y",
    "naturalLunarEnd": "viajes alrededor del Sol.",
    "naturalSequoia": "Una secuoya gigante puede vivir más de 3,000 años. Tu edad actual es el",
    "naturalSequoiaEnd": "de su vida potencial.",
    "naturalCells": "Durante tu vida, tu cuerpo ha reemplazado la mayoría de sus células varias veces. No estás hecho de los mismos átomos con los que naciste."
  },
  "fr-FR": {
    "pageTitle": "La vie en semaines",
    "pageSubtitle": "Une visualisation simple pour réfléchir au passage du temps",
    "birthDateQuestion": "Entrez une date de naissance",
    "visualizeButton": "Visualiser votre temps",
    "startOverButton": "Recommencer",
    "lifeInWeeksTitle": "Votre vie en semaines",
    "weekHoverPast": " Une semaine de votre passé",
    "weekHoverCurrent": " Votre semaine actuelle",
    "weekHoverFuture": " Une semaine dans votre futur potentiel",
    "legendPast": "Passé",
    "legendPresent": "Présent",
    "legendFuture": "Futur",
    "lifeHighlightsTitle": "Points saillants de la vie",
    "lifeHighlightsWeeks": "Vous avez vécu",
    "lifeHighlightsWeeksEnd": "semaines, ce qui représente",
    "lifeHighlightsPercent": "d'une vie complète.",
    "lifeHighlightsDays": "Cela représente",
    "lifeHighlightsDaysEnd": "jours d'expérience et environ",
    "lifeHighlightsSeasonsEnd": "saisons observées.",
    "lifeHighlightsHeartbeats": "Votre cœur a battu environ",
    "lifeHighlightsHeartbeatsEnd": "fois.",
    "lifeHighlightsBreaths": "Vous avez pris environ",
    "lifeHighlightsBreathsMiddle": "respirations et dormi environ",
    "lifeHighlightsBreathsEnd": "heures.",
    "societalContextTitle": "Contexte sociétal",
    "societalPopulation": "Durant votre vie, la population humaine a grandi de",
    "societalPopulationEnd": "à plus de",
    "societalPopulationFinal": "milliards de personnes.",
    "societalMeetings": "La personne moyenne rencontrera environ",
    "societalMeetingsMiddle": "personnes dans sa vie. Vous avez probablement déjà rencontré environ",
    "societalMeetingsEnd": "individus.",
    "societalBirthsDeaths": "Depuis votre naissance, l'humanité a collectivement vécu environ",
    "societalBirthsMiddle": "naissances et",
    "societalDeathsEnd": "décès.",
    "cosmicPerspectiveTitle": "Perspective cosmique",
    "cosmicEarthTravel": "Depuis votre naissance, la Terre a voyagé environ",
    "cosmicEarthTravelEnd": "kilomètres dans l'espace autour du Soleil.",
    "cosmicUniverse": "L'univers observable fait environ",
    "cosmicUniverseMiddle": "milliards d'années-lumière de diamètre, ce qui signifie que la lumière met",
    "cosmicUniverseMiddle2": "milliards d'années à le traverser. Toute votre vie ne représente que",
    "cosmicUniverseEnd": "de l'âge de l'univers.",
    "cosmicSolarSystem": "Durant votre vie, notre système solaire s'est déplacé d'environ",
    "cosmicSolarSystemEnd": "kilomètres à travers la galaxie de la Voie lactée.",
    "naturalWorldTitle": "Monde naturel",
    "naturalLunarCycles": "Vous avez vécu environ",
    "naturalLunarMiddle": "cycles lunaires et",
    "naturalLunarEnd": "voyages autour du Soleil.",
    "naturalSequoia": "Un séquoia géant peut vivre plus de 3 000 ans. Votre âge actuel représente",
    "naturalSequoiaEnd": "de sa durée de vie potentielle.",
    "naturalCells": "Durant votre vie, votre corps a remplacé la plupart de ses cellules plusieurs fois. Vous n'êtes pas fait des mêmes atomes avec lesquels vous êtes né."
  }
  /* LOCALE_PLACEHOLDER_END */
};

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';
const findMatchingLocale = (locale: string) => {
  if (TRANSLATIONS[locale as keyof typeof TRANSLATIONS]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};
const locale = (appLocale !== '{{APP_LOCALE}}') ? findMatchingLocale(appLocale) : findMatchingLocale(browserLocale);
const t = (key: string) => TRANSLATIONS[locale as keyof typeof TRANSLATIONS]?.[key as keyof typeof TRANSLATIONS['en-US']] || TRANSLATIONS['en-US'][key as keyof typeof TRANSLATIONS['en-US']] || key;

export default function WeeksOfLife() {
  const [step, setStep] = useState(1);
  const [birthdate, setBirthdate] = useState('');
  const [stats, setStats] = useState<any>(null);
  const [showHoverData, setShowHoverData] = useState(false);
  const [hoverWeek, setHoverWeek] = useState<number | null>(null);

  const calculateStats = (date: string) => {
    const birthDate = new Date(date);
    const today = new Date();
    const birthYear = birthDate.getFullYear();

    // Calculate weeks lived
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksLived = Math.floor((today.getTime() - birthDate.getTime()) / msInWeek);

    // Assuming average lifespan of ~80 years (4160 weeks)
    const totalWeeks = 4160;
    const weeksRemaining = totalWeeks - weeksLived;
    const percentageLived = Math.round((weeksLived / totalWeeks) * 100);

    // Calculate days lived
    const msInDay = 1000 * 60 * 60 * 24;
    const daysLived = Math.floor((today.getTime() - birthDate.getTime()) / msInDay);

    // Calculate hours slept (assuming 8 hours per day)
    const hoursSlept = Math.floor(daysLived * 8);

    // Calculate heartbeats (average 70 bpm)
    const heartbeats = Math.floor(daysLived * 24 * 60 * 70);

    // Calculate breaths (average 16 breaths per minute)
    const breaths = Math.floor(daysLived * 24 * 60 * 16);

    // Calculate seasons experienced
    const seasons = Math.floor(daysLived / 91.25);

    return {
      weeksLived,
      totalWeeks,
      weeksRemaining,
      percentageLived,
      daysLived,
      hoursSlept,
      heartbeats,
      breaths,
      seasons,
      birthYear
    };
  };

  // Helper functions for contextual statistics
  const getPopulationAtYear = (year: number) => {
    // World population estimates by year (in billions)
    const populationData: { [key: number]: number } = {
      1950: 2.5,
      1960: 3.0,
      1970: 3.7,
      1980: 4.4,
      1990: 5.3,
      2000: 6.1,
      2010: 6.9,
      2020: 7.8,
      2025: 8.1
    };

    // Find the closest year in our data
    const years = Object.keys(populationData).map(Number);
    const closestYear = years.reduce((prev, curr) =>
      Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
    );

    return Math.round(populationData[closestYear] * 1000000000);
  };

  const getAverageBirthsPerDay = () => {
    // Approximately 385,000 births per day globally (as of 2023)
    return 385000;
  };

  const getAverageDeathsPerDay = () => {
    // Approximately 166,000 deaths per day globally (as of 2023)
    return 166000;
  };

  const handleSubmit = () => {
    setStats(calculateStats(birthdate));
    setStep(2);
  };

  const getFormattedNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const renderWeekGrid = () => {
    if (!stats) return null;

    const rows = [];
    const weeksPerRow = 52;
    const totalRows = Math.ceil(stats.totalWeeks / weeksPerRow);

    for (let row = 0; row < totalRows; row++) {
      const weekCells = [];
      for (let col = 0; col < weeksPerRow; col++) {
        const weekNumber = row * weeksPerRow + col;
        if (weekNumber < stats.totalWeeks) {
          const isPast = weekNumber < stats.weeksLived;
          const isCurrent = weekNumber === stats.weeksLived;

          // Electric Stack Design
          let cellClass = "w-2 h-2 m-0.5 rounded-sm transition-all duration-300 hover:scale-110 ";
          if (isPast) {
            cellClass += "bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 ";
          } else if (isCurrent) {
            cellClass += "bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse shadow-lg shadow-yellow-500/50 hover:shadow-yellow-400/60 ";
          } else {
            cellClass += "bg-gradient-to-br from-slate-600 to-slate-800 shadow-md hover:shadow-slate-500/30 ";
          }

          weekCells.push(
            <div
              key={weekNumber}
              className={cellClass}
              onMouseEnter={() => {
                setHoverWeek(weekNumber);
                setShowHoverData(true);
              }}
              onMouseLeave={() => setShowHoverData(false)}
            />
          );
        }
      }

      rows.push(
        <div key={row} className="flex">
          {weekCells}
        </div>
      );
    }

    return (
      <div className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg shadow-2xl border border-slate-700">
        <h2 className="text-lg font-normal mb-4 text-cyan-300">{t('lifeInWeeksTitle')}</h2>
        <div className="flex flex-col">
          {rows}
        </div>

        {showHoverData && (
          <div className="mt-4 text-sm text-slate-300">
            Week {hoverWeek! + 1}:
            {hoverWeek! < stats.weeksLived ?
              t('weekHoverPast') :
              hoverWeek === stats.weeksLived ?
              t('weekHoverCurrent') :
              t('weekHoverFuture')}
          </div>
        )}

        <div className="flex mt-6 text-sm">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-cyan-400 mr-2"></div>
            <span className="text-slate-300">{t('legendPast')}</span>
          </div>
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-yellow-400 mr-2"></div>
            <span className="text-slate-300">{t('legendPresent')}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-slate-600 mr-2"></div>
            <span className="text-slate-300">{t('legendFuture')}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderStats = () => {
    if (!stats) return null;

    return (
      <div className="mt-8 space-y-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg shadow-2xl border border-slate-700">
          <h2 className="text-lg font-normal mb-4 text-cyan-300">{t('lifeHighlightsTitle')}</h2>
          <div className="space-y-4">
            <p className="text-slate-300">
              {t('lifeHighlightsWeeks')} <span className="text-cyan-400 font-medium">{getFormattedNumber(stats.weeksLived)}</span> {t('lifeHighlightsWeeksEnd')} <span className="text-cyan-400 font-medium">{stats.percentageLived}%</span> {t('lifeHighlightsPercent')}
            </p>
            <p className="text-slate-300">
              {t('lifeHighlightsDays')} <span className="text-cyan-400 font-medium">{getFormattedNumber(stats.daysLived)}</span> {t('lifeHighlightsDaysEnd')} <span className="text-cyan-400 font-medium">{getFormattedNumber(stats.seasons)}</span> {t('lifeHighlightsSeasonsEnd')}
            </p>
            <p className="text-slate-300">
              {t('lifeHighlightsHeartbeats')} <span className="text-cyan-400 font-medium">{getFormattedNumber(stats.heartbeats)}</span> {t('lifeHighlightsHeartbeatsEnd')}
            </p>
            <p className="text-slate-300">
              {t('lifeHighlightsBreaths')} <span className="text-cyan-400 font-medium">{getFormattedNumber(stats.breaths)}</span> {t('lifeHighlightsBreathsMiddle')} <span className="text-cyan-400 font-medium">{getFormattedNumber(stats.hoursSlept)}</span> {t('lifeHighlightsBreathsEnd')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg shadow-2xl border border-slate-700">
          <h2 className="text-lg font-normal mb-4 text-cyan-300">{t('societalContextTitle')}</h2>
          <div className="space-y-4">
            <p className="text-slate-300">
              {t('societalPopulation')} {stats.birthYear ? <span className="text-cyan-400 font-medium">{getFormattedNumber(getPopulationAtYear(stats.birthYear))}</span> : ""} {t('societalPopulationEnd')} <span className="text-cyan-400 font-medium">8</span> {t('societalPopulationFinal')}
            </p>
            <p className="text-slate-300">
              {t('societalMeetings')} <span className="text-cyan-400 font-medium">80,000</span> {t('societalMeetingsMiddle')} <span className="text-cyan-400 font-medium">{getFormattedNumber(Math.round(80000 * (stats.percentageLived / 100)))}</span> {t('societalMeetingsEnd')}
            </p>
            <p className="text-slate-300">
              {t('societalBirthsDeaths')} <span className="text-cyan-400 font-medium">{getFormattedNumber(Math.round(stats.daysLived * getAverageBirthsPerDay()))}</span> {t('societalBirthsMiddle')} <span className="text-cyan-400 font-medium">{getFormattedNumber(Math.round(stats.daysLived * getAverageDeathsPerDay()))}</span> {t('societalDeathsEnd')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg shadow-2xl border border-slate-700">
          <h2 className="text-lg font-normal mb-4 text-cyan-300">{t('cosmicPerspectiveTitle')}</h2>
          <div className="space-y-4">
            <p className="text-slate-300">
              {t('cosmicEarthTravel')} <span className="text-cyan-400 font-medium">{getFormattedNumber(Math.round(stats.daysLived * 1.6 * 1000000))}</span> {t('cosmicEarthTravelEnd')}
            </p>
            <p className="text-slate-300">
              {t('cosmicUniverse')} <span className="text-cyan-400 font-medium">93</span> {t('cosmicUniverseMiddle')} <span className="text-cyan-400 font-medium">93</span> {t('cosmicUniverseMiddle2')} <span className="text-cyan-400 font-medium">{(80 / 13800000000 * 100).toFixed(10)}%</span> {t('cosmicUniverseEnd')}
            </p>
            <p className="text-slate-300">
              {t('cosmicSolarSystem')} <span className="text-cyan-400 font-medium">{getFormattedNumber(Math.round(stats.daysLived * 24 * 828000))}</span> {t('cosmicSolarSystemEnd')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg shadow-2xl border border-slate-700">
          <h2 className="text-lg font-normal mb-4 text-cyan-300">{t('naturalWorldTitle')}</h2>
          <div className="space-y-4">
            <p className="text-slate-300">
              {t('naturalLunarCycles')} <span className="text-cyan-400 font-medium">{getFormattedNumber(Math.round(stats.daysLived / 29.53))}</span> {t('naturalLunarMiddle')} <span className="text-cyan-400 font-medium">{getFormattedNumber(Math.floor(stats.daysLived / 365.25))}</span> {t('naturalLunarEnd')}
            </p>
            <p className="text-slate-300">
              {t('naturalSequoia')} <span className="text-cyan-400 font-medium">{((stats.daysLived / 365.25) / 3000 * 100).toFixed(2)}%</span> {t('naturalSequoiaEnd')}
            </p>
            <p className="text-slate-300">
              {t('naturalCells')}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const handleReset = () => {
    setBirthdate('');
    setStats(null);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 pt-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-normal text-cyan-300 mb-2">{t('pageTitle')}</h1>
        <p className="text-slate-300 mb-8">{t('pageSubtitle')}</p>

        {step === 1 ? (
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-normal mb-4 text-gray-800">{t('birthDateQuestion')}</h2>
            <div>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md mb-4 text-gray-800"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
                disabled={!birthdate}
              >
                {t('visualizeButton')}
              </button>
            </div>
          </div>
        ) : (
          <>
            {renderWeekGrid()}
            {renderStats()}
            <button
              onClick={handleReset}
              className="mt-8 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              {t('startOverButton')}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
